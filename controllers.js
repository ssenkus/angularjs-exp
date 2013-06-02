/* Controllers */

contactManager.controller('AppCtrl',
  function AppCtrl ($scope) {
    $scope.contacts = [{
      name: 'Brian Ford',
      phone: '555-555-5555',
      address: [
        '1600 Amphitheatre Parkway',
        'Mountain View, CA 94043'
      ]
    }];
  });

contactManager.controller('InfoCtrl',
	function InfoCtrl($scope, $routeParams) {
		$scope.contact = $scope.contacts[$routeParams.id];
});

contactManager.controller('AddCtrl',
	function AddCtrl($scope, $location) {
		$scope.contact = {};
		$scope.add = function () {
			$scope.contacts.push($scope.contact);
			$location.url('/');
	};
});