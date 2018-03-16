import artur from './assets/imgs/artur.jpeg'
import manoel from './assets/imgs/maneco.jpg'
import math from './assets/imgs/math.jpeg'
import rodolfo from './assets/imgs/rodo.jpeg'
import pablo from './assets/imgs/pablo.jpeg'
import jp from './assets/imgs/JP.jpg'
import pelu from './assets/imgs/pelu.jpeg'
import veni from './assets/imgs/veni.jpeg'
import { replaceImgs } from "./utils";

const imgs = {
    artur,
    manoel,
    math,
    rodolfo,
    pablo,
    pelu,
    veni,
    jp,
}
replaceImgs('img[id^=team]', imgs)
