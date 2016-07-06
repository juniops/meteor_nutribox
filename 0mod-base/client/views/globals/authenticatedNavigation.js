Template.authenticatedNavigation.events({
  'click .logout' ( event ) {
    event.preventDefault();

    Meteor.logout( ( error ) => {
      if ( error ) {
        swal(error.reason, "", "error")
      } else {
        swal('até mais ...', "", "success")
      }
    });
  }
});
