var onphoto1 = document.getElementById('onPhoto1')
var content1 = document.getElementById('hover-content1')
function moveUP1(){
    onphoto1.style.animation="moveUp 0.6s"
    onphoto1.style.transform='translateY(-40px)'
    content1.style.animation="moveUpContent 1s"
    content1.style.display="block"
    content1.style.transform='translateY(-40px)'
    document.getElementById('photo1').classList.add("Dark")
}
function moveDOWN1(){
    onphoto1.style.animation="moveDown 0.5s"
    onphoto1.style.transform='translateY(0px)'
    document.getElementById('photo1').classList.remove("Dark")
    content1.style.display="none"
}
var onphoto2 = document.getElementById('onPhoto2')
var content2 = document.getElementById('hover-content2')
function moveUP2(){
    onphoto2.style.animation="moveUp 0.6s"
    onphoto2.style.transform='translateY(-40px)'
    document.getElementById('photo2').classList.add("Dark")
    content2.style.animation="moveUpContent 1s"
    content2.style.display="block"
    content2.style.transform='translateY(-40px)'
}
function moveDOWN2(){
    onphoto2.style.animation="moveDown 0.5s"
    onphoto2.style.transform='translateY(0px)'
    document.getElementById('photo2').classList.remove("Dark")
    content2.style.display="none"
}
var onphoto3 = document.getElementById('onPhoto3')
var content3 = document.getElementById('hover-content3')
function moveUP3(){
    onphoto3.style.animation="moveUp 0.6s"
    onphoto3.style.transform='translateY(-40px)'
    document.getElementById('photo3').classList.add("Dark")
    content3.style.animation="moveUpContent 1s"
    content3.style.display="block"
    content3.style.transform='translateY(-40px)'
}
function moveDOWN3(){
    onphoto3.style.animation="moveDown 0.5s"
    onphoto3.style.transform='translateY(0px)'
    document.getElementById('photo3').classList.remove("Dark")
    content3.style.display="none"
}



var sGrid = document.getElementById('slider-grid');


var cardOverlay1 = document.getElementById('slider-card-1')
function overlayWhiteIn1(){
  cardOverlay1.style.animation='moveUp 1s';
  cardOverlay1.style.transform='translateY(-40px)';
  document.getElementById('rm1').style.display="block"
}
function overlayWhiteOut1(){
  cardOverlay1.style.animation='moveDown 1s';
  cardOverlay1.style.transform='translateY(0px)';
  document.getElementById('rm1').style.display="none"
}
var cardOverlay2 = document.getElementById('slider-card-2')
function overlayWhiteIn2(){
  cardOverlay2.style.animation='moveUp 1s';
  cardOverlay2.style.transform='translateY(-40px)';
  document.getElementById('rm2').style.display="block"
}
function overlayWhiteOut2(){
  cardOverlay2.style.animation='moveDown 1s';
  cardOverlay2.style.transform='translateY(0px)';
  document.getElementById('rm2').style.display="none"
}
var cardOverlay3 = document.getElementById('slider-card-3')
function overlayWhiteIn3(){
  cardOverlay3.style.animation='moveUp 1s';
  cardOverlay3.style.transform='translateY(-40px)';
  document.getElementById('rm3').style.display="block"
}
function overlayWhiteOut3(){
  cardOverlay3.style.animation='moveDown 1s';
  cardOverlay3.style.transform='translateY(0px)';
  document.getElementById('rm3').style.display="none"
}
var cardOverlay4 = document.getElementById('slider-card-4')
function overlayWhiteIn4(){
  cardOverlay4.style.animation='moveUp 1s';
  cardOverlay4.style.transform='translateY(-40px)';
  document.getElementById('rm4').style.display="block"
}
function overlayWhiteOut4(){
  cardOverlay4.style.animation='moveDown 1s';
  cardOverlay4.style.transform='translateY(0px)';
  document.getElementById('rm4').style.display="none"
}
var cardOverlay5 = document.getElementById('slider-card-5')
function overlayWhiteIn5(){
  cardOverlay5.style.animation='moveUp 1s';
  cardOverlay5.style.transform='translateY(-40px)';
  document.getElementById('rm5').style.display="block"
}
function overlayWhiteOut5(){
  cardOverlay5.style.animation='moveDown 1s';
  cardOverlay5.style.transform='translateY(0px)';
  document.getElementById('rm5').style.display="none"
}

var p = $(".popup__overlay");

$("#popup__toggle").click(function() {
  p.css("display", "block");
});
p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p).css("display", "none");
  }
});
$(".popup__close").click(function() {
  p.css("display", "none");
});

//video popup
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("popupVid");
  var iframe = div.getElementById("iframe1")[0].contentWindow;
  //div.style.display = state == 'hide' ? 'none' : '';
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

$("#popup__toggle").click(function() {
  p.css("visibility", "visible").css("opacity", "1");
});

p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo("hide");
  }
});

$(".popup__close").click(function() {
  p.css("visibility", "hidden").css("opacity", "0");
  toggleVideo("hide");
});







var p2 = $(".popup__overlay2");

$("#popup__toggle2").click(function() {
  p2.css("display", "block");
});
p2.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p2).css("display", "none");
  }
});
$(".popup__close2").click(function() {
  p2.css("display", "none");
});

//video popup
function toggleVideo2(state) {
  // if state == 'hide', hide. Else: show video
  var div2 = document.getElementById("popupVid2");
  var iframe2 = div2.getElementById("iframe2")[0].contentWindow;
  //div.style.display = state == 'hide' ? 'none' : '';
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe2.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

$("#popup__toggle2").click(function() {
  p2.css("visibility", "visible").css("opacity", "1");
});

p2.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p2)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo2("hide"); 
  }
});

$(".popup__close2").click(function() {
  p2.css("visibility", "hidden").css("opacity", "0");
  toggleVideo2("hide");
  
});
