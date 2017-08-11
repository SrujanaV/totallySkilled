  myApp.controller('AccountCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/account.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};
        $scope.formData.congomsg = "Congratulations ! You have cleared this test.";
       $scope.formData.name = "Harry Watson";
       $scope.formData.score = "40/50";
        $scope.formData.percentagescore = "80";
         $scope.formData.cources = "Cources 1";
          $scope.formData.optionD = "Discussion groups";
 })