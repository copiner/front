(function(){
  "use strict";
  var container=document.querySelector('.gallery'),
      imgs=document.querySelectorAll('img'),
      textWrapper=document.querySelector('.highlight'),
      content=document.querySelector('.content'),
      defaultTitle="Select your Ghostbuster!";

  function updateText(content){
    textWrapper.innerHTML=content;
  }

  function requestContent(file){
    //console.log('./html/'+file+' .content')
    $('.content').load('./html/'+file);
  }

  function removeCurrentClass(){
    for(var i=0;i<imgs.length;i++){
      imgs[i].classList.remove('current');
    }
  }

  function addCurrentClass(elem){
    removeCurrentClass();
    var element=document.querySelector("."+elem);
    element.classList.add('current');
  }

  container.addEventListener('click',function(e){
    if(e.target!=e.currentTarget){
      e.preventDefault();
      var data=e.target.getAttribute('data-name'),
          url = data;
          addCurrentClass(data);
          history.pushState(data,null,url);
          updateText(data);
          requestContent(url+'.html');
          document.title="Ghostbuster | "+data;
      }
      e.stopPropagation();
  },false);

  window.addEventListener('popstate',function(e){
    var character=e.state;
    console.log(character)
    if(character==null){
        removeCurrentClass();
        textWrapper.innerHTML=" ";
        content.innerHTML=" ";
        document.title=defaultTitle;
    } else {
        updateText(character);
        requestContent(character+".html");
        addCurrentClass(character);
        document.title="Ghostbuster | "+character;
    }
  })

  window.addEventListener('onbeforeunload', function(e){
    //console.log(e);
  }, false)

  window.onload = function(e) {

    var url = window.location.pathname;
    console.log(window.location.pathname);
    //server.js配合。刷新返回首页
    //if(window.location.pathname == '/peter.html'){}
    if(url != '/'){
      history.pushState(null,null,url);
      $('.content').load('./html'+url+'.html');
    }

  };

})();

console.log(navigator.userAgent);
