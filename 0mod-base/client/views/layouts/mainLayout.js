const handleRedirect = ( routes, redirect ) => {
  let currentRoute = FlowRouter.getRouteName();
  if ( routes.indexOf( currentRoute ) > -1 ) {
    FlowRouter.go( redirect );
    return true;
  }
};

Template.mainLayout.onRendered( () => {
  Tracker.autorun( () => {
    let isChannel   = FlowRouter.getParam( 'channel' ),
        bodyClasses = document.body.classList;
        
    return isChannel ? bodyClasses.add( 'is-channel' ) : bodyClasses.remove( 'is-channel' );
  });
});

Template.mainLayout.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  authenticated() {
    return !Meteor.loggingIn() && Meteor.user();
  },
  redirectAuthenticated() {
    return handleRedirect([
      'login',
      'signup',
      'recover-password',
      'reset-password'
    ], '/messages/general' );
  },
  redirectPublic() {
    return handleRedirect( [ 'channel' ], '/login' );
  }
});
