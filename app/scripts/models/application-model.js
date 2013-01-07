/**************************
* Models
**************************/

Traclist.Ticket = DS.Model.extend({
    summary: DS.attr('string'),
    reporter: DS.belongsTo('Traclist.User'),
    ownerBinding: DS.belongsTo('Traclist.User'),
    role: DS.hasMany('Traclist.Role'),
    description: DS.attr('string'),
    type: DS.belongsTo('Traclist.Type'),
    status: DS.belongsTo('Traclist.Status'),
    milestone: DS.belongsTo('Traclist.Milestone'),
    component: DS.belongsTo('Traclist.Component'),
    severity: DS.belongsTo('Traclist.Severity'),
    feature: DS.belongsTo('Traclist.Feature'),
    estimatedHours: DS.attr('number')
});

Traclist.Milestone = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket')
});

Traclist.Feature = DS.Model.extend({
	title: DS.attr('string'),
	number: DS.attr('number'),
	tickets: DS.hasMany('Traclist.Ticket')
});

Traclist.Severity = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket')
});

Traclist.Status = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket')
});

Traclist.Role = DS.Model.extend({
	abbr: DS.attr('string'),
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket'),
	users: DS.hasMany('Traclist.User')
});

Traclist.User = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	roles: DS.hasMany('Traclist.Role'),
	fullName: function(){
		return this.get('firstName')+ ' ' + this.get('lastName');
	}.property('firstname','lastName').cacheable(),
	tickets: DS.hasMany('Traclist.Ticket'),
	
});

Traclist.Type = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket')
});

Traclist.Component = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('Traclist.Ticket')
});



// Traclist.Owner = Traclist.User.extend({
// 	tickets: DS.hasMany('Traclist.Ticket')
// });