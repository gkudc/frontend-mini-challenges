const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');

plusBtn.addEventListener('click', ()=> {
    console.log('plus clicked');
})

minusBtn.addEventListener('click', ()=> {
    const countValue = parseInt(count.innerText);
    count.innerText = countValue + 1;
})
