number = 10
function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3();

add5();


number = 10;

add5();

divideBy3();