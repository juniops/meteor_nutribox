Template.authenticatedNavigation.events({
  'click .logout' ( event ) {
    event.preventDefault();

    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'até mais ...', 'success' );
      }
    });
  }
});