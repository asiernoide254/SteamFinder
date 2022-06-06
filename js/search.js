function searchVg() {
  var input = document.getElementById("vgSearchBar");
  var filter = input.value.toUpperCase();
  var container = document.getElementsByClassName("contenedor-videojuegos")[0];
  var cards = container.children;
  var cardImages = document.getElementsByClassName("card-img");
  var orderBy = document.getElementById("orderBy").value;
  var resultsFound = false;

  if (filter == "") {
      container.style.gridTemplateColumns = "";
  } else {
      container.style.gridTemplateColumns = "100%";
  }

  //No funciona bien en vista de movil
  for (var i = 0; i < cardImages.length; i++) {
      if (filter == "") {
          cardImages[i].style.width = "40%";
      } else {
          cardImages[i].style.width = "25%";
      }
  }

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

  cards = Array.prototype.slice.call(cards, 0);
  cards = quickSort(cards, 0, cards.length - 1, orderBy);

  container.innerHTML = "";
  for (var i = 0; i < cards.length; i++) {
    container.appendChild(cards[i]);
  }

  var vgSearchError = document.getElementById("vgSearchError");
  vgSearchError.hidden = resultsFound;
}

function swap(cards, leftIndex, rightIndex){
  var temp = cards[leftIndex];
  cards[leftIndex] = cards[rightIndex];
  cards[rightIndex] = temp;
}

function partition(cards, left, right, orderBy) {
  var pivot   = cards[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
      while (compare(cards[i], pivot, orderBy) < 0) {
          i++;
      }
      while (compare(cards[j], pivot, orderBy) > 0) {
          j--;
      }
      if (i <= j) {
          swap(cards, i, j);
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(cards, left, right, orderBy) {
  var index;
  if (cards.length > 1) {
      index = partition(cards, left, right, orderBy);
      if (left < index - 1) {
          quickSort(cards, left, index - 1, orderBy);
      }
      if (index < right) {
          quickSort(cards, index, right, orderBy);
      }
  }
  return cards;
}

function compare(card1, card2, orderBy) {
  switch(orderBy) {
    case "Récord de jugadores":
      return getRecord(card2) - getRecord(card1);
    case "Precio más bajo":
      return getPrice(card1) - getPrice(card2);
    case "Precio más alto":
      return getPrice(card2) - getPrice(card1);
    default:
      return 0;
  }
}

function getRecord(card) {
  recordString = card.getElementsByClassName("numero-jugadores")[0].innerHTML.replace(".", "");
  return parseInt(recordString);
}

function getPrice(card) {
  priceString = card.getElementsByClassName("precio")[0].innerHTML;

  if (priceString == "Gratuito") {
    return 0;
  } else {
    priceString = priceString.substring(0, priceString.length - 1).replace(",", ".");
    return parseFloat(priceString);
  }
}

function addEnterListener() {
  var input = document.getElementById("userSearchBar");
  input.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
      searchUser();
    }
  });
}

function addClearListener() {
  var input = document.getElementById("vgSearchBar");
  input.addEventListener("search", function(event) {
    searchVg();
  });
}
  
function searchUser() {
  var input = document.getElementById("userSearchBar");
  var filter = input.value.toUpperCase();

    if (filter == "DARKVOID") {
      window.location.href = "usuario.html";
    } else {
      var userSearchError = document.getElementById("userSearchError");
      userSearchError.hidden = false;
    }
}