function checkAnagram() {
    var x = document.getElementById("frm1");
    var word1 = x.elements[0].value;
    var word2 = x.elements[1].value;
    var sortedWord1 = sortMyString(word1);
    var sortedWord2 = sortMyString(word2);
//    var answer = sortedWord1 === sortedWord2;
    document.getElementById("demo1").innerHTML = (sortedWord1 === sortedWord2);
}

function sortMyString(str) {
    var keep = /[^a-z0-9]/gi;
    return str.replace(keep,'').toLowerCase().split('').sort().join('');
}
