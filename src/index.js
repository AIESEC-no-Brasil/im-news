import "bulma/bulma.sass";
import "./style.scss";
import "./team.scss";
import "./hero.scss";
import "./parallax.scss";
import "./team.js";
import "./hub";
import "./areas";
import logoSrc from "./assets/imgs/logo.png";
import heartSrc from './assets/imgs/heart.svg'
import { DateTime, Settings } from "luxon";

Settings.defaultLocale = "pt-br";

const data = DateTime.local().toFormat("LLLL/y");

const logo = document.querySelector("#logo");
const logoPresentation = document.getElementById("logo-presentation");
const heart = document.querySelector('#heart')
heart.src = heartSrc

logoPresentation.src = logoSrc;
logo.src = logoSrc;
logo.alt = `IM NEWS ${data} `;
