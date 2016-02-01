app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
  	{
  		name: "Lobster Salad",
  		description: "A delicate array of sea bugs",
  		price: 44.73
  	},
		{
			name: 'Holy Crab',
  		description: "Blessed crab meat",
  		price: 10.02
},
		{
  		name: 'A Failure Pile in a Sadness Bowl',
  		description: 'KFC\'s new bows!',
  		price: 3.99
		}
  ];

	$scope.extras = [
		{
			name: 'Spork',
			description: 'A spoon and a fork',
			price: 0.12
		},
		{
			name: 'Air',
			description: 'So you can breath',
			price: 0
		},
		{
			name: 'Some laughs',
			description: 'With good company',
			price: 14
		}
	];

}]);