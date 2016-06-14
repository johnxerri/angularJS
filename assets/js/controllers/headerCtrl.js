// Ajout d un controller : HeaderCtrl

myApp.controller('HeaderCtrl', function($scope, $cookies){

	/* Creer un cookie et l'afficher */
	$cookies.put('dwsUser', 'Je suis le contenu du cookie');

	/* Afficher un cookie */
	console.log( $cookies.get('siteUserConnected') );

	/* Creer la fonction addCookie() qui récupere le contenu du ng-model cookieContent */
	$scope.addCookie = function(){
		//console.log('submit' + $scope.cookieContent);
		$cookies.put('siteUserConnected', $scope.cookieContent);
	};

});