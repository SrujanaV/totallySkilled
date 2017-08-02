myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.homeBackImg = [{
            "image": "../frontend/img/explore.png",
            "alt": "Explore",
            "heading": "Explore",
            "content": "Over 45,000 courses tought by experts instructions"
        }, {
            "image": "../frontend/img/enroll.png",
            "alt": "Enroll",
            "heading": "Enroll",
            "content": " In courses at anytime, with lifetime access"
        }, {
            "image": "../frontend/img/learn.png",
            "alt": "Learn",
            "heading": "Learn",
            "content": "At your own pace,from any device"
        }];
        $scope.Courses = [{
            "img": "../frontend/img/course1.jpg",
            "text": "Course 1"
        }, {
            "img": "../frontend/img/course2.jpg",
            "text": "Course 2"
        }, {
            "img": "../frontend/img/course3.jpg",
            "text": "Course 3"
        }, {
            "img": "../frontend/img/course4.jpg",
            "text": "Course 4"
        }, {
            "img": "../frontend/img/course5.png",
            "text": "Course 5"
        }, {
            "img": "../frontend/img/course6.png",
            "text": "Course 6"
        }];
        $scope.Facilities = [{
            "image": "../frontend/img/unlimited.png",
            "alt": "Unlimited Access",
            "heading": "Unlimited Access",
            "content": "Choose what you'd like to learn from our extensive subscription library."
        }, {
            "image": "../frontend/img/teachers.png",
            "alt": "Expert Teachers",
            "heading": "Expert Teachers",
            "content": "Learn from industry experts who are passionate about teaching.Learn Anywhere"
        }, {
            "image": "../frontend/img/learn_anywhere.png",
            "alt": "Learn Anywhere",
            "heading": "Learn Anywhere",
            "content": "Switch between your computer,tablet, or mobile device."
        }];
        $scope.slides = [{
            "main_head": "About Us",
            "head": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed turpis rhoncus, placerat lacus ac, tempus neque.",
            "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac anteipsum primis in faucibus.Sed ut nisl et lectus laoreet aliquam eu condimentum leo.Etiam vehicula, nulla tincidunt  consectetur luctus, metus nibh blandit dui, in accumsan ligula arcu ac neque. Aenean eu ipsum a sem volutpat scelerisque non eget dui. Suspendisse athorci etlacusfinibus consequat nec at odio. Proin ut semper mauris, eget congue sem. Nulla congue malesuada mauris id sodales."
        }, {
            "main_head": "About Us",
            "head": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed turpis rhoncus, placerat lacus ac, tempus neque.",
            "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac anteipsum primis in faucibus.Sed ut nisl et lectus laoreet aliquam eu condimentum leo.Etiam vehicula, nulla tincidunt  consectetur luctus, metus nibh blandit dui, in accumsan ligula arcu ac neque. Aenean eu ipsum a sem volutpat scelerisque non eget dui. Suspendisse athorci etlacusfinibus consequat nec at odio. Proin ut semper mauris, eget congue sem. Nulla congue malesuada mauris id sodales."
        }, {
            "main_head": "About Us",
            "head": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed turpis rhoncus, placerat lacus ac, tempus neque.",
            "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac anteipsum primis in faucibus.Sed ut nisl et lectus laoreet aliquam eu condimentum leo.Etiam vehicula, nulla tincidunt  consectetur luctus, metus nibh blandit dui, in accumsan ligula arcu ac neque. Aenean eu ipsum a sem volutpat scelerisque non eget dui. Suspendisse athorci etlacusfinibus consequat nec at odio. Proin ut semper mauris, eget congue sem. Nulla congue malesuada mauris id sodales."
        }, {
            "main_head": "About Us",
            "head": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed turpis rhoncus, placerat lacus ac, tempus neque.",
            "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac anteipsum primis in faucibus.Sed ut nisl et lectus laoreet aliquam eu condimentum leo.Etiam vehicula, nulla tincidunt  consectetur luctus, metus nibh blandit dui, in accumsan ligula arcu ac neque. Aenean eu ipsum a sem volutpat scelerisque non eget dui. Suspendisse athorci etlacusfinibus consequat nec at odio. Proin ut semper mauris, eget congue sem. Nulla congue malesuada mauris id sodales."
        }];

        $scope.cards = [{
            "image": "../frontend/img/cardimage1.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage2.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage3.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage1.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage2.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage3.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage1.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage2.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }, {
            "image": "../frontend/img/cardimage3.png",
            "alt": "Testimonials 1",
            "content": "Pellentesque habitant morbitristique senectus et netus etmalesuada fames ac turpis egest ipsum primis in faucibus.Sed utnetlectus laoreet aliquameu cond.",
            "name": "- Robert Wotson",
            "company": "Infosys",
            "des": "CEO"
        }];

        $(window).load(function () {
            $('.flexslider').flexslider()
        });
    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });