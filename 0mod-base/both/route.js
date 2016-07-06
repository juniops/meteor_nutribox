FlowRouter.notFound = {
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'notFound' } );
    }
};

/* Public routes  */

const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/', {
    action() {
        FlowRouter.go( '/login' );
    }
});

publicRoutes.route( '/signup', {
    name: 'signup',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'signup' } );
    }
});

publicRoutes.route( '/login', {
    name: 'login',
    action() {
        BlazeLayout.render( 'Layout02', { yield: 'login' } );
    }
});

publicRoutes.route( '/recover-password', {
    name: 'recover-password',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'recoverPassword' } );
    }
});

publicRoutes.route( '/reset-password/:token', {
    name: 'reset-password',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'resetPassword' } );
    }
});

/* Public routes  */


/* Authenticated routes  */

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

/* Authenticated routes  */