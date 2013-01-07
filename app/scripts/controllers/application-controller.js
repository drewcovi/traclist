Traclist.ApplicationController = Ember.ObjectController.extend({
  // Implement your controller here.
});


/**************************
* Controllers
**************************/
Traclist.ticketController =Em.ArrayController.create({
	content: [],
	submit: function(){
		// console.log('adding record');
	}
});
Traclist.ticketListController = Em.ArrayController.create({
	content: Traclist.store.findAll(Traclist.Ticket)
})

Traclist.reporterController = Em.ArrayController.create({
	content: Traclist.store.findAll(Traclist.User),
	// selected: Traclist.store.find(Traclist.User, 0) // selecting the first entry in our fixtures
});

Traclist.rolesController = Em.ArrayController.create({
	content: Traclist.store.findAll(Traclist.Role),
	// selected: Traclist.store.find(Traclist.Role, 0) // selecting the first entry in our fixtures
});
Traclist.summaryController = Em.Controller.create({
	content: ''
})
Traclist.ownerController = Em.ArrayController.create({
	contentBinding: 'Traclist.rolesController.selected.users',
	selected: ''
});