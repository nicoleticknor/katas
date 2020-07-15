// Going to the cinema

function movie(card, ticket, perc) {
  // your code
  let visits = 1;
  let bTotal = card;
  let sysA = ticket * visits; // 15
  for (
    let ticketB = ticket;
    // 15
    Math.ceil(bTotal) > sysA;
    // 500 > 15
    ticketB = ticketB * perc // 15 * 0.9
  ) {
    bTotal += ticketB; // 15
    console.log(bTotal);
    console.log(sysA);
    visits++;
    sysA = ticket * visits;
  }
  let sysB = Math.ceil(bTotal);
  console.log(sysA);
  console.log(sysB);
  console.log(visits);
}

movie(500, 15, 0.9); // 43
movie(100, 10, 0.95); // 24
