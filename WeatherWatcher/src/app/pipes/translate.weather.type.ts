import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translateWeatherType'
})
export class TranslateWeatherType implements PipeTransform {
    transform(value: string): any {
        if (value == null || value == undefined) return '';

        let result: string = '';

        return value.toLocaleLowerCase().indexOf('sunny') > -1 ? 'Солнечно' : 
              (value.toLocaleLowerCase().indexOf('partly cloudy') > -1 ? 'Временами облачно' : 
              (value.toLocaleLowerCase().indexOf('mostly cloudy') > -1 ? 'В основном облачно' :
              (value.toLocaleLowerCase().indexOf('cloudy') > -1 ? 'Облачно' :
              (value.toLocaleLowerCase().indexOf('clear') > -1 ? 'Ясно' :value))));
    }
}
