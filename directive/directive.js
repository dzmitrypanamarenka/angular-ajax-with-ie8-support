module.directive('contentOut', function(){
  return {
    link: function($scope, el, attr){
      $scope.$watch(attr['ngModel'], function(newVal){
        if(newVal == true){
        $scope.click = false;
        }
    });
    },
    templateUrl: "template/template.html"
  }
})