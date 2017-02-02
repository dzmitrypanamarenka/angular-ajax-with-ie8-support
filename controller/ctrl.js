module.controller('AppCtrl', function($scope, $http) {
  
  $scope.table = [];
  
  var date = new Date(),
      m = date.getMonth() + 1;
  m.toString().length == 1 ? m = "0"+m : m = m;
  date = date.getDate() + "." + m + "." + date.getFullYear();
  
  $scope.getJSON = function(){
    
    crossDomainAjax('https://test-tasks-fat-mike.c9users.io/soft-club/json.php', function (data) {
      var response;
      if(data.data){
        response = data.data;
      } else {
          response = data;
      }
      for(var i = 0; i < response.length; i++){
        $scope.table.unshift(response[i]);
      }
  });
  
  function crossDomainAjax (url, successCallback) {
    
    if ('XDomainRequest' in window && window.XDomainRequest !== null) {
      var xdr = new XDomainRequest();
      xdr.open('get', url);
      xdr.onload = function () {
          var dom  = new ActiveXObject('Microsoft.XMLDOM'),
          JSON = $.parseJSON(xdr.responseText);

          dom.async = false;
          if (JSON == null || typeof (JSON) == 'undefined') {
              JSON = $.parseJSON(data.firstChild.textContent);
          }

          successCallback(JSON);
      };

      xdr.send();
    
      
    } else{
      $http({
        method: "GET",
        url: url,
        dataType: "json",
        headers: {
          "Content-Type": 'application/json',
          'Access-Control-Request-Origin': "https://preview.c9users.io",
          'Access-Control-Request-Methods': 'GET'
        },
        async: false
    }).then(successCallback);
      } 
    }
  }
  
  $scope.newField = function(field){
    if(!$scope.click){
      $scope.click = true;
    }
    if(angular.isDefined(field)
    && angular.isDefined(field.gtin) 
    && angular.isDefined(field.name) 
    && angular.isDefined(field.storage)){
      $scope.table.unshift({
        gtin: field.gtin,
        name: field.name,
        storage: field.storage,
        "date": date
      });
      $scope.field = {};
    } else{
      alert("Нет валидации форм :) Заполните все поля!");
    }
  }
  
  $scope.deleteTr = function(){
    var inputs = document.querySelectorAll("input.temp");
    for(var i = 0; i < inputs.length; i++){
      if(inputs[i].checked == true){
        delete $scope.table[i];
      } 
    }
    $scope.table = $scope.table.filter(function(el, i){
          return el;
    });
  };
  
  $scope.clear = function(){
    $scope.table = [];
  }
})

