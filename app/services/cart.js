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
            tea: tea,
            quantity: parseInt(quantity),
            subtotal: parseInt(quantity) * tea.price,
            edit: false
          }
        }
      },
      removeFromCart: function(id) {
        delete this.cart[id];
        this.cartQuantity--;
      },
      editItem: function(id, q) {
        this.cart[id].subtotal = this.cart[id].tea.price * q;
        this.cart[id].quantity = q;
        this.cart[id].edit = !this.cart[id].edit;
      },
      cart: {},
      cartQuantity: 0
    }
  })
