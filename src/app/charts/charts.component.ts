import {Component, OnInit, OnDestroy} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {HttpService, MobileNavState} from '../http.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
    navIsOpen: boolean;
    activeChart: string;
    period: string;

    previewAvgBlockSizeChart: Chart;
    previewAvgTransPerBlockChart: Chart;
    previewHashRateChart: Chart;
    previewDifficultyPoSChart: Chart;
    previewDifficultyPoWChart: Chart;
    previewConfirmTransactPerDayChart: Chart;

    chartSubscription: Subscription;
    loader: boolean;
    InputArray: any;
    ArrayConfirmTransactPerDay: any;
    ArrayHashrate: any;

    seriesData: any;
    searchIsOpen: boolean;


    static drawChart(activeChart, titleText, yText, chartsData): Chart {
        return new Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 280,
                // width: 375,
                zoomType: 'x',
            },
            title: {
                text: null,
                style: {
                    color: '#fff',
                    fontSize: '14px',
                }
            },
            credits: {enabled: false},
            exporting: {enabled: false},
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica',
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
                    },
                },
            },
            navigator: false,
            rangeSelector: {
                enabled: yText !== 'Transactions',
                // enabled: false,
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: 'day'
                }],
                selected: 0,
                inputEnabled: false
            },
            series: chartsData
        });
    }

    onIsVisible($event): void {
        this.searchIsOpen = $event;
    }

    constructor(
        private httpService: HttpService,
        private mobileNavState: MobileNavState) {
        this.navIsOpen = false;
        this.loader = true;
        this.searchIsOpen = false;
        this.period = 'all';
        this.activeChart = 'all';
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
                this.ArrayConfirmTransactPerDay = data[0];
                this.ArrayHashrate = data[1];
                const previewAvgBlockSize = [];
                const previewAvgTransPerBlock = [];
                const previewDifficultyPoS = [];
                const previewDifficultyPoW = [];

                const previewHashrate100 = [];
                const previewHashrate400 = [];
                const previewDifficulty120 = [];

                const previewConfirmTransactPerDay = [];


                // AvgBlockSize, AvgTransPerBlock
                for (let i = 0; i < this.InputArray.length; i++) {
                    previewAvgBlockSize.push([this.InputArray[i].at * 1000, this.InputArray[i].bcs]);
                    previewAvgTransPerBlock.push([this.InputArray[i].at * 1000, this.InputArray[i].trc]);
                }

                // ConfirmTransactPerDay
                for (let i = 1; i < this.ArrayConfirmTransactPerDay.length; i++) {
                    previewConfirmTransactPerDay.push([this.ArrayConfirmTransactPerDay[i].at * 1000, parseInt(this.ArrayConfirmTransactPerDay[i].sum_trc, 10)]);
                }

                // Difficulty (PoS/PoW)
                for (let i = 0; i < this.InputArray.length; i++) {
                    if (this.InputArray[i].t === 0) {
                        previewDifficultyPoS.push([this.InputArray[i].at * 1000, parseInt(this.InputArray[i].d, 10)])
                    }
                    if (this.InputArray[i].t === 1) {
                        previewDifficultyPoW.push([this.InputArray[i].at * 1000, parseInt(this.InputArray[i].d, 10)])
                    }
                }

                // hashRate
                for (let i = 0; i < this.ArrayHashrate.length; i++) {
                    // const hashrate100 = this.ArrayHashrate[i]['hashrate100'] = (i > 99) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 100]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 100]['actual_timestamp'])) : 0;
                    // const hashrate400 = this.ArrayHashrate[i]['hashrate400'] = (i > 399) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 400]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 400]['actual_timestamp'])) : 0;
                    previewHashrate100.push([this.ArrayHashrate[i].at * 1000, parseInt(this.ArrayHashrate[i].h100, 10)]);
                    previewHashrate400.push([this.ArrayHashrate[i].at * 1000, parseInt(this.ArrayHashrate[i].h400, 10)]);
                    previewDifficulty120.push([this.ArrayHashrate[i].at * 1000, parseInt(this.ArrayHashrate[i].d120, 10)]);
                }

                this.previewAvgBlockSizeChart = ChartsComponent.drawChart(
                    true,
                    'Average Block Size',
                    'MB',
                    this.seriesData = [
                        {type: 'area', name: 'MB', data: previewAvgBlockSize}
                    ]
                );
                this.previewAvgTransPerBlockChart = ChartsComponent.drawChart(
                    true,
                    'Average Number Of Transactions Per Block',
                    'Transaction Per Block',
                    this.seriesData = [
                        {type: 'area', name: 'Transaction Per Block', data: previewAvgTransPerBlock}
                    ]
                );
                this.previewDifficultyPoWChart = ChartsComponent.drawChart(
                    true,
                    'PoW Difficulty',
                    'PoW Difficulty',
                    this.seriesData = [
                        {
                            type: 'area', name: 'PoW difficulty', data: previewDifficultyPoW
                        }
                    ]
                );
                this.previewDifficultyPoSChart = ChartsComponent.drawChart(
                    true,
                    'PoS Difficulty',
                    'PoS Difficulty',
                    this.seriesData = [
                        {
                            type: 'area', name: 'PoS difficulty', data: previewDifficultyPoS,
                        }
                    ]
                );
                this.previewHashRateChart = ChartsComponent.drawChart(
                    true,
                    'Hash Rate',
                    'Hash Rate H/s',
                    this.seriesData = [
                        {type: 'area', name: 'Hash Rate 100', data: previewHashrate100, color: '#28B463'},
                        {type: 'area', name: 'Hash Rate 400', data: previewHashrate400, color: '#3498DB'},
                        {type: 'area', name: 'Difficulty', data: previewDifficulty120, color: '#d2fe46'}
                    ]
                );
                this.previewConfirmTransactPerDayChart = ChartsComponent.drawChart(
                    true,
                    'Confirmed Transactions Per Day',
                    'Transactions',
                    this.seriesData = [
                        {type: 'area', name: 'Transactions', data: previewConfirmTransactPerDay}
                    ]
                );
            }, err => console.log('error chart', err),
            () => {
                this.loader = false;
            });
    }

    ngOnDestroy() {
        if (this.chartSubscription) {
            this.chartSubscription.unsubscribe();
        }
    }

}
