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
    onphoto1.style.transform='translateY(40px)'
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
    onphoto2.style.transform='translateY(40px)'
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
    onphoto3.style.transform='translateY(40px)'
    document.getElementById('photo3').classList.remove("Dark")
    content3.style.display="none"
}