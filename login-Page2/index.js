const change = document.getElementById('change')
var changex=0;
change.addEventListener('click',function(){
    if(changex===0){
        document.getElementById('banner').style.animationName='slidebf'
        document.getElementById('change').innerText='Sign In'
        document.getElementById('about').innerText='If You have an account you can Login with Your exciting Account'
        document.getElementById('top').innerText='Welcome Back!'
        changex++;
    }
    else{
        document.getElementById('banner').style.animationName='slidebb'
        document.getElementById('change').innerText='Sign Up'
        document.getElementById('about').innerText='If you dont have an account You can sign Up With a New Account'
        document.getElementById('top').innerText='Hello, Friends!'
        changex=0;
        
    }
})