
+angular.module('cavamenu', ['ionic', 'cavamenu.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

 
    controller: 'AppCtrl'
  })

  .state('app.dishes', {
    url: "/dishes/ :dishesId",
	
   

 
    views: {
      'menuContent': {
        templateUrl: "templates/Dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });
 
  $urlRouterProvider.otherwise('/app/Dishes');
});
