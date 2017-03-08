function countLetters (phrase){
  var letters = phrase.toLowerCase();
  //var letters = letter.split(" ").join("");
  var result = {};

  for (var i = 0; i < letters.length; i++){
    if (letters[i] != " "){
      if ( result[letters[i]]){
      result[letters[i]].push(i);
    } else {
    result[letters[i]] = [i ];
    }

    }
  }
    console.log(result);
}

countLetters('I am Ghazaleh Sadooghi');