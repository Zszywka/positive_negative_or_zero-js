function myFunction() {
  var a = prompt('write value a');
  var b = prompt('write value b');
  var value =(a*a)-(2*a*b)-(b*b);

  if ((a != null) && (b != null) && (value>0)) {
    document.getElementById("value").innerHTML='This phrase (a^2)-2ab-(b^2) is equal to: '+ value + '. The result is positive';
    console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result and is positive.');

  } else if((a != null) && (b != null) &&(value<0)) {
    document.getElementById("value").innerHTML='This phrase (a^2)-2ab-(b^2) is equal to: '+ value + '. The result is negative';
    console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result is negative');
  } else {
      document.getElementById("value").innerHTML='This phrase (a^2)-2ab-(b^2) is equal zero: ' + value;
    console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result is zero');
  }
}
