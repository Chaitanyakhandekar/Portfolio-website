let hamb = document.querySelector('.hamb');
let nav = document.querySelector('.right');
let close = document.querySelector('.bi-x-lg');
let ul = document.querySelector('.right').lastChild

hamb.addEventListener('click',()=>{
    hamb.style.display='none';
    nav.style.height='500%';
    nav.style.width='60%';
    nav.style.left='5%';
    nav.style.top='5%';
    nav.style.visibility='visible';
    close.style.display='block';
    close.style.position='absolute';
    close.style.top='2%';
    close.style.right='3%';
    ul.style.visibility='visible';
});


close.addEventListener('click',()=>{
    hamb.style.display='block';
    nav.style.height='0';
    nav.style.width='0';
    nav.style.left='-12%';
    nav.style.visibility='visible';
    close.style.display='none';
    close.style.position='relative';
    close.style.top='0px';
    close.style.right='110px';
    ul.style.visibility='hidden'

})