Meteor.publish("dishes", function () {
    var user = Meteor.users.findOne({_id: this.userId});
    if (Roles.userIsInRole(user, ["admin", "view-secrets"])) {
        // console.log('publishing users', this.userId)
        return Dishes.list();
    }
    this.stop();
    return;
});