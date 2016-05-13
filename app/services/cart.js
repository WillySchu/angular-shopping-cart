angular.module('app')
  .factory('Cart', function() {
    return {
      addToCart: function(tea, quantity) {
        if(!quantity) {
          quantity = 1;
        }
        if (this.cart[tea._id]) {
          this.cart[tea._id].quantity += parseInt(quantity);
        } else {
          this.cartQuantity++;
          this.cart[tea._id] = {
            name: tea.name,
            price: tea.price,
            quantity: parseInt(quantity),
            id: tea._id,
            edit: false
          }
        }
      },
      removeFromCart: function(id) {
        delete this.cart[id];
        this.cartQuantity--;
      },
      editItem: function(id) {
        this.cart[id].edit = !this.cart[id].edit;
      },
      cart: {},
      cartQuantity: 0
    }
  })
