function countLetters (phrase){
  var letter = phrase.toLowerCase();
  var letters = letter.split(" ").join("");
  var result = {};

  for (var i = 0; i < letters.length; i++){
    if ( result[letters[i]]){
      result[letters[i]] ++;
    } else {
    result[letters[i]] = 1;
    }
    }
    console.log(result);
}

countLetters('I am Ghazaleh Sadooghi');