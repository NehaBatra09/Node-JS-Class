let data = 1;

function getValue(value) {
  return data + value;
}

function getValue2(value) {
  data = value;
  return data;
}

function getValue2(value) {
  return value;
}

function getValue3(val,val2){

  return val+val2
}

console.log(getValue(2));

console.log(getValue2(2));

console.log(getValue3(1,2))
