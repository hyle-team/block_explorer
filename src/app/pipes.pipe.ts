import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import BigNumber from 'bignumber.js';


// array reverse
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: any): any[] {
    if (!array) {
      return array;
    }
    array.reverse();
    return array;
  }
}

// sort
@Pipe({
  name: 'sortgrid',
  pure: false
})
export class SortGridPipe implements PipeTransform {
  transform(array: Array<any>, args?: any): Array<any> {
    if (typeof args[0] === 'undefined') {
      return array;
    }
    const direction = args[0][0];
    const column = args.replace('-','');
    array.sort((a: any, b: any) => {
      const left = Number(new Date(a[column]));
      const right = Number(new Date(b[column]));
      return (direction === '-') ? right - left : left - right;
    });
    return array;
  }
}

@Pipe({
  name: 'sortByAlphabet'
})
export class SortByAlphabetPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

// bit number format
@Pipe({
  name: 'bitNumber',
  pure: false
})
export class BitNumberPipe implements PipeTransform {
  transform(value: any) {
    if (isNaN(value)) {
      return String(value);
    }
    if (value === null) {
      return value;
    }
    const string = value.toString();
    const arr = string.split('.');
    arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    return arr.join(',');
  }
}

// money number format
@Pipe({
  name: 'moneyParse',
  pure: false
})
export class MoneyParsePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === 0 || value === undefined) {
      return '0';
    }
    let maxFraction = 12;
    if (args) {
      maxFraction = parseInt(args, 10);
    }
    const power = Math.pow(10, maxFraction);
    let str = (new BigNumber(value)).div(power).toFixed(maxFraction);

    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== '0') {
        str = str.substr(0, i + 1);
        break;
      }
    }
    if (str[str.length - 1] === '.') {
      str = str.substr(0, str.length - 1);
    }
    return str;
  }
}

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number): any {
    if (value) {
      return value.slice(0, limit);
    }
  }
}


// Long Time Ago
@Pipe({
  name: 'TimeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {
  result: any;

  transform(value: any): any {
      const now = moment(value);

      let utcMoment = moment.utc();
      let date = new Date( utcMoment.format() );
      // let date = moment.utc().valueOf();
      // let date = new Date();
      const exp = moment(date);
      const diffDuration = moment.duration(exp.diff(now));

      if ((diffDuration.days() === 0) && (diffDuration.hours() === 0) && (diffDuration.minutes() === 0)) {
        this.result = 'a few seconds';
      } else if ((diffDuration.days() === 0) && (diffDuration.hours() === 0)) {
        this.result = diffDuration.minutes() + 'm ';
      } else if (diffDuration.days() === 0) {
        this.result = diffDuration.hours() + 'h ' + diffDuration.minutes() + 'm ';
      } else {
        this.result = diffDuration.days() + 'd ' + diffDuration.hours() + 'h ' + diffDuration.minutes() + 'm ';
      }
      return this.result;
  }
}


@Pipe({
  name: 'Order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  static _OrderPipeComparator(a: any, b: any): number {

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      // Isn't a number so lowercase the string to properly compare
      if (a.toLowerCase() < b.toLowerCase()) { return -1; }
      if (a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
      // Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) { return -1; }
      if (parseFloat(a) > parseFloat(b)) { return 1; }
    }

    return 0;
  }

  transform(input: any, [config = '+']): any {

    if (!Array.isArray(input)) { return input; }

    if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
      const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
      const desc = propertyToCheck.substr(0, 1) === '-';

      if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
        return !desc ? input.sort() : input.sort().reverse();
      } else {
        const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
          ? propertyToCheck.substr(1)
          : propertyToCheck;

        return input.sort(function(a: any, b: any){
          return !desc
            ? OrderPipe._OrderPipeComparator(a[property], b[property])
            : -OrderPipe._OrderPipeComparator(a[property], b[property]);
        });
      }
    } else {

      return input.sort(function(a: any, b: any){
        for (let i: any = 0; i < config.length; i++) {
          const desc = config[i].substr(0, 1) === '-';
          const property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
            ? config[i].substr(1)
            : config[i];

          const comparison = !desc
            ? OrderPipe._OrderPipeComparator(a[property], b[property])
            : -OrderPipe._OrderPipeComparator(a[property], b[property]);

          if (comparison !== 0) { return comparison; }
        }

        return 0;
      });
    }
  }
}


@Pipe({
  name: 'hashPowerConverter'
})
export class HashPowerConverterPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const PT = 1000000000000000; // PetaHash
    const TH = 1000000000000; // TeraHash
    const GH = 1000000000; // GigaHash
    const MH = 1000000; // MegaHash
    const KH = 1000; // KiloHash
    if (value && !isNaN(value)) {
      if (value >= PT) {
        return (value / PT).toFixed(3) + ' ' + ((args === 'speed') ? 'PT/sec' : 'P');
      } else if (value >= TH) {
        return (value / TH).toFixed(3) + ' ' + ((args === 'speed') ? 'TH/sec' : 'T');
      } else if (value >= GH) {
        return (value / GH).toFixed(3) + ' ' + ((args === 'speed') ? 'GH/sec' : 'G');
      } else if (value >= MH) {
        return (value / MH).toFixed(3) + ' ' + ((args === 'speed') ? 'MH/sec' : 'M');
      } else if (value >= KH) {
        return (value / KH).toFixed(3) + ' ' + ((args === 'speed') ? 'KH/sec' : 'K');
      } else {
        return value + ' ' + ((args === 'speed') ? 'H/sec' : 'H');
      }
    } else if (value === 0) {
      return value + ' ' + ((args === 'speed') ? 'H/sec' : 'H');
    }
  }
}
