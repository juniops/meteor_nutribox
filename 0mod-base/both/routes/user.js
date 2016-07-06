const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/updatePassword', {
    name: 'updatePassword',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'updatePassword' } );
    }
});

authenticatedRoutes.route( '/updateEmail', {
    name: 'updateEmail',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: updateEmail } );
    }
});

authenticatedRoutes.route( '/manageUsers', {
    name: 'manageUsers',
    action() {
        BlazeLayout.render( 'mainLayout', { yield: 'manageUsers' } );
    }
});