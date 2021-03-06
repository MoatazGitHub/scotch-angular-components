/**
 * Created by Moataz on 1/9/2017.
 */
(function () {
    'use strict';

    var app = angular.module('app');

    app.component('userInfo', {


        // Binds caption to the parent scope
        bindings: {
            caption: '<'
        },
        // Loads the component template
        templateUrl: '/js/components/userComponent.html',
        controller: function ($scope) {




            // The list of users we will be displaying
            this.records = [{
                name: "Alfreds Futterkiste",
                city: "Berlin",
                Country: "Germany"
            }, {
                name: "Ana Trujillo Emparedados y helados",
                city: "México D.F.",
                country: "Mexico"
            }, {
                name: "Blondel père et fils",
                city: "Strasbourg",
                country: "France"
            }, {
                name: "Moataz",
                city: "Giza",
                country: "Egypt"
            }, {
                name: "Bólido Comidas preparadas",
                city: "Madrid",
                country: "Spain"
            }];


            this.destroyUser = function(item) {
                // console.log('wwww');
                var index = this.records.indexOf(item);
                this.records.splice(index, 1);
            };

        }
    });
})();