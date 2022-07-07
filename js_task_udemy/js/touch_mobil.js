// window.addEventListener('DOMContentLoaded',()=> {
//     const box = document.querySelector('.touch_mobil');

//     box.addEventListener('touchstart',(e)=>{
//         e.preventDefault(); //отмена стандартного поведения браузера

//         console.log('Start');
//     });

//     box.addEventListener('touchmove',(e)=>{
//         e.preventDefault(); //отмена стандартного поведения браузера

//         console.log('Move');
//     });

//     box.addEventListener('touchend',(e)=>{
//         e.preventDefault(); //отмена стандартного поведения браузера

//         console.log('End');
//     });
// });

// touches список всех пальцев которые взаимодействуют с экраном
// targetTouches все пальцы которые взаимодействуют именно с этим элементом
// changedTouches список палец который был убран

window.addEventListener('DOMContentLoaded',()=> {

    const box = document.querySelector('.touch_mobil');

    box.addEventListener('touchstart',(e)=>{
        e.preventDefault(); //отмена стандартного поведения браузера

        console.log('Start');
        console.log(e.targetTouches);
    });
});