/*

  function addEvent(elem, type, handler){
    if(elem.addEventListener){
      elem.addEventListener(type, handler, false);
    } else {
      elem.attachEvent('on'+type, handler);
    }
    return false;
  } 


 function toScroll(event) {  
  event = event || window.event;
  var elem = event.target || event.srcElement;
  
    if (event.preventDefault) { 
      event.preventDefault(); 
    } else { 
      event.returnValue = false;
    }

    if(elem.nodeName !== 'A') return;
    var id = elem.getAttribute('href').slice(1);

    var elemTarget = document.getElementById(id);
 
    var x = Math.max(document.documentElement.scrollTop,document.body.scrollTop);

    var topp = elemTarget.offsetTop;

    var step = Math.round(Math.abs(topp-x)/80);
    if(x > topp) step = step * -1;

    stopInterval = setInterval(toScrollTop,1);
    
    function toScrollTop() {
      if(Math.abs(topp-x) <= Math.abs(step) ) {
        window.scrollTo(0,topp);
        clearInterval(stopInterval);
        return;
      }
      window.scrollBy(0,step);
      x += step;
    }
   
}


function openMenu(id) {
  var btn = document.createElement('div'),
      menu = document.getElementById(id),
      parentMenu = menu.parentNode;
      
  btn.innerHTML = 'MENU';
  btn.classList.add('header-menu-btn');
  parentMenu.insertBefore(btn,menu);
  menu.classList.add('hidden');
  addEvent(btn,'click',function() {menu.classList.toggle('hidden')})
  
}

function showForm() {
  var FaceContent = document.getElementById('Face_content');
  var   FaceContentBtn = document.getElementById('Face_contentBtn');
   
  function toggleForm() {
    FaceContent.classList.toggle('close');
    FaceContentBtn.classList.toggle('open');
  }

  addEvent(FaceContentBtn,'click',toggleForm);
 FaceContent.classList.add('close');
}

showForm();

function showContent(){
    var content=document.getElementById("content");
    content.hidden=false;
}
showContent();
*/






    
