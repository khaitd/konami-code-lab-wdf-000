const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




var index = 0
function init() {
  document.addEventListener('keydown', konami)
}

function konami(e) {
  //  let index = 0;
  let key = parseInt(e.detail || e.which);
   if (key === code[index]){
     

     if(index === code.length-1){

       alert('hurray!');
       index = 0
      //  init()
     }
     index++;

   } else {
     index = 0;
   }
}

// init()
