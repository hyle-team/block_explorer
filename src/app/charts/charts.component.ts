import {Component, OnInit, OnDestroy} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {HttpService, MobileNavState} from '../http.service';
import {Subscription} from 'rxjs/Subscription';

import HighchartsMoreModule from 'highcharts/highcharts-more';
import NetworkgraphModule from 'highcharts/modules/networkgraph';
import OrganizationModule from 'highcharts/modules/organization';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  navIsOpen: boolean;
  activeChart: string;

  AvgBlockSizeChart: Chart;
  AvgTransPerBlockChart: Chart;
  hashRateChart: Chart;
  difficultyChart: Chart;
  ConfirmTransactPerDayChart: Chart;

  chartSubscription: Subscription;

  loader: boolean;
  InputArray: any;
  seriesData: any;

  searchIsOpen: boolean;


  static drawChart(titleText, yText, chartsData): Chart {
    return new Chart({
      chart: {
        type: 'line',
        backgroundColor: '#2b3768',
        height: 500,
        zoomType: 'x',
      },
      title: {
        text: titleText,
        style: {
          color: '#fff'
        }
      },
      credits: {enabled: false},
      exporting: {enabled: false},
      legend: {enabled: false},
      tooltip: {
        valuePrefix: yText + ': ',
        valueDecimals: 3,
        xDateFormat: '%Y/%m/%e',
        pointFormat: '<div>{point.y}</div>'
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
          lineWidth: 1,
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
  }

  ngOnInit() {
    this.initialChart();
    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }


  initialChart() {
    if (this.chartSubscription) {
      this.chartSubscription.unsubscribe();
      this.loader = true;
    }
    this.chartSubscription = this.httpService.getChart(this.activeChart).subscribe(data => {
          this.InputArray = data;
          this.seriesData = [{type: 'area', data: this.InputArray}];
          if (this.activeChart === 'AvgBlockSize') {
            this.AvgBlockSizeChart = ChartsComponent.drawChart(
                'Average Block Size',
                'MB',
                this.seriesData
            );
          } else if (this.activeChart === 'AvgTransPerBlock') {
            this.AvgTransPerBlockChart = ChartsComponent.drawChart(
                'Average Number Of Transactions Per Block',
                'Transaction Per Block',
                this.seriesData
            );
          } else if (this.activeChart === 'hashRate') {
            this.seriesData = [
              {type: 'area', data: this.InputArray[0]},
              {type: 'area', data: this.InputArray[1]},
              {type: 'area', data: this.InputArray[2]}
            ];
            this.hashRateChart = ChartsComponent.drawChart(
                'Hash Rate',
                'Hash Rate TH/s',
                this.seriesData
            );
          } else if (this.activeChart === 'difficulty') {
            this.difficultyChart = ChartsComponent.drawChart(
                'Difficulty',
                'Difficulty',
                this.seriesData
            );
          } else if (this.activeChart === 'ConfirmTransactPerDay') {
            this.ConfirmTransactPerDayChart = ChartsComponent.drawChart(
                'Confirmed Transactions Per Day',
                'Transactions',
                this.seriesData
            );
          }
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
