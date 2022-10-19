import { DateTime } from 'luxon';
import { DateTimeToFormatPipe } from './date-time-to-format.pipe';

describe('DateTimeToFormatPipe', () => {
  const format = 'ccccc HH:mm';
  const pipe = new DateTimeToFormatPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null, format)).toBeUndefined();
      expect(pipe.transform(undefined, format)).toBeUndefined();
    });

    it('transforms a DateTime into an arbitrarily formatted string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00'), format))
        .toMatch(/^\w \d{2}:\d{2}$/);
    });
  });
});
