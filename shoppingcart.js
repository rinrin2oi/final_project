//增加商品数量 Increase the quantities of items
document.querySelector('.plus_button').addEventListener('click', () => {
          const quantityInput = document.getElementById('quantity');
          quantityInput.value = parseInt(quantityInput.value) + 1;
      });

//增加商品数量 Increase the quantities of items 
document.querySelector('.minus_button').addEventListener('click', () => {
          const quantityInput = document.getElementById('quantity');
          let currentQuantity = parseInt(quantityInput.value);
          if (currentQuantity > 1) {
              quantityInput.value = currentQuantity - 1;
          }
      });
      