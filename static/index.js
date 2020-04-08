function moveDOWN( photo , onphoto , content ){
  var onphoto1 = document.getElementById(onphoto)
  var content1 = document.getElementById(content)
    onphoto1.style.animation="moveDown 0.5s"
    onphoto1.style.transform='translateY(0px)'
    document.getElementById(photo).classList.remove("Dark")
    content1.style.display="none"
}
function moveUP(photo ,onphoto,  content){
  var onphoto1 = document.getElementById(onphoto)
  var content1 = document.getElementById(content)
  onphoto1.style.animation="moveUp 0.6s"
    onphoto1.style.transform='translateY(-40px)'
    content1.style.animation="moveUpContent 1s"
    content1.style.display="block"
    content1.style.transform='translateY(-40px)'
    document.getElementById(photo).classList.add("Dark")
}
var sGrid = document.getElementById('slider-grid');
function overlayWhiteIn(sliderCard , rm){
  var cardOverlay1 = document.getElementById(sliderCard)
  cardOverlay1.style.animation='moveUp 1s';
  cardOverlay1.style.transform='translateY(-40px)';
  document.getElementById(rm).style.display="block"
}
function overlayWhiteOut(sliderCard , rm){
  var cardOverlay1 = document.getElementById(sliderCard)
  cardOverlay1.style.animation='moveDown 1s';
  cardOverlay1.style.transform='translateY(0px)';
  document.getElementById(rm).style.display="none"
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
function toggleVideo(state) {
  var div = document.getElementById("popupVid");
  var iframe = div.getElementById("iframe1")[0].contentWindow;
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
function toggleVideo2(state) {
  var div2 = document.getElementById("popupVid2");
  var iframe2 = div2.getElementById("iframe2")[0].contentWindow;
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
var p3 = $(".popup__overlay3");
$("#popup__toggle3").click(function() {
  p3.css("display", "block");
});
p3.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p3).css("display", "none");
  }
});
$(".popup__close3").click(function() {
  p3.css("display", "none");
});
function toggleVideo3(state) {
  var div3 = document.getElementById("popupVid3");
  var iframe3 = div3.getElementById("iframe3")[0].contentWindow;
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe3.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}
$("#popup__toggle3").click(function() {
  p3.css("visibility", "visible").css("opacity", "1");
});
p3.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p3)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo3("hide"); 
  }
});
$(".popup__close3").click(function() {
  p3.css("visibility", "hidden").css("opacity", "0");
  toggleVideo3("hide");
});
var p4 = $(".popup__overlay4");
$("#popup__toggle4").click(function() {
  p4.css("display", "block");
});
p4.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p4).css("display", "none");
  }
});
$(".popup__close4").click(function() {
  p4.css("display", "none");
});
function toggleVideo4(state) {
  var div4 = document.getElementById("popupVid4");
  var iframe4 = div4.getElementById("iframe4")[0].contentWindow;
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe4.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}
$("#popup__toggle4").click(function() {
  p4.css("visibility", "visible").css("opacity", "1");
});
p4.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p4)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo4("hide"); 
  }
});
$(".popup__close4").click(function() {
  p4.css("visibility", "hidden").css("opacity", "0");
  toggleVideo4("hide");
  
});
