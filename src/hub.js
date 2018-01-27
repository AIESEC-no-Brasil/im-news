import { replaceImgs } from "./utils";
import icx from './assets/imgs/analise-icx.svg'
import ogx from './assets/imgs/analise-ogx.svg'
import apicx from './assets/imgs/analise-ap-icx.svg'
import apogx from './assets/imgs/analise-ap-ogx.svg'

const imgs = {
    icx,
    ogx,
    apicx,
    apogx
}

replaceImgs('img[id^=analise]', imgs)
replaceImgs('img[id^=analise-ap]', imgs)