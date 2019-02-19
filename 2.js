element.addEventListiener('click, handler')
element.addEventListiener('click', function(){
    console.log('handler 2!!');
})


function handler() {
    console.log('handler 1!!!');
   
   }
   
   function handler2(){
     console.log('handler 2!!!');
   }
   var button = document.body.getElementsByTagName('button')[0];
   button.addEventListener('click', handler)
   button.addEventListener('click', handler2)
   
   button.removeEventListener('click', handler)
   button.removeEventListener('click', )
      
   //
   
   
   // document.addEventListener("DOMContentLoaded", function() {
   //    window.tagname.onclick = function(event) {
   //     // вывести тип события, элемент и координаты клика
   //     console.log(event.type + " на " + event.currentTarget);
   //     console.log(event.clientX + ":" + event.clientY);
   //   }
   //   // window.tagname.addEventListener('change', function(e) {console.log(e.target.value)});
   // })