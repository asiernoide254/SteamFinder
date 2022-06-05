function searchVg() {
    // Declare variables
    var input = document.getElementById("searchBar");
    var filter = input.value.toUpperCase();
    var container = document.getElementsByClassName("contenedor-videojuegos")[0];
    var searchText = document.getElementById("searchText");
    var cards = document.getElementsByClassName("card");
    var cardImages = document.getElementsByClassName("card-img");
    var resultsFound = false;

    if (filter == "") {
        container.style.gridTemplateColumns = "";
        searchText.innerHTML = "Juegos más populares";
    } else {
        container.style.gridTemplateColumns = "100%";
        searchText.innerHTML = "Resultados";
    }

    //Se jode en vista de movil
    for (var i = 0; i < cardImages.length; i++) {
        if (filter == "") {
            cardImages[i].style.width = "40%";
        } else {
            cardImages[i].style.width = "25%";
        }
    }
  
    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      a = card.getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card.style.display = "";
        resultsFound = true;
      } else {
        card.style.display = "none";
      }
    }

    var vgSearchError = document.getElementById("vgSearchError");
    vgSearchError.hidden = resultsFound;
  }

  function searchUser() {
    
  }