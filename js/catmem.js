let elemStressResistance = document.querySelector('.catMem');

// let elemStressResistance = document.getElementById('');

let elemImageCat;

elemStressResistance.onmouseover = function() {
    elemImageCat = document.createElement('img');
    elemImageCat.src = "./img/skills/cat-mem.jpg";
    elemImageCat.classList.add("catMemImage");
    elemStressResistance.append(elemImageCat);

    let top = elemImageCat.offsetHeight;
    elemImageCat.style.top = -top + 'px';

}

elemStressResistance.onmouseout = function() {
    if (elemImageCat) {
        elemImageCat.remove();
        elemImageCat = null;
    }
}