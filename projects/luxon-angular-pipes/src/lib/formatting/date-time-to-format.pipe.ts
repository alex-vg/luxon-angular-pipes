import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeToFormat'
})
export class DateTimeToFormatPipe implements PipeTransform {
  transform(value: DateTime | null | undefined, format: string | Intl.DateTimeFormatOptions) {
    if (typeof format === 'string') {
      return value?.toFormat(format);
    } else {
      return value?.toLocaleString(format);
    }
  }
}
