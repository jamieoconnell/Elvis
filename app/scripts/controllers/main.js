'use strict';

angular.module('elvisApp')
  .controller('MainCtrl', function ($scope) {

    var keys = {}
    var latestAuction;

    // Call eBay
    function getEbayListing() {
      //HTTP to eBay
      latestAuction = {
        "time": "now"
      }
    }
    getEbayListing();


    // Attach to scope
    $scope.latestAuction = latestAuction;
    console.log(latestAuction);
  });
