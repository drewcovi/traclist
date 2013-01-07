var Traclist = Traclist,
	Em = Em;
/**************************
* Views
**************************/
Traclist.NewTicket = Em.View.extend({
	tagName: 'form',
	submit: function(){
		Traclist.store.createRecord(
			Traclist.Ticket,
			{
				reporter: Traclist.reporterController.selected,
				role: Traclist.rolesController.selected,
				owner: Traclist.ownerController.selected,
				summary: Traclist.summaryController.content
			});
		}
});
Traclist.TicketList = Em.CollectionView.extend({
	contentBinding: 'Traclist.ticketListController.content',
	reporter: 'test'
});
Traclist.SetReporterField = Em.Select.extend({
	contentBinding: 'Traclist.reporterController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
	// selectionBinding: 'Traclist.reporterController.selected'
});

Traclist.SetRoleField = Em.Select.extend({
	contentBinding: 'Traclist.rolesController',
	optionLabelPath: 'content.title',
	valueBinding: 'content.selected'
});

Traclist.SetOwnerField = Em.Select.extend({
	contentBinding: 'Traclist.ownerController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});

Traclist.SetOwnerField = Em.Select.extend({
	contentBinding: 'Traclist.ownerController',
	valueBinding: 'content.selected',
	optionLabelPath: 'content.firstName'
});
Traclist.SetSummaryField = Em.TextArea.extend({
	placeholder: 'Ticket Summary...',
	valueBinding: 'Traclist.summaryController.content'
})
