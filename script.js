
document.addEventListener('DOMContentLoaded', () => {
    function addToCart(itemId, price, imageUrl) {
        // Retrieve the current cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === itemId);
        
        if (existingItem) {
            // If item already exists, increment the quantity
            existingItem.quantity += 1;
        } else {
            // If item does not exist, add it to the cart with quantity 1
            cart.push({ id: itemId, price: price, quantity: 1, imageUrl: imageUrl });
        }
        
        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Optional: Provide feedback to the user
        alert('Item added to cart!');
    }

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            // Get item ID from button's data attribute
            const itemId = button.getAttribute('data-item-id');
            
            // Get price from the corresponding price element
            const priceElement = document.querySelector(`.price[data-item-id="${itemId}"]`);
            const price = priceElement ? priceElement.textContent : '₹0';
            
            // Get image URL from the corresponding image element
            const imageElement = document.querySelector(`.carousel-image[data-item-id="${itemId}"]`);
            const imageUrl = imageElement ? imageElement.src : '';
            
            // Call addToCart function with item ID, price, and image URL
            addToCart(itemId, price, imageUrl);
        });
    });
});
