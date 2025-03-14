document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart-items tbody');
    let total = 0;

    function updateCart() {
        cartTableBody.innerHTML = ''; // Clear the table before updating

        cart.forEach(item => {
            const row = document.createElement('tr');
            const itemPrice = parseInt(item.price.replace('₹', '').replace(',', ''), 10); // Parse price from INR format
            
            row.innerHTML = `
                <td><img src="${item.imageUrl}" alt="Costume ${item.id}" class="cart-image"></td>
                <td>Costume ${item.id}</td>
                <td>${item.price}</td>
                <td>
                    <button class="quantity-change" data-item-id="${item.id}" data-action="decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-change" data-item-id="${item.id}" data-action="increase">+</button>
                </td>
                <td>₹${(itemPrice * item.quantity).toLocaleString('en-IN')}</td>
                <td><button class="remove-item" data-item-id="${item.id}">Remove</button></td>
            `;
            cartTableBody.appendChild(row);

            total += itemPrice * item.quantity;
        });

        document.getElementById('cart-total').textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
    }

    updateCart();

    cartTableBody.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('remove-item')) {
            const itemId = target.getAttribute('data-item-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== itemId); // Remove item
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        } else if (target.classList.contains('quantity-change')) {
            const itemId = target.getAttribute('data-item-id');
            const action = target.getAttribute('data-action');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const item = cart.find(item => item.id === itemId);

            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease') {
                item.quantity = Math.max(item.quantity - 1, 1); // Prevent quantity from going below 1
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        window.location.href = 'buy.html'; // Redirect to checkout page
    });
});
