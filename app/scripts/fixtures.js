/**************************
* Fixtures
**************************/


Traclist.User.FIXTURES = [
	{
		id: 0,
		firstName: 'Drew',
		lastName: 'Covi',
		roles: ['0','1','2']
	},
	{
		id: 1,
		firstName: 'Kjrsten',
		lastName: 'Holt',
		roles: [0,2]
	}
];

Traclist.Role.FIXTURES = [
	{
		id: 0,
		title: 'Production Lead',
		abbr: 'PL',
		component: '0',
		users: [0,1]
	},{
		id: 1,
		title: 'Designer',
		abbr: 'Des',
		component: '1',
		users: [0]
	},{
		id: 2,
		title: 'Frontend Developer',
		abbr: 'FED',
		component: '0',
		users: [0,1]
	}
];

Traclist.Component.FIXTURES = [
	{
		id: 0,
		title: 'Production'
	},
	{
		id: 1,
		title: 'Design'
	}
];
Traclist.Ticket.FIXTURES = [];
