let tt = document.querySelector('.inptext');
let bb = document.querySelector('.butt');
let dd = document.querySelector('.block-one')
let brain ;
bb.addEventListener('click',()=>{
    if(tt.value != ''){
        var inputcheck = document.createElement("input");
        inputcheck.id = tt.value;
        inputcheck.type = "checkbox";
        inputcheck.name = 'list';
        inputcheck.class = 'chack';

        var label1 = document.createElement('label');
         label1.setAttribute("for", tt.value);
         label1.setAttribute("class", tt.value);
        
        var br = document.createElement('br');

        label1.innerHTML = tt.value;
        dd.appendChild(inputcheck);
        dd.appendChild(label1);
        dd.appendChild(br);

        tt.value = '';    
    }
        else{
        document.querySelector('.error').style.display = 'block';
    }
});
document.querySelector('.hrest').addEventListener('click',()=>{
    document.querySelector('.error').style.display = 'none';
})
let ch = document.getElementsByTagName('br')
console.log(ch);
dd.addEventListener('click',(event)=>{
    if(event.target.name == 'list'){
        console.log(ch.length)
        if(dd.children.length > 4){
            let qq = document.querySelector(`.${event.target.id}`);
            dd.removeChild(qq);
            dd.removeChild(event.target);
            dd.removeChild(ch[0]);
        }
        else{
            document.querySelector('.error-two').style.display = 'block';
        }


    }
})

document.querySelector('.hreste').addEventListener('click',()=>{
    document.querySelector('.error-two').style.display = 'none';
})

