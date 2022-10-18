let menuTog = document.querySelector('.menutg')
let menuList = document.querySelector('.mainMenu')


menuTog.addEventListener('click', function(){
    menuTog.classList.toggle('togAct')
    menuList.classList.toggle('listExt')
})