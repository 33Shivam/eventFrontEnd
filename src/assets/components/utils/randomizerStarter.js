function randomizerStart(id) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;     
      let iteration = 0;      
      clearInterval(interval);      
      interval = setInterval(() => {
        document.getElementById(id).textContent = document.getElementById(id).textContent
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
        
        iteration += 1 / 4;
      }, 30);
    

}

export default randomizerStart;