Template.registerHelper( 'formatDateTime', ( timestamp, format ) => {
  if ( timestamp && format ) {
    return moment( timestamp ).format( format );
  }
});

Template.registerHelper( 'formatDateTimeLocal', ( timestamp, timezone, format ) => {
  if ( timestamp && timezone && format ) {
    return moment( timestamp ).tz( timezone ).format( format );
  }
});

Template.registerHelper( 'messageTimestamp', ( timestamp ) => {
  if ( timestamp ) {
    let today         = moment().format( 'L' ),
        datestamp     = moment( timestamp ).format( 'L' ),
        isBeforeToday = moment( today ).isAfter( datestamp ),
        format        = isBeforeToday ? 'llll' : 'LT';
    return moment( timestamp ).format( format );
  }
});
