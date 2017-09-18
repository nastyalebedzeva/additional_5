module.exports = function check(str, bracketsConfig) {
  var begBrackets = [];
	var endBrackets = [];
	var indx;
	var result;
  for (var i = 0; i < str.length; i++) {
// search for opening brackets
	  indx = bracketsConfig.indexOf(str[i]);
	  if(indx == 0){
		  if(i == str.length-1) {
			  result = false;
			  break;
		  }
		  begBrackets.push[indx];
	  }
	  if(indx !== 0){
		  if(i == 0){
			  result = false;
			  break;
		  }
		  endBrackets.push[indx];
	  }
  }
  
  if(result == false){
	  return false;
  } else {
	  if(begBrackets.length == endBrackets.length){
		  return true;
	  }else{
		  return false;
	  }
  } 
}
