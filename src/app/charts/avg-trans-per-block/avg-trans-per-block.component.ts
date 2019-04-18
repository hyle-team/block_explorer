import {Component, OnInit} from '@angular/core';
import {HttpService, MobileNavState} from '../../http.service';
import {Chart} from 'angular-highcharts';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-avg-trans-per-block',
    templateUrl: './avg-trans-per-block.component.html',
    styleUrls: ['./avg-trans-per-block.component.scss']
})
export class AvgTransPerBlockComponent implements OnInit {
    navIsOpen: boolean;
    searchIsOpen: boolean;

    activeChart: string;
    period: string;
    InputArray: any;
    chartSubscription: Subscription;
    AvgTransPerBlockChart: Chart;
    seriesData: any;
    loader: boolean;

    static drawChart(activeChart, titleText, yText, chartsData): Chart {
        return new Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x',
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px',
                }
            },
            credits: {enabled: false},
            exporting: {enabled: false},
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica',
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                shared: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',

                pointFormatter: function () {
                    const point = this;
                    return '<b style="color:' + point.color + '">\u25CF</b> ' + point.series.name + ': <b>' + (point.y) + '</b><br/>';
                }
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
                },
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
                    },
                },
            },
            navigator: {enabled: true},
            rangeSelector: {
                height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: 'day'
                }, {
                    type: 'week',
                    count: 1,
                    text: 'week'
                }, {
                    type: 'month',
                    count: 1,
                    text: 'month'
                }, {
                    type: 'month',
                    count: 3,
                    text: 'quarter'
                }, {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }, {
                    type: 'all',
                    text: 'all'
                }],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc',
                },
                inputStyle: {
                    color: '#9eaacc',
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 18,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1,
                    },
                    states: {
                        hover: {
                            fill: '#32439f',
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400,
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default',
                            }
                        }
                    }
                },
            },
            series: chartsData,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 575,
                    },
                    chartOptions: {
                        chart: {
                            width: 575
                        },
                        rangeSelector: {
                            height: 100,
                            inputPosition: {
                                align: 'left',
                            }
                        }
                    }
                }]
            }
        });
    }

    onIsVisible($event): void {
        this.searchIsOpen = $event;
    }

    constructor(private httpService: HttpService, private mobileNavState: MobileNavState) {
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'AvgTransPerBlock';
        this.period = 'all';
    }

    ngOnInit() {
        this.mobileNavState.change.subscribe(navIsOpen => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }

    initialChart() {
        this.loader = true;
        if (this.chartSubscription) {
            this.chartSubscription.unsubscribe();
        }
        this.chartSubscription = this.httpService.getChart(this.activeChart, this.period).subscribe(data => {
                this.InputArray = data;
                const AvgTransPerBlock = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    AvgTransPerBlock.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].tr_count]);
                }
                this.AvgTransPerBlockChart = AvgTransPerBlockComponent.drawChart(
                    false,
                    'Average Number Of Transactions Per Block',
                    'Transaction Per Block',
                    this.seriesData = [
                        {type: 'area', name: 'Transaction Per Block', data: AvgTransPerBlock}
                    ]
                );
            }, err => console.log(err),
            () => {
                this.loader = false;
            });
    }
}



