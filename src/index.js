module.exports = function zeros(expression) {
  // your solution
  let zerosInfo = [0,0];
  let multipliersArray = expression.split('*');
  for (let i = 0; i < multipliersArray.length; i++) {
    let number = 0;
    let multiplier = multipliersArray[i];
    let pos = multiplier.indexOf('!!');
    if (pos > -1) {
      number = Number(multiplier.slice(0,pos));
      (number%2===0) ? updateZerosInfoEven (number,zerosInfo) : updateZerosInfoOdd (number,zerosInfo);
    } else {
      pos = multiplier.indexOf('!');
      number = Number(multiplier.slice(0,pos));
      if (pos > -1) {
        updateZerosInfoRegular (number,zerosInfo);
      }
    }
  }
  return Math.min(zerosInfo[0],zerosInfo[1]);
}

function updateZerosInfoRegular (number, zerosInfo) {
  for (let i=1; i<=number; i++) {
    updateZerosInfo(i,zerosInfo);
  }
}

function updateZerosInfoOdd (number, zerosInfo) {
  for (let i=1; i<=number; i+=2) {
    updateZerosInfo(i,zerosInfo);
  }
}

function updateZerosInfoEven (number, zerosInfo) {
  for (let i=2; i<=number; i+=2) {
    updateZerosInfo(i,zerosInfo);
  }
}

function updateZerosInfo(number, zerosInfo) {
  let tmpNumber = number;
    while (tmpNumber%5 === 0) {
      tmpNumber = tmpNumber/5;
      zerosInfo[0] ++;
    }
    while (tmpNumber%2 === 0) {
      tmpNumber = tmpNumber/2;
      zerosInfo[1] ++;
    }
  }