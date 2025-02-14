# luxon-angular-pipes

This is a collection of date/time pipes for Angular (12+) based on [Luxon][luxon].

## Getting started

-   Install (making sure Luxon is installed as well):

    ```
    npm install --save luxon luxon-angular-pipes
    ```

    or

    ```
    yarn add luxon luxon-angular-pipes
    ```

    If you plan to use the relative formatting pipes, also install the [`relative-time-format`][relative-time-polyfill] polyfill.

-   Import `LuxonModule`:

    ```typescript
    import { NgModule } from '@angular/core';
    import { LuxonModule } from 'luxon-angular-pipes';

    @NgModule({
      imports: [
        LuxonModule
      ]
    })
    export class AppModule {

    };
    ```

-   Start using the pipes:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
      template: `
        This component was created at {{ date | dateTimeFromJsDate | dateTimeToFormat:'tt' }}!
      `
    })
    export class AppComponent {
      date: Date;

      constructor() {
        this.date = new Date();
      }
    };
    ```

## Available pipes

-   [Parsing](#parsing)
-   [Math](#math)
-   [Time zones and offsets](#time-zones-and-offsets)
-   [Formatting](#formatting)

### Parsing

#### `dateTimeFromFormat`

Transforms an arbitrarily formatted date into a DateTime that can be used with the non-parsing pipes:

```
{{ '02 Jan 2006' | dateTimeFromFormat:'dd LLL yyyy' }}
{{ 'January 2, 2006 3:04 PM' | dateTimeFromFormat:'LLLL d, yyyy h:mm a' }}
```

#### `dateTimeFromHttp`

Transforms a HTTP-style date into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Monday, 02-Jan-06 22:04:05 GMT' | dateTimeFromHttp }}
{{ 'Mon, 02 Jan 2006 22:04:05 GMT' | dateTimeFromHttp }}
```

#### `dateTimeFromIso`

Transforms an ISO 8601 date into a DateTime that can be used with the non-parsing pipes:

```
{{ '2006-01-02' | dateTimeFromIso }}
{{ '2006-01-02T15' | dateTimeFromIso }}
{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso }}
```

#### `dateTimeFromJsDate`

Transforms a JavaScript Date object into a DateTime that can be used with the non-parsing pipes:

```
{{ date | dateTimeFromJsDate }}
```

#### `dateTimeFromMilliseconds`

Transforms a timestamp in milliseconds from epoch into a DateTime that can be used with the non-parsing pipes:

```
{{ date | dateTimeFromMilliseconds }}
```

#### `dateTimeFromRfc2822`

Transforms a date formatted according to RFC 2822 into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Mon, 02 Jan 2006 15:04:05 -0700' | dateTimeFromRfc2822 }}
```

#### `dateTimeFromSql`

Transforms a SQL-style date into a DateTime that can be used with the non-parsing pipes:

```
{{ '2006-01-02 15:04:05.000-0700' | dateTimeFromSql }}
```

#### `durationFromIso`

Transforms an ISO 8601 duration string into a Duration that can be used with the non-parsing pipes:

```
{{ 'P2Y4M6D' | durationFromIso }}
```

#### `durationFromMilliseconds`

Transforms a duration in milliseconds into a Duration that can be used with the non-parsing pipes:

```
{{ 24000 | durationFromMilliseconds }}
```

### Math

#### `dateTimeEarliest`

Selects the earliest (minimum) from a list of DateTimes.

```
{{ [early, earliest, earlier] | dateTimeEarliest }}
```

#### `dateTimeLatest`

Selects the latest (maximum) from a list of DateTimes.

```
{{ [late, latest, later] | dateTimeLatest }}
```

#### `durationLongest`

Selects the longest (maximum) from a list of Durations.

```
{{ [long, longest, longer] | durationLongest }}
```

#### `durationShortest`

Selects the shortest (minimum) from a list of Durations.

```
{{ [short, shortest, shorter] | durationShortest }}
```

### Time zones and offsets

In general, all time zone and offset operations change the DateTime’s zone but keep the underlying timestamp. For more information, see the [Luxon docs][changing-zones].

#### `dateTimeToLocal`

Sets the zone of the DateTime to the local zone:

```
{{ date | dateTimeToLocal }}
```

#### `dateTimeToUtc`

Sets the zone of the DateTime to the Coordinated Universal Time zone:

```
{{ date | dateTimeToUtc }}
```

### Formatting

#### `dateTimeToFormat`

Transforms a DateTime into an arbitrarily formatted string:

```
{{ date | dateTimeToFormat:'MMMM d, yyyy' }}
```

#### `dateTimeToIso`

Transforms a DateTime into an ISO 8601 date:

```
{{ date | dateTimeToIso }}
```

Also available: `dateTimeToIsoDate`, `dateTimeToIsoTime`, and `dateTimeToIsoWeekDate`.

#### `dateTimeToJsDate`

Transforms a DateTime into a JavaScript date:

```
{{ date | dateTimeToJsDate }}
```

Works with Angular’s [`DatePipe`][angular-datepipe]:

```
{{ date | dateTimeToJsDate | date:'fullDate' }}
```

#### `dateTimeToRelative` and `dateTimeToRelativeCalendar`

Transforms a DateTime into a relative time:

```
{{ date | dateTimeToRelative:'day':'long' }}
{{ date | dateTimeToRelativeCalendar:'month' }}
```

The unit and style parameters are optional.

#### `dateTimeToSql`

Transforms a DateTime into an SQL date string:

```
{{ date | dateTimeToSql }}
```

#### `durationToIso`

Transforms a Duration into an ISO 8601 duration string:

```
{{ duration | durationToIso }}
```

#### `durationToFormat`

Transforms a Duration into an arbitrarily formatted string:

```
{{ duration | durationToFormat:'mm:ss.SSS' }}
```

[angular-datepipe]: https://angular.io/api/common/DatePipe
[changing-zones]: https://moment.github.io/luxon/docs/manual/zones.html#changing-zones
[luxon]: https://moment.github.io/luxon/
[relative-time-polyfill]: https://github.com/catamphetamine/relative-time-format
[relative-time-proposal]: https://github.com/tc39/proposal-intl-relative-time
