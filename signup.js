//mobile version
function togglePopup() {
          var popup = document.getElementById('popup');
          if (popup.style.display === 'block') {
              popup.style.display = 'none'; 
          } else {
              popup.style.display = 'block'; 
          }
      }
      
//top bar
      document.addEventListener('DOMContentLoaded', function() {
              var link = document.querySelector('a[href="#recipeboxes"]');
              var dropdown = document.querySelector('.dropdown-menu');
          
              link.addEventListener('click', function(event) {
                  event.preventDefault(); 
                  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
              });
          
              document.addEventListener('click', function(event) {
                  if (!link.contains(event.target) && !dropdown.contains(event.target)) {
                      dropdown.style.display = 'none';
                  }
              });
          });