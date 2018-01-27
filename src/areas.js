import pe from "./assets/imgs/pe.svg";
import analise from "./assets/imgs/analise.svg";
import news from "./assets/imgs/news.svg";
import { replaceImgs } from "./utils";

const imgs = {
  pe,
  analise,
  news
};

replaceImgs("img[id^=area]", imgs);
