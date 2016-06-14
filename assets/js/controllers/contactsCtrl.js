// Ajout d un controller : ContactsCtrl
/*
Pour configurer un controller, appliquer la fonction controller() sur l'application en lui donnant un nom (UpperCamelCase) et une fonction de call-back qui prend au minimum le parametre $scope (pour manipuler la vue)
*/
myApp.controller('ContactsCtrl', function($scope, $http){

	$scope.textFromPartial = '';

	/* Requete GET avec $http */
	/* $http.get() = $.ajax -> GET */
	$http.get("assets/template_parts/welcome.html")

		/* $http.get().then() = $.ajax -> .success */
	    .then(function(response) {
	    	//console.log(response.data);
	        $scope.textFromPartial = response.data;
	    });


});