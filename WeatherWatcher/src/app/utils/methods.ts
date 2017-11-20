export class UtilsMethods
{
    yahooCurrentDateToCommonDate(date: string) {
        let datetlwr = date.toLocaleLowerCase();
        let index = datetlwr.indexOf('pm') > -1 ? datetlwr.indexOf('pm') : (datetlwr.indexOf('am') > -1 ? datetlwr.indexOf('am') : 0);
        if (index == 0) return '';
        return new Date(date.substr(0, index)).toLocaleDateString('ru-RU');
    }

    twelveHoursToTwentyFourHoursString(time: string) {
        if (time.indexOf(':') == -1) return time;

        let am: boolean = time.toLocaleLowerCase().indexOf('am') > -1,
            pm: boolean = time.toLocaleLowerCase().indexOf('pm') > -1,
            result: string = time.replace(/(am|pm)/, '');

        if (!am && pm) {
            let spltd = result.split(':');
            result = (parseInt(spltd[0]) + 12).toString() + ':' + spltd[1];
        }
        return result;
    }

    milesToKmString(value: number): string {
        return Math.round(value * 1.65).toString();
    }

    defineDirection(degrees: number) {
        return degrees < 45 ? 'Северный' :
              (degrees > 45 && degrees < 90 ? 'Северо-Восточный' :
              (degrees > 90 && degrees < 135 ? 'Восточный' :
              (degrees > 135 && degrees < 180 ? 'Юго-Восточный' :
              (degrees > 180 && degrees < 225 ? 'Южный' :
              (degrees > 225 && degrees < 270 ? 'Юго-Западный' :
              (degrees > 270 && degrees < 315 ? 'Западный' :
              (degrees > 315 && degrees < 360 ? 'Северо-Западный' : 'Северный')))))))
    }
}
