/*
Configurer une nouvelle application (module) angular
*/
// var myApp = angular.module('newApp', []); // Nom de l appli , un tableau vide pour les extenssions
var myApp = angular.module('newApp', ['ngRoute','ngCookies']); /* intégration du module ngRoute */

/*
Configuration des routes
*/
myApp.config(function($routeProvider){

	$routeProvider

		// Définition de la page d'accueil
		.when('/', {
			templateUrl: 'public/home.html',

			// Ajouter un controller à la vue
			controller: 'HomeCtrl'
		})

		// Définition des pages inter
		.when('/portfolio', {
			templateUrl: 'public/portfolio.html',
			controller: 'PortfolioCtrl'
		})
		.when('/about', {
			template: '<h1>About</h1>'
		})
		.when('/contacts', {
			templateUrl: 'public/contacts.html',
			// Ajouter un controller à la vue
			controller: 'ContactsCtrl'
		})

		/* Pour toutes les adresses inconnues */
		.otherwise({
			redirectTo: '/'
		})

});