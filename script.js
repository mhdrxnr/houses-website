const menu = document.querySelector('.menu');
const list = document.querySelector('.home nav .list ul');

menu.addEventListener('click',function(){
    list.classList.toggle('show');
})