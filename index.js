function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}
function johnLennonFacts(facts) {
  let i = 0
  let results = []
  while (i < facts.length) {
    results.push(facts[i] + "!!!");
    i++
  }
  return results
}
function iLoveTheBeatles (number) {
  var array = [] ;
  do {
    array.push ("I love the Beatles!") ;
    number++ ;
  } while (number < 15) ;
  return array
}
