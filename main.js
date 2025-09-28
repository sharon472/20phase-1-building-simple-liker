
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';


       const errorModal = document.getElementById("modal");

    


const hearts = document.querySelectorAll(".like-glyph");


hearts.forEach(heart => {
        heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        



        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart"); 

        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
         .catch(error => {
        
        errorModal.classList.remove("hidden");
        errorModal.textContent = error;
      
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }   , 3000);
      });
  });
});


     function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
           setTimeout(function() {
 let isRandomFailure = Math.random() < .2;
     
     
        if (isRandomFailure) {
            reject("Random server error. Try again.");
     
      } else {
             resolve("Pretend remote server notified of action!");
     
      }
    
    }, 300);
  });
}
