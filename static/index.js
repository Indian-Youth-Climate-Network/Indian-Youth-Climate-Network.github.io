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
  document.getElementById(rm).style = "display : block !important ; color: #00aa55 !important"
}
function overlayWhiteOut(sliderCard , rm){
  var cardOverlay1 = document.getElementById(sliderCard)
  cardOverlay1.style.animation='moveDown 1s';
  cardOverlay1.style.transform='translateY(0px)';
  document.getElementById(rm).style.display="none "
}