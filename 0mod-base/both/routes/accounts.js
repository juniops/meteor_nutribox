AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultTemplate: 'landingpage',
    defaultLayout: 'NoLayout',
    defaultLayoutRegions: {
        // nav: 'MainNav',
        // footer: 'MainNav'
    },
    defaultContentRegion: 'yield'
});

AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/login',
    template: 'login',
    layoutTemplate: 'NoLayout',
    layoutRegions: {
        // nav: 'customNav',
        // footer: 'customFooter'
    },
    contentRegion: 'yield'
});