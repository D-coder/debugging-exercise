 window.addEventListener('DOMContentLoaded', function() {
  

  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];
  
  cards.forEach(function(card) {

    console.log('Printing The Card', card);
    card.addEventListener('click', function() {
      console.log('clicked the card',card);
      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {
        console.log('selecting the card',card);
        card.classList.add('is-selected');
        selectedCards.push(card);
      }
      console.log('printing selected cards',selectedCards);
      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        console.log('length of card is 2');
        var card1 = selectedCards[0];
        var card2 = selectedCards[1];

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          console.log('card 1 and 2 match');
          matchedCards.push(card1, card2);
          card1.classList.add('is-matched');
          card2.classList.add('is-matched');
        }else{
          console.log('cards dont match');
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove('is-selected');
        card2.classList.remove('is-selected');
        selectedCards = [];
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length === cards.length)
       {
        alert('You matched all the cards, nice job!');
      }
    });
  });
});
