var users=[
    {},
    {id:1,name:'asasd1'},
    {id:2,name:'asasd2'},
    {id:3,name:'asasd3'}
];
var app=angular.module("myApp",['ui.router']);

app.config(function($stateProvider){
    $stateProvider.state({
        name:'home',
        url:'/',
        template:'<h1>Home</h1>'        
        })
        .state(
            'about',{
                url:'/about',
                template:'<h1>About</h1>'
            })
        .state('user-view',{
            url:'/user/:userID',
            controller:'UserViewController',
            template:'<h1>{{user.name}}</h1><br/><h1>{{user.id}}</h1>'
            });
    });
app.controller('UserViewController',function($scope,$stateParams){
    $scope.user=users[$stateParams.userID];
    
    
    });
