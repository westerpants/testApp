'use strict';

angular.module('testAppApp').controller('MainCtrl', function ($scope) {
  	$scope.doclist = 
	[{
		'name' : 'name1' ,
		'portfolioID' : 1,
		'category' : 'Cat 1',
		'read' : 'read',
		'removed' : false
	},
	{
		'name' : 'name2' ,
		'portfolioID' :2 ,
		'category' : 'Cat 2',
		'read' : 'unread',
		'removed' : true
	},{
		'name' : 'name3' ,
		'portfolioID' :3 ,
		'category' : 'Cat 1',
		'read' : 'read',
		'removed' : false
	}];
	$scope.catlist = [];
	$scope.portfolioIDlist = [];
	for (var i = 0 ; i < $scope.doclist.length; i++){
		$scope.catlist.push($scope.doclist[i].category);
		$scope.portfolioIDlist.push($scope.doclist[i].portfolioID);
	}
	$scope.catlist = window._.uniq($scope.catlist);
	$scope.portfolioIDlist = window._.uniq($scope.portfolioIDlist);
	$scope.readstatus = 'all';
	$scope.$watch('readstatus', function(readstatus) {
       if (readstatus == 'read') {}
       if (readstatus == 'unread') {}
       if (readstatus == 'all') {}
 	});
});