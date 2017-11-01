var chani = angular.module('chani', []);

chani.controller('mybooks', function CreateBook($scope){
    $scope.book = [
        {book: 'Book1', name: 'Mical', image:'book1.jpg'},
        {book: 'Book2', name: 'Chani', image:'book2.jpg'},
        {book: 'Book3', name: 'Hadar', image:'book3.jpg'},
    ];
}); 
        

chani.controller('Testme', function testme($scope){
    $scope.test = "this is a test"
        
});