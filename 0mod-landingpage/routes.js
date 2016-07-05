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

publicRoutes.route( '/landingpage', {
    name: 'landingpage',
    action() {
        BlazeLayout.render( 'landpageLayout', { yield: 'landingpage' } );
    }
});