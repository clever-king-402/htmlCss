
gsap.registerPlugin(Flip)


const items = document.querySelectorAll('.item a')
const active = document.getElementsByClassName('active')[0]
const fcolor = document.getElementById('nav').style.color
items[0].style.color='#29c5f6'; //defaulty making the first one blue color
items.forEach((item)=>{
    item.addEventListener('click',()=>{

        gsap.to(items,{color:fcolor})
        gsap.to(item,{color:'#29c5f6'})

        // to get the state
        const state = Flip.getState(active)
        item.append(active)
        Flip.from(state,{
            duration:1,
            absolute:true,
            ease:'elastic(1,.5)'
        })
    })
})