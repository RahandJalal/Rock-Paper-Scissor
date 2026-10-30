  let score = JSON.parse(localStorage.getItem('score')); 
     
     if(score === null){
      score = {
        wins:0,
        losses:0,
        ties:0
      }
     }

    
      updateScore();

     function playGame(playerMove){

        const computerMove =  pickComputerMove();

       let result = '';

      if (playerMove === 'scissor'){
          if (computerMove === 'rock'){
        result = 'you lost';
      } else if(computerMove === 'paper'){
        result = 'you win';
      }else if (computerMove === 'scissor'){
        result = 'tie';
      }
      } else if (playerMove === 'paper'){

      if (computerMove === 'rock'){
        result = 'you win';
      } else if(computerMove === 'paper'){
        result = 'tie';
      }else if (computerMove === 'scissor'){
        result = 'you lost';
      } 
      }else if(playerMove === 'rock'){

      if (computerMove === 'rock'){
        result = 'Tie';
      } else if(computerMove === 'paper'){
        result = 'you lost';
      }else if (computerMove === 'scissor'){
        result = 'you win';
      }
      }

      if (result === 'you win'){
        score.wins++;
      }else if(result === 'you lost'){
        score.losses++;
      }else if (result === 'tie'){
        score.ties ++;
      }

        localStorage.setItem('score', JSON.stringify(score));

        updateScore();
       
          document.querySelector('.js-moves').innerHTML = `   you
    <img src="./images/${playerMove}-emoji.png" class="move-icon">
    <img src="./images/${computerMove}-emoji.png" class="move-icon">
    computer
  </p>`;
          document.querySelector('.js-result').innerHTML = result;
      }



  function updateScore(){
     document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
  }

        
      function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove = ''; 

      if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
        computerMove = 'rock';
      } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissor';
      }

      return computerMove;
      }