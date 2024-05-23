document.addEventListener("DOMContentLoaded", function() {
    // Get all plus/minus buttons, payment method inputs, address inputs and contact inputs on the page
    const minusButtons = document.querySelectorAll(".minus_button");
    const plusButtons = document.querySelectorAll(".plus_button");
    const paymentInputs = document.querySelectorAll("input[name='payment']");
    const addressInputs = document.querySelectorAll("input[name='address']");
    const contactInputs = document.querySelectorAll("input[name='contact']");
    const orderHeading = document.getElementById("your_order");

    // Add click event for each minus button.
    minusButtons.forEach(button => {
        button.addEventListener("click", function() {
            updateQuantity(button.dataset.index, -1);
        });
    });

    // Add click event for each plus button.
    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            updateQuantity(button.dataset.index, 1);
        });
    });

    // Add change event for each payment method / address detail / contact detail input
    paymentInputs.forEach(input => {
        input.addEventListener("change", function() {
            updateBorderStyles(paymentInputs, 'payment_method');
        });
    });

    addressInputs.forEach(input => {
        input.addEventListener("change", function() {
            updateBorderStyles(addressInputs, 'address_details');
        });
    });

    contactInputs.forEach(input => {
        input.addEventListener("change", function() {
            updateBorderStyles(contactInputs, 'contact_details');
        });
    });

    // Update the number of items
    function updateQuantity(index, change) {
        const quantityElement = document.getElementById(`quantity-${index}`);
        let quantity = parseInt(quantityElement.textContent);

        // Update the quantity and check if the quantity is less than 1, if it is less than 1 then delete the item
        quantity += change;
        if (quantity < 1) {
            const itemContainer = document.querySelector(`.item_container[data-index='${index}']`);
            itemContainer.remove();
        } else {
            quantityElement.textContent = quantity;
        }
        updateOrderDetails();
    }

     // Update order details
    function updateOrderDetails() {
        const orderSummary = document.getElementById('order_summary');
        orderSummary.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        // Iterate through each item container, updating the total order price and item quantity.
        document.querySelectorAll('.item_container').forEach(container => {
            const itemName = container.querySelector('.item_name').textContent;
            const priceElement = container.querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const quantityElement = container.querySelector('.quantity');
            const quantity = parseInt(quantityElement.textContent);

            total += price * quantity;
            itemCount += quantity;

            // Create the order item and add it to the order summary
            const orderItem = document.createElement('div');
            orderItem.classList.add('order_item');
            orderItem.innerHTML = `
                <span class="detail_item_name">${itemName}</span>
                <span class="item_price">$${(price * quantity).toFixed(2)}</span>
            `;
            orderSummary.appendChild(orderItem);
        });

        // Update total order price, shipping cost and total payment amount
        const priceElement = document.getElementById('price_cost');
        if (priceElement) {
            priceElement.textContent = `$${total.toFixed(2)}`;
        }

        const shippingCost = parseFloat(document.getElementById('shipping_cost').textContent.replace('$', ''));
        total += shippingCost;

        document.getElementById('total_payment').textContent = `$${total.toFixed(2)}`;
        document.querySelector('.checkout_price').textContent = `$${total.toFixed(2)}`;

        // Update the order count in "Your Order (3)"
        orderHeading.textContent = `Your Order (${itemCount})`;
    }

    // Change of the border style
    function updateBorderStyles(inputs, className) {
        
        // Set the border colour of all items to grey
        document.querySelectorAll(`.${className}`).forEach(item => {
            item.style.borderColor = '#e8e8e8';
        });
        // Set the border colour of the selected item to green
        inputs.forEach(input => {
            if (input.checked) {
                input.parentElement.style.borderColor = '#008050';
            }
        });
    }

    // Initial update of order details
    updateOrderDetails();
    // Initial update of border styles
    updateBorderStyles(paymentInputs, 'payment_method');
    updateBorderStyles(addressInputs, 'address_details');
    updateBorderStyles(contactInputs, 'contact_details');
});
