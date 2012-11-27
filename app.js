
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
    ownerBinding: DS.belongsTo('App.User'),
    role: DS.hasMany('App.Role'),
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
	abbr: DS.attr('string'),
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket'),
	users: DS.hasMany('App.User')
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

App.Type = DS.Model.extend({
	title: DS.attr('string'),
	tickets: DS.hasMany('App.Ticket')
});

App.Component = DS.Model.extend({
	title: DS.attr('string'),
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
		id: '0',
		firstName: 'Drew',
		lastName: 'Covi',
		roles: ['0','1','2']
	},
	{
		id: '1',
		firstName: 'Kjrsten',
		lastName: 'Holt',
		roles: ['0','2']
	}
];

App.Role.FIXTURES = [
	{
		id: '0',
		title: 'Production Lead',
		abbr: 'PL',
		component: '0',
		users: ['0','1']
	},{
		id: '1',
		title: 'Designer',
		abbr: 'Des',
		component: '1',
		users: ['0']
	},{
		id: '2',
		title: 'Frontend Developer',
		abbr: 'FED',
		component: '0',
		users: ['0','1']
	}
];

App.Component.FIXTURES = [
	{
		id: '0',
		title: 'Production'
	},
	{
		id: '1',
		title: 'Design'
	}
];
App.Ticket.FIXTURES = [];


/**************************
* Views
**************************/
App.NewTicket = Em.View.extend({
	tagName: 'form',
	submit: function(){
		console.log(App.rolesController.selected.get('title'));
		App.store.createRecord(
			App.Ticket,
			{
				reporter: App.reporterController.selected,
				role: App.rolesController.selected,
				owner: App.ownerController.selected,
				summary: App.summaryController.content
			})
	}
});
App.TicketList = Em.CollectionView.extend({
	contentBinding: 'App.ticketListController.content',
	reporter: 'test'
});
App.SetReporterField = Em.Select.extend({
	contentBinding: 'App.reporterController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});

App.SetRoleField = Em.Select.extend({
	contentBinding: 'App.rolesController',
	optionLabelPath: 'content.title',
	valueBinding: 'content.selected'
});

App.SetOwnerField = Em.Select.extend({
	contentBinding: 'App.ownerController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});

App.SetOwnerField = Em.Select.extend({
	contentBinding: 'App.ownerController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});
App.SetSummaryField = Em.TextArea.extend({
	placeholder: 'Ticket Summary...',
	valueBinding: 'App.summaryController.content'
})

/**************************
* Controllers
**************************/
App.ticketController =Em.ArrayController.create({
	content: [],
	submit: function(){
		console.log('adding record');
	}
});
App.ticketListController = Em.ArrayController.create({
	content: App.store.findAll(App.Ticket)
})

App.reporterController = Em.ArrayController.create({
	content: App.store.findAll(App.User),
	selected: App.store.find(App.User, 0) // selecting the first entry in our fixtures
});

App.rolesController = Em.ArrayController.create({
	content: App.store.findAll(App.Role),
	selected: App.store.find(App.Role, 0) // selecting the first entry in our fixtures
});
App.summaryController = Em.Controller.create({
	content: ''
})
App.ownerController = Em.ArrayController.create({
	contentBinding: 'App.rolesController.selected.users',
	selected: ''
});


