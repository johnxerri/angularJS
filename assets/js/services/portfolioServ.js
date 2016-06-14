myApp.factory('PortfolioFactory', function($http, $q){

	/* Initier une variable factory = objet */
	var factory = {
		/* Les parametres de l'objet factory sont des fonction accessibles dans le controller */
		getAlert: function(){
			console.log('OK Factory');
		},

		helloWorld: function(name){
			console.log('Hello ' + name);
		},

		/* Requete http (ajax) sur le fichier data.json */
		getCars: function(){
			/* Initier une variable pour gerer l'asynchronisme $q.defer() */
			var deferred = $q.defer();

			/* Requete $http */
			var reqConfig = {
				method: 'GET',
				url: 'assets/json/data.json',
				dataType: 'JSONP',

				headers: {
					'content-Type': 'application/json'
				}
			};

			$http(reqConfig).success(function(data){
				/* Renvoyer la data dans la vue au moment ou la requete est success */
				deferred.resolve(data);

			}).error(function(status){
				/* Renvoyer le code erreur au moment ou la requete est mauvaise */
				deferred.reject(status);
			});

			/* Renvoyer les données au bon moment */
			return deferred.promise;
			
		}

	};

	/* La factory doit etre renvoyer dans le controller avec le mot clé return */
	return factory;

});