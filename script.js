// OpenModal by click "Buy Now"
    function openModal(productName) {
      document.getElementById('modal').style.display = "block";
      document.getElementById('product-name').innerText = "Product: " + productName;
    }

    // CloseModal
    function closeModal() {
      document.getElementById('modal').style.display = "none";
    }

    // Confirm Buying (fake)
    function submitForm() {
      alert("✅ Ordered Successfully!");
      closeModal();
    }

    // CloseModal by click outside Form
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target == modal) {
        closeModal();
      }
    }
    

    // Cart
    let cart = [];
    let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const price = parseInt(button.dataset.price);
        addToCart(product, price);
    });
});

function addToCart(product, price) {
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} x ${item.quantity} = ${item.price * item.quantity} $`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });
    document.getElementById('total-price').textContent = `Total: ${totalPrice} $`;
}
    // Reset button
    document.getElementById("clear-cart").addEventListener("click", function(){
      document.getElementById("cart-items").innerHTML = "";
      document.getElementById("total-price").innerHTML = "Total: 0 $";
    });

    // chef-belly developer