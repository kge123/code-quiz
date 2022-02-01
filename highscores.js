// highscores saved to local storage
function allScores(){
    var highScores = JSON.parse(localStorage.getItem('highscores')) || [];

    for (let index = 0; index < highScores.length; index++) {
        var li = document.createElement('li');
        li.textContent= highScores[index].initials + ': ' + highScores[index].score;
        
        document.getElementById('scoresList').append(li)
    }
}

allScores();