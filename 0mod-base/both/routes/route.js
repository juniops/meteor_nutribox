FlowRouter.notFound = {
    action() {
        BlazeLayout.render( 'NoLayout', { yield: 'notFound' } );
    }
};

/* Public routes  */
const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/', {
    action() {
        FlowRouter.go( '/landingpage' );
    }
});

publicRoutes.route( '/signup', {
    name: 'signup',
    action() {
        BlazeLayout.render( 'NoLayout', { yield: 'signup' } );
    }
});

publicRoutes.route( '/login', {
    name: 'login',
    action() {
        BlazeLayout.render( 'NoLayout', { yield: 'login' } );
    }
});

publicRoutes.route( '/recover-password', {
    name: 'recover-password',
    action() {
        BlazeLayout.render( 'NoLayout', { yield: 'recoverPassword' } );
    }
});

publicRoutes.route( '/reset-password/:token', {
    name: 'reset-password',
    action() {
        BlazeLayout.render( 'NoLayout', { yield: 'resetPassword' } );
    }
});
/* Public routes  */


/* Authenticated routes  */
const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: profile } );
    }
});

/* Authenticated routes  */