// one thing to remeber when working with JavaScript is to console.log() every functin so we know it works properly 
//going to add an event listener to the drum buttons
//when the drum button is clicked, it will play the sound   
//we want them in their own function 
function playSound(e){
    const audio = document.querySelector('audio[data-key="${e.keyCode}"]'); //this will select the audio element that has the data-key attribute that matches the keycode of the key that was pressed
    //why are we using the backticks here?
    //we are using backticks because we are using a template string
    //template strings allow us to embed expressions in strings
    //we are using the ${} syntax to embed the expression
    const key = document.querySelector(' div[data-key="${e.keyCode}"]'); 
    if (!audio) return; //stop the function from running all together
   
    key.classList.add('playing'); //add the playing class to the key
    audio.currentTime = 0; //rewind to the start
    audio.play(); //play the audio
} 

function removeTransform(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform 
    // console.log the e.propertyName function to make sure it works 
    e.target.classList.remove('playing'); //remove the playing class from the key, we need to use this because we are inside the function and we are referring to the key that is being played
}
const keys = Array.from(document.querySelectorAll('.key')); //// transition end event listener, we need this because we want to remove the playing class after the transition ends so it wont get out of sync, since we have transition in our css file. 
keys.forEach(key=> key.addEventListener('transitioned', removeTransition)); //we need to code it this way to remove the transition from all the keys 

window.addEventListener('keydown', playSound); // this goes last because we want to add the event listener to the window, we want to listen for the keydown event on the window, when a key is pressed, it will run the playSound function
