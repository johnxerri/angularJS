// Ajout d un controller : ContactsCtrl
/*
Pour configurer un controller, appliquer la fonction controller() sur l'application en lui donnant un nom (UpperCamelCase) et une fonction de call-back qui prend au minimum le parametre $scope (pour manipuler la vue)

!!!!
- Le service PortfolioFactory est à ajouter en parametre de la fonction de call-back
!!!!

*/
myApp.controller('PortfolioCtrl', function($scope, $http, PortfolioFactory){

	/* Appeler la fonction getAlert() de PortfolioFactory */
	PortfolioFactory.getAlert();

	/* Appeler la fonction helloWorld(name) de PortfolioFactory */
	PortfolioFactory.helloWorld('John');

	/* Appeler la fonction getCars */

	/* Configurer une variable vide à envoyer dans le scope */
	$scope.dataObj = {};

	PortfolioFactory.getCars().then(function(data){
		/* .then() est l'équivalent de .success() */
		$scope.dataObj = data;
		console.log($scope.dataObj);

	}, function(error){
		/* La premiere fonction de call-back correspond à .error() */
		console.log('error ' + error);
	});

	/* Créer un objet pour le ng-repeat */
	$scope.objectRepeat = {

		0: {
			name: 'John'
		},

		1: {
			name: 'Pascal'
		},

		2: {
			name: 'Matthieu'
		}

	};

	//console.log($scope.objectRepeat);

});