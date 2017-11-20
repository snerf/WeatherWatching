import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fahrenheihtToCelsius'
})
export class FahrenheitToCelsius implements PipeTransform {
    transform(fahrenheiht: number): any {
        return Math.round((fahrenheiht - 32) / 1.8);
    }
}
