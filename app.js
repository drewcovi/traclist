
/**************************
* Application
**************************/
App = Em.Application.create();

App.store = DS.Store.create({
  revision: 7,
  adapter: DS.fixtureAdapter
});

/**************************
* Models
**************************/

App.Ticket = DS.Model.extend({
    summary: DS.attr('string'),
    reporter: DS.belongsTo('App.User'),
    ownerBinding: DS.belongsTo('App.Owner'),
    role: DS.belongsTo('App.Role'),
    description: DS.attr('string'),
    type: DS.belongsTo('App.Type'),
    status: DS.belongsTo('App.Status'),
    milestone: DS.belongsTo('App.Milestone'),
    component: DS.belongsTo('App.Component'),
    severity: DS.belongsTo('App.Severity'),
    feature: DS.belongsTo('App.Feature'),
    estimatedHours: DS.attr('number')
});

App.Milestone = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.Feature = DS.Model.extend({
	title: DS.attr('string'),
	number: DS.attr('number'),
	tickets: DS.hasMany('App.Ticket')
});

App.Severity = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.Status = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.Role = DS.Model.extend({
	title: DS.attr('string'),
	abbr: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket'),
	users: DS.hasMany('App.User')
});

App.Type = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.Component = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.User = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	roles: DS.hasMany('App.Role'),
	fullName: function(){
		return this.get('firstName')+ ' ' + this.get('lastName');
	}.property('firstname','lastName').cacheable(),
	tickets: DS.hasMany('App.Ticket')
});

// App.Owner = App.User.extend({
// 	tickets: DS.hasMany('App.Ticket')
// });

/**************************
* Fixtures
**************************/


App.User.FIXTURES = [
	{
		id: 0,
		firstName: 'Drew',
		lastName: 'Covi',
		roles: [0,1]
	},
	{
		id: 1,
		firstName: 'Kjrsten',
		lastName: 'Holt',
		roles: [0,1,2]
	}
];

App.Role.FIXTURES = [
	{
		id: 0,
		title: 'Production Lead',
		abbr: 'PL',
		component: 0
	},{
		id: 1,
		title: 'Designer',
		abbr: 'Des',
		component: 1
	},{
		id: 2,
		title: 'Frontend Developer',
		abbr: 'FED',
		component: 0
	}
];

App.Component.FIXTURES = [
	{
		id: 0,
		title: 'Production'
	},
	{
		id: 1,
		title: 'Design'
	}
];


/**************************
* Views
**************************/


App.SetOwnerField = Em.Select.extend({
	contentBinding: 'App.ownerController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});

App.SetRoleField = Em.Select.extend({
	contentBinding: 'App.rolesController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content'
});

/**************************
* Controllers
**************************/


App.ownerController = Em.ArrayController.create({
	content: App.store.findAll(App.User)
	// selected: null
	// init: function(){
	// 	this._super();
	// 	console.log(this);
	// }
});

App.rolesController = Em.ArrayController.create({
	// ownerSelectedBinding: 'App.ownerController.selected',
	contentBinding: 'App.ownerController.selected.roles'
});
