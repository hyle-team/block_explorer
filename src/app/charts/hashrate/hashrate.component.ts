import { Component, OnInit } from '@angular/core'
import { MobileNavState } from '../../services/http.service'
import { Chart } from 'angular-highcharts'
import { take } from 'rxjs/operators'
import { SubscriptionTracker } from '../../subscription-tracker/subscription-tracker'
import { Select } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { Observable } from 'rxjs'
import { SeriesOptionsType } from 'highcharts'

@Component({
    selector: 'app-hashrate',
    templateUrl: './hashrate.component.html',
    styleUrls: ['./hashrate.component.scss'],
    standalone: false
})
export class HashrateComponent extends SubscriptionTracker implements OnInit {
    navIsOpen: boolean
    searchIsOpen: boolean
    activeChart: string
    period: string
    InputArray: any
    hashRateChart: Chart
    loader: boolean

    @Select(ChartsState.selectAllHashRate) allHashRate$: Observable<any[]>

    constructor(private mobileNavState: MobileNavState) {
        super()
        this.navIsOpen = false
        this.searchIsOpen = false
        this.activeChart = 'hashRate'
        this.period = 'all'
    }

    drawChart(titleText, yText, chartsData: SeriesOptionsType[]): Chart {
        return new Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zooming: {
                    type: 'x'
                }
            },
            accessibility: {
                enabled: false
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',

                pointFormatter: function () {
                    const point = this
                    return (
                        '<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>'
                    )
                },
                shared: true
                // crosshairs: true,
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                // height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year'
                    },
                    {
                        type: 'all',
                        text: 'all'
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        })
    }

    onIsVisible($event): void {
        this.searchIsOpen = $event
    }

    ngOnInit() {
        this.mobileNavState.change.pipe(take(1)).subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen
        })
        this.initialChart()
    }

    ngOnDestroy(): void {
        super.ngOnDestroy()
        if (this.hashRateChart)
        this.hashRateChart.destroy()
    }

    initialChart() {
        this.loader = true
        this._track(
            this.allHashRate$.subscribe(data => {
                if (data.length === 0) 
                    return
                this.InputArray = data
                const difficultyArray = []
                const hashRate100 = []
                const hashRate400 = []
                for (let i = 1; i < this.InputArray.length; i++) {
                    hashRate100.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].h100, 10)
                    ])
                    hashRate400.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].h400, 10)
                    ])
                    difficultyArray.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].d120, 10)
                    ])
                }
                let seriesData: SeriesOptionsType[] = [
                    {
                        type: 'area',
                        name: 'Hash Rate 100',
                        data: hashRate100,
                        color: '#28B463'
                    },
                    {
                        type: 'area',
                        name: 'Hash Rate 400',
                        data: hashRate400,
                        color: '#3498DB'
                    },
                    {
                        type: 'area',
                        name: 'Difficulty',
                        data: difficultyArray,
                        color: '#d2fe46'
                    }
                ]
                if (this.hashRateChart) {
                    while (this.hashRateChart.ref.series.length > 0)
                        this.hashRateChart.ref.series[0].remove(false)
                    this.hashRateChart.addSeries(seriesData[0],
                        true,
                        true)
                    this.hashRateChart.addSeries(seriesData[1],
                        true,
                        true)
                    this.hashRateChart.addSeries(seriesData[2],
                        true,
                        true)
                }
                else {
                    this.hashRateChart = this.drawChart(
                        'Hash Rate',
                        'Hash Rate H/s',
                        seriesData
                    )
                }
                this.loader = false
            })
        )
    }
}
