$(document).ready(function() {

	var quotes = [
		["Perfection is not attainable, but if we chase perfection we can catch excellence.",
		"Vince Lombardi"],
		["We can't help everyone, but everyone can help someone.",
		"Ronald Reagan"],
		["Great minds discuss ideas; average minds discuss events; small minds discuss people.",
		"Eleanor Roosevelt"],
		["Be yourself; everyone else is already taken.",
		"Oscar Wilde"],
		["You only live once, but if you do it right, once is enough.",
		"Mae West"],
		["Be the change that you wish to see in the world.",
		"Mahatma Gandhi"],
		["No one can make you feel inferior without your consent.",
		"Eleanor Roosevelt"],
		["Do not take life too seriously. You will never get out of it alive.",
		"Elbert Hubbard"],
		["Without music, life would be a mistake.",
		"Friedrich Nietzsche"],
		["It is better to be hated for what you are than to be loved for what you are not.",
		"André Gide"],
		["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		"Albert Einstein"],
		["Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
		"Mark Twain"],
		["I have not failed. I've just found 10,000 ways that won't work.",
		"Thomas A. Edison"],
		["The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.",
		"Nikola Tesla"],
		["You have enemies? Good. That means you've stood up for something, sometime in your life.",
		"Winston S. Churchill"],
		["The fool doth think he is wise, but the wise man knows himself to be a fool.",
		"William Shakespeare"],
		["It's only after we've lost everything that we're free to do anything.",
		"Chuck Palahniuk, Fight Club"],
		["Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
		"Garrison Keillor"],
		["Wine is sunlight, held together by water.",
		"Galileo Galilei"],
		["Madness, as you know, is a lot like gravity; all it takes is a little push.", "The Joker"]
	];



	var L = quotes.length;
  pickL = Math.floor(L/2),
  candL = L - pickL,
	numbers = [],
  picked = [],
  randNum = 0;

  for (i=0; i<L; i++) {
    numbers[i] = i;
  }

  var candidates = numbers;

	displayRandomQuote();

  $("#newQuoteButton").click( function() {
		displayRandomQuote();
	});

	function displayRandomQuote() {
		randNum = Math.floor(Math.random()*(L-picked.length));
		$('#quoteDiv > p').text(quotes[candidates[randNum]][0]);
		$('#authorDiv > p').text("-"+quotes[candidates[randNum]][1]+"-");
		picked.push(candidates[randNum]);
		if ( picked.length === pickL ) {
			candidates.push(picked[0]);
			picked.splice(0, 1);
		}
		candidates.splice(randNum, 1);
	}

});
