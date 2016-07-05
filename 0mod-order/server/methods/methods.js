Meteor.methods({
    saveDish: function (name, description, category, amount, unit, price, _id) {
        if (_id == '') {
            Dishes.save(name, description, category, amount, unit, price);
        } else {
            Dishes.alter(_id, name, description, category, amount, unit, price);
        }
    },
    deleteDish: function (_id) {
        Dishes.delete(_id);
    }
});