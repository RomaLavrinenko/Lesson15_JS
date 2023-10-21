let h1 = document.querySelector('.toph');
let h2 = document.querySelector('.both');
let leftModal = document.querySelector('.midh');
let rightModal = document.querySelector('.img');
let lineModal = document.querySelector('.line');
window.addEventListener('scroll', ()=>{
    if(window.scrollY>= 200 && window.scrollY<= 500){
        h1.style.fontSize = `${window.scrollY/10}px`;
    }

    if(window.scrollY<=600){
        leftModal.style.left = `${window.scrollY/4}px`
        rightModal.style.right = `${window.scrollY/4}px`
        lineModal.style.left = `${window.scrollY/4}px`
        lineModal.style.width =  `${window.scrollY}px`

    }

    if(window.scrollY>=1100){
        h2.style.fontSize = `${ 200 - window.scrollY/10}px`;
    }

})

h1.addEventListener('click',()=>{
    leftModal.scrollIntoView({behavior: 'smooth'})
})
h2.addEventListener('click',()=>{
    window.scroll({
                top: 0,
                behavior: 'smooth'
            })
})

