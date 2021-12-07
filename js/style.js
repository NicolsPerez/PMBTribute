

      function play(){
        var audio = document.pianobody("audio");
        audio.play();
                  }
 
 window.addEventListener('keydown', function(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     if (!audio) return;
     audio.currentTime = 0;
     audio.play();
     // key.classList.add('active')
   })
 
 
 
 var correctOrder = 'ghjt';
 var music = document.querySelector('.music');
 
 
 var userInput = '';
 document.body.addEventListener('keypress', function(e) {
   userInput = userInput + e.key;
   var inputLength = userInput.length;
   if(userInput === correctOrder.slice(0, inputLength)) {
     if(inputLength === correctOrder.length) {
        music.play();
        var pageHeight = window.innerHeight;
        window.scrollTo(0, pageHeight)
     }
  
   }
 })
 
 