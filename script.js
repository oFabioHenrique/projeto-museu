function aumentarImagem(e) {
    if (document.getElementById(e).classList.remove('imgDiminuir')) {
       document.getElementById(e).classList.remove('imgDiminuir')
       document.getElementById(e).classList.add('imgAumentar')
    }  else {
       document.getElementById(e).classList.add('imgAumentar')
    }
   
}
function diminuirImagem(e) {
   if (document.getElementById(e).classList.contains('imgAumentar')) {
       document.getElementById(e).classList.remove('imgAumentar')
       document.getElementById(e).classList.add('imgDiminuir')
   }

}