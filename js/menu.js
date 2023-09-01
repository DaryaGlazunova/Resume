function showMenu() {
    let arrayBlock = [];
    let menuBurger = document.querySelector('.menu__burger');
    arrayBlock.push(menuBurger);
    let menuBody = document.querySelector('.menu__body');
    arrayBlock.push(menuBody);

    for (let block of arrayBlock) {
        if (!block.classList.contains('active')) {
            block.classList.add('active');
        } else {
            block.classList.remove('active');
        }
        
    }
}

function removeMenu() {
    document.querySelector('.menu__burger').classList.remove('active');
    menuBody = document.querySelector('.menu__body').classList.remove('active');
}