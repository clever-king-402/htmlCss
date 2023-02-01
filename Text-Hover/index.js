class PathStetcher {
    constructor({ path }) {
        const d = path.getAttribute('d')
        const cd = path.getAttribute('data-complete-d')

        const gsapTo = gsap.to(path, { paused: true, attr: { d: cd }, ease: 'Power1.easeIn' })
        gsapTo.progress(1)

        let rect = path.getBoundingClientRect()
        let centerX = rect.x + rect.width / 2

        window.addEventListener('resize', () => {
            rect = path.getBoundingClientRect()
            centerX = rect.x + rect.width / 2
        })

        this.animate = (clientX) => {
            gsapTo.progress(Math.abs((clientX - centerX) / (rect.width * 2.2)))
        }
    }
}

const textStretcher1 = new PathStetcher({ path: document.querySelector('#path_1') })
const textStretcher2 = new PathStetcher({ path: document.querySelector('#path_2') })
const textStretcher3 = new PathStetcher({ path: document.querySelector('#path_3') })
const textStretcher4 = new PathStetcher({ path: document.querySelector('#path_4') })
const textStretcher5 = new PathStetcher({ path: document.querySelector('#path_5') })

const animatePaths = clientX => {
  textStretcher1.animate(clientX)
  textStretcher2.animate(clientX)
  textStretcher3.animate(clientX)

  textStretcher4.animate(clientX)
  textStretcher5.animate(clientX)
}

window.addEventListener('mousemove', e => animatePaths(e.clientX))
window.addEventListener('touchmove', e => animatePaths(e.touches[0].clientX))
window.addEventListener('touchend', () => animatePaths(-100))
window.addEventListener('load',     () => animatePaths(innerWidth / 2))