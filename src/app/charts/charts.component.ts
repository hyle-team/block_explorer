import { Component, OnInit, OnDestroy } from '@angular/core'
import { Chart } from 'angular-highcharts'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { take } from 'rxjs/operators'
import { MobileNavState } from '../services/http.service'
import { ChartsState } from 'app/states/charts-state'
import { SeriesOptionsType } from 'highcharts'
import { Store } from '@ngxs/store'

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    standalone: false
})
export class ChartsComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    navIsOpen: boolean
    activeChart: string
    period: string

    previewAvgBlockSizeChart: Chart
    previewAvgTransPerBlockChart: Chart
    previewHashRateChart: Chart
    previewDifficultyPoSChart: Chart
    previewDifficultyPoWChart: Chart
    previewConfirmTransactPerDayChart: Chart
    loader: boolean
    InputArray: any
    ArrayConfirmTransactPerDay: any
    ArrayHashrate: any
    searchIsOpen: boolean

    allCharts$ = this.store.select(ChartsState.selectAllCharts)

    constructor(
        private mobileNavState: MobileNavState,
        private store: Store
    ) {
        super()
        this.navIsOpen = false
        this.loader = true
        this.searchIsOpen = false
        this.period = 'all'
        this.activeChart = 'all'
    }

    drawChart(activeChart, titleText, yText, chartsData: SeriesOptionsType[]): Chart {
        return new Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 280
            },
            boost: {
                enabled: true
            },
            accessibility: {
                enabled: false
            },
            title: {
                text: null,
                style: {
                    color: '#fff',
                    fontSize: '14px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: false
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
                    lineWidth: activeChart === true ? 1 : 2,
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
                scrollbar: {
                    enabled: false,
                    showFull: false,
                    buttonsEnabled: false
                }              
            },
            yAxis: {
                floor: 0,
                title: {
                    text: null,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                },
                scrollbar: {
                    enabled: false,
                    showFull: false,
                    buttonsEnabled: false
                }
            },
            navigator: {
                enabled: false,
                adaptToUpdatedData: false,
                handles: {
                    enabled: false
                }
            },
            rangeSelector: {
                enabled: false,
                allButtonsEnabled: false
            },
            series: chartsData
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

    initialChart() {
        this.loader = true

        this._track(
            this.allCharts$.subscribe(data => {

                if (data.length === 0)
                    return
                
                this.InputArray = data
                this.ArrayConfirmTransactPerDay = data[0]
                this.ArrayHashrate = data[1]
                const previewAvgBlockSize = []
                const previewAvgTransPerBlock = []
                const previewDifficultyPoS = []
                const previewDifficultyPoW = []

                const previewHashrate100 = []
                const previewHashrate400 = []
                const previewDifficulty120 = []

                const previewConfirmTransactPerDay = []

                // AvgBlockSize, AvgTransPerBlock
                for (let i = 0; i < this.InputArray.length; i++) {
                    let at = this.InputArray[i].at * 1000
                    if (isNaN(at))
                        continue
                    previewAvgBlockSize.push([
                        at,
                        this.InputArray[i].bcs
                    ])
                    previewAvgTransPerBlock.push([
                        at,
                        this.InputArray[i].trc
                    ])
                }

                // ConfirmTransactPerDay
                for (
                    let i = 1;
                    i < this.ArrayConfirmTransactPerDay.length;
                    i++
                ) {
                    let at = this.ArrayConfirmTransactPerDay[i].at * 1000
                    if (isNaN(at))
                        continue
                    previewConfirmTransactPerDay.push([
                        at,
                        parseInt(
                            this.ArrayConfirmTransactPerDay[i].sum_trc,
                            10
                        )
                    ])
                }

                // Difficulty (PoS/PoW)
                for (let i = 0; i < this.InputArray.length; i++) {
                    let at = this.InputArray[i].at * 1000
                    if (isNaN(at))
                        continue
                    if (this.InputArray[i].t === 0) {
                        previewDifficultyPoS.push([
                            at,
                            this.InputArray[i].d,
                            10
                        ])
                    }
                    if (this.InputArray[i].t === 1) {
                        previewDifficultyPoW.push([
                            at,
                            parseInt(this.InputArray[i].d, 10)
                        ])
                    }
                }
                // hashRate
                for (let i = 0; i < this.ArrayHashrate.length; i++) {
                    let at = this.ArrayHashrate[i].at * 1000
                    if (isNaN(at))
                        continue
                    // const hashrate100 = this.ArrayHashrate[i]['hashrate100'] = (i > 99) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 100]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 100]['actual_timestamp'])) : 0;
                    // const hashrate400 = this.ArrayHashrate[i]['hashrate400'] = (i > 399) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 400]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 400]['actual_timestamp'])) : 0;
                    previewHashrate100.push([
                        at,
                        parseInt(this.ArrayHashrate[i].h100, 10)
                    ])
                    previewHashrate400.push([
                        at,
                        parseInt(this.ArrayHashrate[i].h400, 10)
                    ])
                    previewDifficulty120.push([
                        at,
                        parseInt(this.ArrayHashrate[i].d120, 10)
                    ])
                }

                let avgBlockSizeData: SeriesOptionsType[] = [
                    {
                        type: 'area',
                        name: 'MB',
                        data: previewAvgBlockSize
                    }]
                if (this.previewAvgBlockSizeChart) {
                    this.previewAvgBlockSizeChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(avgBlockSizeData[0], true, true)
                    })
                }
                else
                {
                    this.previewAvgBlockSizeChart = this.drawChart(
                        true,
                        'Average Block Size',
                        'MB',
                        avgBlockSizeData
                    )
                }

                let avgTransPerBlockData: SeriesOptionsType[] = [
                {
                    type: 'area',
                    name: 'Transaction Per Block',
                    data: previewAvgTransPerBlock
                }]
                if (this.previewAvgTransPerBlockChart) {
                    this.previewAvgTransPerBlockChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(avgTransPerBlockData[0], true, true)
                    })
                }
                else
                {
                    this.previewAvgTransPerBlockChart =
                        this.drawChart(
                            true,
                            'Average Number Of Transactions Per Block',
                            'Transaction Per Block',
                            avgTransPerBlockData
                        )
                }
                
                let difficultyPoWData: SeriesOptionsType[] = [
                {
                    type: 'area',
                    name: 'PoW difficulty',
                    data: previewDifficultyPoW
                }]
                if (this.previewDifficultyPoWChart) {
                    this.previewDifficultyPoWChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(difficultyPoWData[0],true, true)
                    })
                }
                else {
                    this.previewDifficultyPoWChart = this.drawChart(
                        true,
                        'PoW Difficulty',
                        'PoW Difficulty',
                        difficultyPoWData
                    )
                }

                let difficultyPoSData: SeriesOptionsType[] = [
                {
                    type: 'area',
                    name: 'PoS difficulty',
                    data: previewDifficultyPoS
                }]
                if (this.previewDifficultyPoSChart)
                {
                    this.previewDifficultyPoSChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(difficultyPoSData[0], true, true)
                    })
                }
                else {
                    this.previewDifficultyPoSChart = this.drawChart(
                        true,
                        'PoS Difficulty',
                        'PoS Difficulty',
                        difficultyPoSData
                    )
                }

                let hashRateData: SeriesOptionsType[] =  [
                    {
                        type: 'area',
                        name: 'Hash Rate 100',
                        data: previewHashrate100,
                        color: '#28B463'
                    },
                    {
                        type: 'area',
                        name: 'Hash Rate 400',
                        data: previewHashrate400,
                        color: '#3498DB'
                    },
                    {
                        type: 'area',
                        name: 'Difficulty',
                        data: previewDifficulty120,
                        color: '#d2fe46'
                    }
                ]
                if (this.previewHashRateChart) {
                    this.previewHashRateChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(hashRateData[0], true, true);
                        c.addSeries(hashRateData[1], true, true);
                        c.addSeries(hashRateData[2], true, true);
                    })
                }
                else
                {
                    this.previewHashRateChart = this.drawChart(
                        true,
                        'Hash Rate',
                        'Hash Rate H/s',
                        hashRateData
                    )
                }

                let confirmTransactPerDayData: SeriesOptionsType[] = [
                {
                    type: 'area',
                    name: 'Transactions',
                    data: previewConfirmTransactPerDay
                }]
                if (this.previewConfirmTransactPerDayChart) {
                    this.previewConfirmTransactPerDayChart.ref$.forEach(c => {
                        c.series[0].remove(false);
                        c.addSeries(confirmTransactPerDayData[0], true, true)
                    })
                }
                else
                {
                    this.previewConfirmTransactPerDayChart =
                        this.drawChart(
                            true,
                            'Confirmed Transactions Per Day',
                            'Transactions',
                            confirmTransactPerDayData
                        )
                }
                this.loader = false
            })
        )
    }

    ngOnDestroy() {
        super.ngOnDestroy()
        if (this.previewAvgBlockSizeChart)
            this.previewAvgBlockSizeChart.destroy()
        if (this.previewAvgTransPerBlockChart)
            this.previewAvgTransPerBlockChart.destroy()
        if (this.previewHashRateChart)
            this.previewHashRateChart.destroy()
        if (this.previewDifficultyPoSChart)
            this.previewDifficultyPoSChart.destroy()
        if (this.previewDifficultyPoWChart)
            this.previewDifficultyPoWChart.destroy()
        if (this.previewConfirmTransactPerDayChart)
            this.previewConfirmTransactPerDayChart.destroy()
    }
}
