 //Preview Boxes Openning and Closing
 let previewContainer = document.querySelector('.products-preview');
 let previewBox = previewContainer.querySelectorAll('.preview');

 document.querySelectorAll('.products-container .product img').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
 });



 previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
 });



 //Adding items to the cart function

 let open_cart  = document.querySelector('.Cart');
 let close_cart = document.querySelector('.closeCart');

 //card
 let side_cart  = document.querySelector('.side-cart');

 //list-card
 let item_list  = document.querySelector('.item-list');
 let total      = document.querySelector('.total');
 let body       = document.querySelector('body');


 //Openinng  and Closing the side cart
 open_cart.addEventListener('click', ()=>{
    body.classList.add('active');
 })

 close_cart.addEventListener('click', ()=>{
    body.classList.remove('active')
 })


 // Counter for total quantity
var totalQuantity = 0;

function updateTotal() {
  var totalPrice = 0;
  totalQuantity = 0;
  var cartItems = document.querySelectorAll('.side-cart .cart-item');

  cartItems.forEach(function (item) {
    var price = parseFloat(item.querySelector('p').textContent.replace('Price: $', ''));
    var quantity = parseInt(item.querySelector('.quantity-input').value);
    totalPrice += price * quantity;
    totalQuantity += quantity;
  });

  var totalElement = document.querySelector('.side-cart .total');
  if (totalElement) {
    totalElement.textContent = 'Total: $' + totalPrice.toFixed(2);
  }

  // Update the counter in the icon
  var counter = document.querySelector('.item-count');
  if (counter) {
    counter.textContent = totalQuantity.toString();
  }

}

function addtoCart(button) {
  var productName = button.parentNode.querySelector('h3').textContent;
  var productImage = button.parentNode.querySelector('img').src;
  var productPrice = button.getAttribute('data-price');

  var sideCart = document.querySelector('.side-cart .cart-items');
  var existingCartItem = sideCart.querySelector('.cart-item[data-name="' + productName + '"]');

  if (existingCartItem) {
    var quantityInput = existingCartItem.querySelector('.quantity-input');
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    updateTotal(); 
  } else {
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-name', productName);

    var itemImage = document.createElement('img');
    itemImage.src = productImage;
    cartItem.appendChild(itemImage);

    var itemName = document.createElement('h4');
    itemName.textContent = productName;
    cartItem.appendChild(itemName);

    var itemPrice = document.createElement('p');
    itemPrice.textContent = 'Price: $' + productPrice;
    cartItem.appendChild(itemPrice);

    var quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    cartItem.appendChild(quantityLabel);

    var quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 1;
    quantityInput.min = 1;
    quantityInput.classList.add('quantity-input');
    quantityInput.addEventListener('change', updateTotal); // Update total and counter when quantity changes
    cartItem.appendChild(quantityInput);

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function () {
      cartItem.remove();
      updateTotal(); // Update total and counter when item is removed
    });
    cartItem.appendChild(removeButton);

    sideCart.appendChild(cartItem);

    totalQuantity += 1; // Increase the total quantity
    updateTotal(); // Update total and counter when item is added
  }

  var sideCartContainer = document.querySelector('.side-cart');
  sideCartContainer.classList.add('active');



}

function increaseFontSize() {
  var body = document.querySelector('body');
  var currentBody = window.getComputedStyle(body);
  var currentFontSize = parseInt(currentBody.fontSize);
  body.style.fontSize = (currentFontSize + 1) + 'px';
}

function decreaseFontSize() {
  var body = document.querySelector('body');
  var currentBody = window.getComputedStyle(body);
  var currentFontSize = parseInt(currentBody.fontSize);
  body.style.fontSize = (currentFontSize - 1) + 'px';
} 
  
  



 