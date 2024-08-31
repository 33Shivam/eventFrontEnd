import convertToFourDigitNumber from "./random";

function randomizerStartOptions(id) {
  



    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;     
      let iteration = 0;      
      clearInterval(interval);      
      interval = setInterval(() => {
        const value = (document.getElementById(id).dataset.value);
        document.getElementById("mainText").textContent = value
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return document.getElementById(id).dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= document.getElementById(id).dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 2;
      }, 30);
    
    

}

export default randomizerStartOptions;