gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav")

links.forEach(
    (link) => {
       link.addEventListener('click',()=>{
        gsap.to(links,{color : '#242424'})
        //turns the nav blue
        if(document.activeElement === link){
            gsap.to(link,{color: '#385ae0'})
           }
        //wanna move the line
       const state= Flip.getState(activeNav);
       link.appendChild(activeNav);
       Flip.from(state,{
        duration:1.5,
        absolute:true,
        ease:'elastic(1,.5)'
       });
       });
       
    });


//Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card,index) =>{
    card.addEventListener('click',()=>{
        //Get State
        const state = Flip.getState(cards);

        //Add the active class to the clicked one and add inactive to the others
        const isCardActive=card.classList.contains('active')
        cards.forEach((otherCard,otherIndex)=>{
            otherCard.classList.remove('active')
            otherCard.classList.remove('is-inactive')
            if(!isCardActive && index!==otherIndex){
                otherCard.classList.add('is-inactive')
            }
        })
        if(!isCardActive) card.classList.add('active')

        Flip.from(state,{
            duration:1,
            ease:"expo.out",
            absolute:true,
            // onComplete:() => {
            //     gsap.to('.card p',{y:500})
            // }
        })
    })
})