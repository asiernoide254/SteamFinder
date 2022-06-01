function search() {
    // Declare variables
    var input, filter, cards, a, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < cards.length; i++) {
      a = cards[i].getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }