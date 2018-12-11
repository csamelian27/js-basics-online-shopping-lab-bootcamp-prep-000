var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
 cart.push(new Object({itemName: [item], itemPrice: price}));
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  var sentence = "In your cart, you have";
  for (var i = 0; i < cart.length; i++){
    sentence.push(` ` + cart[i].itemName + " at $" + cart[i].itemPrice + " .");
  }
     if (i === 0){
      return "Your shopping cart is empty.";
}
    else if(i === 1){
      sentence.push(` ` + cart[i].itemName + " at $" + cart[i].itemPrice + ".");
    }
    else if(i === 2){
      sentence.push(", and" + cart[i].itemName + " at $" + cart[i].itemPrice + ".");
    }
    else {
      
    }
  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
 if (Object.keys(cart[i]) == item){
   cart = [...cart.slice(0, i), ...cart.slice(i+1)];
   return cart;
    }
  }
 console.log("That item is not in your cart.");
 return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
