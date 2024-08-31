import convertToFourDigitNumber from "./random";

function randomizerStartOptionsNums(id) {



    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;     
      let iteration = 0;      
      clearInterval(interval);      
      interval = setInterval(() => {
        const value =  convertToFourDigitNumber(document.getElementById(id).dataset.value).toString();

        document.getElementById("mainNum").textContent = value
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 6;
      }, 30);
    
    

}

export default randomizerStartOptionsNums;