/* Authenticated routes  */
const authenticatedRoutes = FlowRouter.group({name: 'authenticated'});

authenticatedRoutes.route('/dish', {
    name: 'dish',
    action() {
        BlazeLayout.render('mainLayout', {
            yield: dish,
            subscriptions: function(params) {
                this.subscribe("dishes").wait();
            },
            data: function(){

                return {
                    dishes: Dishes.list(),
                    categories: [
                        {identifier:'carne', name:'CARNE'},
                        {identifier:'acompanhamento', name:'ACOMPANHAMENTO'},
                        {identifier:'salada', name:'SALADA'},
                        {identifier:'suco_composto', name:'SUCOS COMPOSTOS'},
                        {identifier:'suco_simples', name:'SUCOS SIMPLES'},
                        {identifier:'sanduiche', name:'SANDUÍCHES'}
                    ]
                }
            }
        });
    }
})
;