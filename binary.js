var binaryInput = prompt("Enter a binary number");
var total=0;
var convert = function(number){


  for (var index = binaryInput.length -1; index >= 0; index --) {
  var digit = parseInt(binaryInput.charAt(index));

   total += Math.pow(2, binaryInput.length - index-1) * digit
  }
  return(total);
}

alert((convert(binaryInput)));
