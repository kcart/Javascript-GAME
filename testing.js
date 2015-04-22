var WORDS     = ["booger", "apple", "hackbright", "mango"];
var SCRAMBLED = [];

for (var i = 0; i < WORDS.length; i++) {
    shuffledWord = shuffle(WORDS[i]);
    SCRAMBLED.push(shuffledWord);
}


function shuffle(word) {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}