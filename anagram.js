/*
 * Function to check if the two inputs are anagrams.
 * Removes all spaces and punctuation, then sorts each string.
 * Compares sorted strings to see if all elements are equal
 */
var isTrue = -1;

function checkAnagram() {
    var x = document.getElementById("frm1");//retrieve information from "Form 1" in index.html 
    var word1 = x.elements[0].value;		//assign 1st and 2nd inputs into respective strings 
    var word2 = x.elements[1].value;
    var sortedWord1 = sortMyString(word1);	//remove spaces/punctuation and sort both strings
    var sortedWord2 = sortMyString(word2);
    if(sortedWord1 === sortedWord2) {
    	if(isTrue != 1) {
		isTrue = 1;
    		document.body.style.backgroundColor = "#71B200";
    	} else {
    		document.body.style.backgroundColor = "#8EE000";
    		setTimeout(function(){ document.body.style.backgroundColor = "#71B200"; }, 1000);
    	}
    } else {
    	if(isTrue != 0) {
		isTrue = 0;
    		document.body.style.backgroundColor = "#D43231";
    	} else {
    		document.body.style.backgroundColor = "#6d0000";
    		setTimeout(function(){ document.body.style.backgroundColor = "#D43231"; }, 1000);    	}
    }
}

function sortMyString(str) {
	//variable range containing everything *except* letters and single digit numbers (global and case insensitive)
    var keep = /[^a-z0-9]/gi; 
    //replace non-letter/number values with '', assign to lower case, split into individual characters, sort ascending, and rejoin strings
    return str.replace(keep,'').toLowerCase().split('').sort().join('');
}
