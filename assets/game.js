  /* setting random value for each jewel javascript Math.random() 
  var jewel1 = Math.floor((Math.random() * 12) + 1);
  var jewel2 = Math.floor((Math.random() * 12) + 1);
  var jewel3 = Math.floor((Math.random() * 12) + 1);
  var jewel4 = Math.floor((Math.random() * 12) + 1);
 
 
  var score = 0;
  var win = 0;
  var loss = 0;
 
  /* setting random vaiable which is compared with score */
  var rand = Math.floor((Math.random() * 120) + 19);
 
  /* updating score.
  update_score(0);
 
  /* setting intial information using jquery basic selector and html() */
  $('#rand').html(rand);
  $('#win').html(win);
  $('#loss').html(loss);
 
  /* setting up click event for each jewel using jquery click */
  $('#jewel1').click(function(){
      update_score(jewel1);
     
  });
 
  $('#jewel2').click(function(){
      update_score(jewel2);
     
  });
 
  $('#jewel3').click(function(){
      update_score(jewel3);
     
  });
 
  $('#jewel4').click(function(){
      update_score(jewel4);
     
  });
  /*function to update score */  
  function update_score(s){
      score = score+s;
      $('#score').html(score);
     
         /*if score is equals to random number than it will be win */  
      if(rand == score){
          set_win();
         
          }else if(rand < score){     /*if score is greater than to random number than it will be loss */  
          set_loss();
      }
     
  }
 
 
  /* setting up win an loss */
  function set_win(){
     
      win = win+1;
      alert('You won');
      reset();
     
  }
 
  function set_loss(){
      loss = loss+1;
      alert('You lose');
      reset();
     
  }
  /* varable and information should be resetted after each game */
 
  function reset(){
      jewel1 = Math.floor((Math.random() * 12) + 1);
      jewel2 = Math.floor((Math.random() * 12) + 1);
      jewel3 = Math.floor((Math.random() * 12) + 1);
      jewel4 = Math.floor((Math.random() * 12) + 1);
     
      score = 0;
      update_score(0);
      rand = Math.floor((Math.random() * 120) + 19);
      $('#rand').html(rand);
      $('#win').html(win);
      $('#loss').html(loss);
     
     
  }