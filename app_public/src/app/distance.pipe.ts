import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(distance: number): string {
    const isNumeric = function (n: any) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    if (distance && isNumeric(distance)) {
        let thisDistance = '0';
        let unit = 'm';
        if (distance > 1000) {
            thisDistance = parseFloat((distance / 1000).toString()).toFixed(1);
            unit = 'km';
        } else {
            thisDistance = Math.floor(distance).toString();
        }
        return thisDistance + unit;
    } else {
        return '?';
    }
  }

}
