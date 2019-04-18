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
    previewDifficultyChart: Chart;
    previewConfirmTransactPerDayChart: Chart;

    chartSubscription: Subscription;
    loader: boolean;
    InputArray: any;
    InputArrayTwo: any;
    InputArrayThree: any;

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
                enabled: false
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
        if (this.chartSubscription) {
            this.chartSubscription.unsubscribe();
            this.loader = true;
        }

        this.chartSubscription = this.httpService.getChart(this.activeChart, this.period).subscribe(data => {
                this.InputArray = data;
                this.InputArrayTwo = data[0];
                this.InputArrayThree = data[1];

                const previewAvgBlockSize = [];
                const previewAvgTransPerBlock = [];
                const previewDifficulty = [];

                const previewHashrate100 = [];
                const previewHashrate400 = [];
                const previewDifficulty120 = [];

                const previewConfirmTransactPerDay = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    previewAvgBlockSize.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].block_cumulative_size]);
                    previewAvgTransPerBlock.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].tr_count]);

                }
                for (let i = 1; i < this.InputArrayTwo.length; i++) {
                    previewConfirmTransactPerDay.push([this.InputArrayTwo[i].actual_timestamp * 1000, this.InputArrayTwo[i].sum_tr_count]);
                }
                for (let i = 1; i < this.InputArrayThree.length; i++) {
                    previewDifficulty.push([this.InputArrayThree[i].actual_timestamp * 1000, parseInt(this.InputArrayThree[i].difficulty, 10)]);

                    const hashrate100 = this.InputArrayThree[i]['hashrate100'] = (i > 99) ? ((this.InputArrayThree[i]['cumulative_diff_precise'] - this.InputArrayThree[i - 100]['cumulative_diff_precise']) / (this.InputArrayThree[i]['actual_timestamp'] - this.InputArrayThree[i - 100]['actual_timestamp'])) : 0;
                    const hashrate400 = this.InputArrayThree[i]['hashrate400'] = (i > 399) ? ((this.InputArrayThree[i]['cumulative_diff_precise'] - this.InputArrayThree[i - 400]['cumulative_diff_precise']) / (this.InputArrayThree[i]['actual_timestamp'] - this.InputArrayThree[i - 400]['actual_timestamp'])) : 0;
                    previewHashrate100.push([this.InputArrayThree[i].actual_timestamp * 1000, hashrate100]);
                    previewHashrate400.push([this.InputArrayThree[i].actual_timestamp * 1000, hashrate400]);
                    previewDifficulty120.push([this.InputArrayThree[i].actual_timestamp * 1000, parseInt(this.InputArrayThree[i].difficulty120, 10)]);
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
                this.previewDifficultyChart = ChartsComponent.drawChart(
                    true,
                    'Difficulty',
                    'Difficulty',
                    this.seriesData = [
                        {
                            type: 'area', name: 'PoW difficulty', data: previewDifficulty,
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
