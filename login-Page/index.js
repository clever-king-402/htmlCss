const ball = document.getElementById('ball')
ball.addEventListener('click',slide)

function slide(){
    console.log(document.getElementsByClassName('slidef').length)
    const content = document.getElementById('content')
    const login = document.getElementById('login');
    const sign = document.getElementById('sign');
    if(document.getElementsByClassName('slidef').length===1){
        ball.classList.add('slideb')
        ball.classList.remove('slidef')
        content.classList.toggle('fanimat')
        content.classList.toggle('banimat')
        login.style.display='block';
        sign.style.display='none';

    }
    else{
        ball.classList.add('slidef')
        ball.classList.remove('slideb')
        content.classList.add('banimat')
        content.classList.remove('fanimat')
        login.style.display='none';
        sign.style.display='block';
    }
}

const eye = document.getElementById('eye')
eye.addEventListener('click',act);
var x=0;
function act(){
    if(x==0){
    document.getElementById('password').setAttribute('type','text')
    x++;
    }
else{
    document.getElementById('password').setAttribute('type','password');
    x=0;
    
}
}
