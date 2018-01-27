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
import lucast from './assets/imgs/lucast.jpg'
import { replaceImgs } from "./utils";

const imgs = {
    artur,
    bia,
    lucasp,
    manoel,
    math,
    rodolfo,
    pablo,
    pelu,
    lucast,
    veni,
    victor
}
replaceImgs('img[id^=team]', imgs)
