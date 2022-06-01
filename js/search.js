function search() {
    // Declare variables
    var input, filter, cards, a, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("contenedor-videojuegos")[0];
    cards = document.getElementsByClassName("card");

    container.style.gridTemplateColumns = (filter == "" ? "1fr 1fr" : "100%");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < cards.length; i++) {
      a = cards[i].getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;
      cards[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  }