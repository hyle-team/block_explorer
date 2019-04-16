import {Component, OnInit, OnDestroy} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {HttpService, MobileNavState} from '../http.service';
import {Subscription} from 'rxjs/Subscription';

// import HighchartsMoreModule from 'highcharts/highcharts-more';
// import NetworkgraphModule from 'highcharts/modules/networkgraph';
// import OrganizationModule from 'highcharts/modules/organization';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  navIsOpen: boolean;
  activeChart: string;
  period: string;

  AvgBlockSizeChart: Chart;
  previewAvgBlockSizeChart: Chart;

  AvgTransPerBlockChart: Chart;
  previewAvgTransPerBlockChart: Chart;

  hashRateChart: Chart;
  previewHashRateChart: Chart;

  difficultyChart: Chart;
  previewDifficultyChart: Chart;

  ConfirmTransactPerDayChart: Chart;
  previewConfirmTransactPerDayChart: Chart;

  chartSubscription: Subscription;
  loader: boolean;
  InputArray: any;
  InputArrayTwo: any;

  seriesData: any;
  searchIsOpen: boolean;


  static drawChart(activeChart, titleText, yText, chartsData): Chart {
    return new Chart({
      chart: {
        type: 'line',
        backgroundColor: '#2b3768',
        height: activeChart === true ? 300 : 700,
        zoomType: 'x',
      },
      title: {
        text: titleText,
        style: {
          color: '#fff',
          fontSize: activeChart === true ? '14px' : '18px',
        }
      },
      credits: {enabled: false},
      exporting: {enabled: false},
      legend: {
        enabled: activeChart !== true,
        itemStyle: {
          color: '#9eaacc',
          fontFamily: 'Helvetica',
        },
        itemHoverStyle: {
          color: '#9eaacc'
        }
      },
      tooltip: {
        enabled: activeChart !== true,
        shared: true,
        valueDecimals: 0,
        xDateFormat: '%Y/%m/%d %H:%M',

        pointFormatter: function() {
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
      navigator: {enabled: activeChart !== true},
      rangeSelector: {
        height: 60,
        enabled: activeChart !== true,
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
      series: chartsData
    });
  }

  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }

  constructor(private httpService: HttpService, private mobileNavState: MobileNavState) {
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
          if (this.activeChart === 'all') {
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
              previewDifficulty.push([this.InputArray[i].actual_timestamp * 1000, parseInt(this.InputArray[i].difficulty, 10)]);

              const hashrate100 = this.InputArray[i]['hashrate100'] = (i > 99) ? ((this.InputArray[i]['cumulative_diff_precise'] - this.InputArray[i - 100]['cumulative_diff_precise']) / (this.InputArray[i]['actual_timestamp'] - this.InputArray[i - 100]['actual_timestamp'])) : 0;
              const hashrate400 = this.InputArray[i]['hashrate400'] = (i > 399) ? ((this.InputArray[i]['cumulative_diff_precise'] - this.InputArray[i - 400]['cumulative_diff_precise']) / (this.InputArray[i]['actual_timestamp'] - this.InputArray[i - 400]['actual_timestamp'])) : 0;
              previewHashrate100.push([this.InputArray[i].actual_timestamp * 1000, hashrate100]);
              previewHashrate400.push([this.InputArray[i].actual_timestamp * 1000, hashrate400]);
              previewDifficulty120.push([this.InputArray[i].actual_timestamp * 1000, parseInt(this.InputArray[i].difficulty120, 10)]);
            }
            for (let i = 1; i < this.InputArrayTwo.length; i++) {
              previewConfirmTransactPerDay.push([this.InputArrayTwo[i].actual_timestamp * 1000, this.InputArrayTwo[i].sum_tr_count]);
              console.log(previewConfirmTransactPerDay);
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
                  {type: 'area', name: 'PoW difficulty', data: previewDifficulty,
                    // pointStart: 1, pointInterval: 24 * 3600 * 1000
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
          } else if (this.activeChart === 'AvgBlockSize') {
            const AvgBlockSize = [];
            for (let i = 1; i < this.InputArray.length; i++) {
              AvgBlockSize.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].block_cumulative_size]);
            }
            this.AvgBlockSizeChart = ChartsComponent.drawChart(
                false,
                'Average Block Size',
                'MB',
                this.seriesData = [
                  {type: 'area', name: 'MB', data: AvgBlockSize}
                ]
            );
          } else if (this.activeChart === 'AvgTransPerBlock') {
            const AvgTransPerBlock = [];
            for (let i = 1; i < this.InputArray.length; i++) {
              AvgTransPerBlock.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].tr_count]);
            }
            this.AvgTransPerBlockChart = ChartsComponent.drawChart(
                false,
                'Average Number Of Transactions Per Block',
                'Transaction Per Block',
                this.seriesData = [
                  {type: 'area', name: 'Transaction Per Block', data: AvgTransPerBlock}
                ]
            );
          } else if (this.activeChart === 'hashRate') {
            const difficultyArray = [];
            const hashRate100 = [];
            const hashRate400 = [];
            for (let i = 1; i < this.InputArray.length; i++) {
              hashRate100.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].hashrate100]);
              hashRate400.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].hashrate400]);
              difficultyArray.push([this.InputArray[i].actual_timestamp * 1000, parseInt(this.InputArray[i].difficulty, 10)]);
            }
            this.hashRateChart = ChartsComponent.drawChart(
                false,
                'Hash Rate',
                'Hash Rate H/s',
                this.seriesData = [
                  {type: 'area', name: 'Hash Rate 100', data: hashRate100, color: '#28B463'},
                  {type: 'area', name: 'Hash Rate 400', data: hashRate400, color: '#3498DB'},
                  {type: 'area', name: 'Difficulty', data: difficultyArray, color: '#d2fe46'}
                ]
            );
          } else if (this.activeChart === 'difficulty') {
            const difficultyArray = [];
            for (let i = 1; i < this.InputArray.length; i++) {
              difficultyArray.push([this.InputArray[i].actual_timestamp * 1000, parseInt(this.InputArray[i].difficulty, 10)]);
            }
            this.difficultyChart = ChartsComponent.drawChart(
                false,
                'Difficulty',
                'Difficulty',
                this.seriesData = [
                  {type: 'area', name: 'PoW difficulty', data: difficultyArray,
                    // pointStart: 1, pointInterval: 24 * 3600 * 1000
                  }
                ]
            );
          } else if (this.activeChart === 'ConfirmTransactPerDay') {
            const ConfirmTransactPerDay = [];
            for (let i = 1; i < this.InputArray.length; i++) {
              ConfirmTransactPerDay.push([this.InputArray[i].actual_timestamp * 1000, this.InputArray[i].tr_count]);
            }
            this.ConfirmTransactPerDayChart = ChartsComponent.drawChart(
                false,
                'Confirmed Transactions Per Day',
                'Transactions',
                this.seriesData = [
                  {type: 'area', name: 'Transactions', data: ConfirmTransactPerDay}
                ]
            );
          }
        }, err => console.log('error chart', err),
        () => {
          this.loader = false;
        });
  }

    setPeriod(event) {
        this.period = event;
        this.initialChart();
    }

  ngOnDestroy() {
    if (this.chartSubscription) {
      this.chartSubscription.unsubscribe();
    }
  }

}
