function load (){
  var oInp = document.getElementById("main");
  oInp.addEventListener('touchstart', touch, false);
  oInp.addEventListener('touchmove', touch, false);
  oInp.addEventListener('touchend', touch, false);
  function touch (event){
    var event = event || window.event;
    console.log(event.targetTouches);
    switch(event.type){
        case "touchstart":
            oInp.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
            //console.log(event.touches[0]);
            break;
        case "touchmove":
            event.preventDefault();
            oInp.innerHTML = "Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
            break;
        case "touchend":
            oInp.innerHTML = "Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
            //console.log(event.changedTouches);
            break;
        }
    }
}
window.addEventListener('load',load, false);
console.log('innerWidth : ' + window.innerWidth);//r
console.log('innerHeight : ' + window.innerHeight);//r
console.log('clientWidth : ' + document.documentElement.clientWidth);
console.log('clientHeight : ' + document.documentElement.clientHeight);
