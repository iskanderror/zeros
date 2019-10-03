module.exports = function zeros(expression) {
  // your solution
  let pureZeroCount = 0;
  let freeEvenCount = 0;
  let pureFiveCount = 0;
  let multipliersArray = expression.split('*');
  for (let i = 0; i < multipliersArray.length; i++) {
    let zerosInfo = [0,0,0];
    let number = 0;
    let multiplier = multipliersArray[i];
    let pos = multiplier.indexOf('!!');
    if (pos > -1) {
      number = Number(multiplier.slice(0,pos));
      zerosInfo = (number%2===0) ? getZerosEven (number) : getZerosOdd (number);
    } else {
      pos = multiplier.indexOf('!');
      number = Number(multiplier.slice(0,pos));
      if (pos > -1) {
        zerosInfo = getZerosRegular (number);
      }
    }
    pureZeroCount += zerosInfo[0];
    freeEvenCount += zerosInfo[1];
    pureFiveCount += zerosInfo[2];
  }
  return 0;
}

function getZerosRegular (number) {
  let pureZeroCount = 3;
  let freeEvenCount = 3;
  let pureFiveCount = 3;
  return [pureZeroCount,freeEvenCount,pureFiveCount];
}

function getZerosOdd (number) {
  let pureZeroCount = 1;
  let freeEvenCount = 1;
  let pureFiveCount = 1;
  return [pureZeroCount,freeEvenCount,pureFiveCount];
}

function getZerosEven (number) {
  let pureZeroCount = 2;
  let freeEvenCount = 2;
  let pureFiveCount = 2;
  return [pureZeroCount,freeEvenCount,pureFiveCount];
}