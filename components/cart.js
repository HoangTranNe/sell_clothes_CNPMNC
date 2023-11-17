
var selectedSize = "";
var selectedQuantity = 1;

function toggleSize(element) {
    var buttons = document.querySelectorAll('.size-button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedSize = element.innerText;
    clearSizeWarning();
}

function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function addToCart() {
    var selectedSizeElement = document.querySelector('.size-button.selected');
    if (!selectedSizeElement) {
        var sizeWarning = document.getElementById('size-warning');
        sizeWarning.innerHTML = "Bạn phải chọn kích thước";
        return;
    }

    var quantity = parseInt(document.getElementById('quantity').value);

    var product = {
        name: "MIXED BOXY RAGLAN TEE - BLACK / WHITE",
        price: 395000,
        size: selectedSize,
        quantity: quantity
    };


    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    var cartIcon = document.getElementById('cart-item-count');
    var currentItemCount = parseInt(cartIcon.innerHTML);
    cartIcon.innerHTML = currentItemCount + quantity;

    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}

function clearSizeWarning() {
    var sizeWarning = document.getElementById('size-warning');
    sizeWarning.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    updateCartItemCount(cartItems);
});
