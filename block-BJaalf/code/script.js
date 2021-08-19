function repeater(string, counter = 0, newString = '') {
  if (counter === 5) {
    return newString;
  } else {
    newString = string + newString;
    return repeater(string, counter + 1, newString);
  }
}

//---------------------------------------------------------

function loop(number) {
  if (number === 0) {
    return number;
  } else {
    console.log(number);
    return loop(number - 1);
  }
}

//---------------------------------------------------------

function countTo(number, limit) {
  if (number === limit) {
    return number;
  } else {
    console.log(number);
    return countTo(number + 1, limit);
  }
}

//---------------------------------------------------------
let counter = 1;
let answer = 1;
function exponent(base, expo) {
  while (counter <= base) {
    answer = answer * expo;
    counter++;
  }
  return answer;
}

//---------------------------------------------------------

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// --------------------------------------------------------

function recursiveExponent(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * recursiveExponent(base, expo - 1);
  }
}
