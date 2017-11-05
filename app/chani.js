var chani = angular.module('chani', []);

chani.service('cartService', function(){
    this.booksInCart = [];
    this.addToCart = function(idbn) {
        this.booksInCart.push(idbn);
        console.log(this.booksInCart); 
    }

    this.getbooks = function($user){
        // alert("hi");
        let cart = this.booksInCart.join(', ');
        alert(cart);

    }
});




chani.controller('finish', function finish($scope, cartService){
    $scope.user ={
        firstname: "",
        lastname: ""
    }
    
    $scope.shoppingCart = function(){
        // alert('hi');
        cartService.getbooks($scope.user);
    }

}); 


chani.controller('mybooks', function CreateBook($scope, cartService){
    $scope.book = [
        {book: 'Book1', name: 'Mical', image:'book1.jpg', isbn: 1234},
        {book: 'Book2', name: 'Chani', image:'book2.jpg', isbn: 5678},
        {book: 'Book3', name: 'Hadar', image:'book3.jpg', isbn: 91011},
    ];

    $scope.addItem = function(idbn){
        cartService.addToCart(idbn);
    }

}); 


        

