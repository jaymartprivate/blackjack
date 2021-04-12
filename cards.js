function firstSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq1",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6)).textContent = result;
}
function clear1(clear) {
  document.querySelector("#seq1").textContent = " ";
}

function secondSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq2",cc(7) + cc(8) + cc(9)).textContent = result;
}
function clear2(clear) {
  document.querySelector("#seq2").textContent = " ";
}

function thirdSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq3",cc(10) + cc('J') + cc('Q') + cc('K') + cc('A')).textContent = result;
}
function clear3(clear) {
  document.querySelector("#seq3").textContent = " ";
}

function fourthSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq4",cc(3) + cc(7) + cc('Q') + cc(8) + cc('A')).textContent = result;
}
function clear4(clear) {
  document.querySelector("#seq4").textContent = " ";
}
function fifthSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq5",cc(2) + cc('J') + cc(9) + cc(2) + cc(7)).textContent = result;
}
function clear5(clear) {
  document.querySelector("#seq5").textContent = " ";
}

function sixthSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq6",cc(2) + cc(2) + cc(10)).textContent = result;
}
function clear6(clear) {
  document.querySelector("#seq6").textContent = " ";
}

function seventhSequence() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0)? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq7",cc(3) + cc(2) + cc("A") + cc(10) + cc("K")).textContent = result;
}
function clear7(clear) {
  document.querySelector("#seq7").textContent = " ";
}


