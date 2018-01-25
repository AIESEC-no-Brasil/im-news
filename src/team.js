import artur from './assets/imgs/artur.jpeg'
import bia from './assets/imgs/bia.jpeg'
import lucasp from './assets/imgs/lucasp.jpeg'
import manoel from './assets/imgs/maneco.jpg'
import math from './assets/imgs/math.jpeg'
import rodolfo from './assets/imgs/rodo.jpeg'
import pablo from './assets/imgs/pablo.jpeg'
import pelu from './assets/imgs/pelu.jpeg'
import veni from './assets/imgs/veni.jpeg'
import victor from './assets/imgs/victor.jpeg'

const imgs = {
    artur,
    bia,
    lucasp,
    manoel,
    math,
    rodolfo,
    pablo,
    pelu,
    veni,
    victor
}

Array.from(document.querySelectorAll('img[id^=team]'))
    .map(el => {
        const id = el.id.split('-')[1]
        el.src = imgs[id]
    })