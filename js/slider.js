


// var item = document.getElementById("scrolling")

// /* конфигурация */
// let width = "779"; // ширина картинки
// let count = 1; // видимое количество изображений
// let list =document.querySelector('.slider__items');
// let listElems = document.querySelectorAll('.slider__item');

// let position = 0; 

// document.querySelector('.slider__btn-prev').onclick = function() {
//     // сдвиг влево
//     position += width * count;
//     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
//   };
  
//   document.querySelector('.slider__btn-next').onclick = function() {
//     // сдвиг вправо
//     position -= width * count;
//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
//   };

let index =0;

function movePrev() {
    let listElem = document.querySelector(".slider__items");
    listElem.children[index].classList.remove("slider__item_active");
    index-=1;
    if (listElem.children[index]){
        listElem.children[index].classList.add("slider__item_active");
        } else {
            index = 0;
            listElem.children[index].classList.add("slider__item_active");
        }
}

function moveNext() {
    let listElem = document.querySelector(".slider__items");

    if (index !== (listElem.children.length)-1){
    listElem.children[index].classList.remove("slider__item_active");
    index+=1;
    }
    if (listElem.children[index]){
    listElem.children[index].classList.add("slider__item_active");
     }
}