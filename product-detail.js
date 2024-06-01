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


//search
document.getElementById('searchInput').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('searchPopup').style.display = 'block';
  document.body.classList.add('body-no-scroll');
});

document.getElementById('searchInput').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
      handleSearch(); // Assuming you have a function to handle the search
  }
});

function handleSearch() {
  var inputText = document.getElementById('searchInput').value.toLowerCase();
  var resultsContainer = document.getElementById('searchResults');
  if (inputText === 'pork') {
      resultsContainer.innerHTML = '<div class="pop-card">...</div>';
      resultsContainer.style.display = 'block';
      document.getElementById('searchMessage').style.display = 'none';
  } else {
      resultsContainer.style.display = 'none';
      document.getElementById('searchMessage').textContent = 'Please enter "pork"';
  }
}

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        var inputText = document.getElementById('searchInput').value.toLowerCase();
        if (inputText === 'pork') {
            document.getElementById('searchResults').style.display = 'block';
            document.getElementById('searchResults').innerHTML = `
                <div class="pop-card">
                    <img src="images/f10-Pork Chops & Savory Pan Sauce.jpeg">
                    <div class="pop-info">
                        <h3>Pork Chops</h3>
                        <button>SEE DETAILS</button>
                    </div>
                </div>
            `;
            document.getElementById('searchMessage').style.display = 'none'; 
        } else {
            document.getElementById('searchResults').style.display = 'none';
            document.getElementById('searchMessage').textContent = 'Please enter "pork"'; 
        }
    }
});

document.addEventListener('click', function(event) {
  var popup = document.getElementById('searchPopup');
  if (popup.style.display === 'block' && !popup.contains(event.target) && event.target.id !== 'searchInput') {
      popup.style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
      document.body.classList.remove('body-no-scroll');
  }
});

