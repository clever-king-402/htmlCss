const ball = document.getElementById('ball')
ball.addEventListener('click',slide)

function slide(){
    console.log(document.getElementsByClassName('slidef').length)
    if(document.getElementsByClassName('slidef').length===1){
        ball.classList.add('slideb')
        ball.classList.remove('slidef')
        console.log('dfg')
    }
    else{
        console.log('here')
        ball.classList.add('slidef')
        ball.classList.remove('slideb')
    }
}
