  myApp.controller('moduleScoreCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/module-score.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};
        $scope.formData.congomsg = "Congratulations ! You have cleared this test.";
       $scope.formData.name = "Harry Watson";
       $scope.formData.score = "Subject directories";
        $scope.formData.optionB = "Search engines";
         $scope.formData.optionC = "Meta-search engines";
          $scope.formData.optionD = "Discussion groups";
 })