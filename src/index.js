import "bulma/bulma.sass";
import "./style.scss";
import "./team.scss";
import "./hero.scss";
import './parallax.scss'
import "./scrollspy";
import "./team.js";
import logoSrc from "./assets/imgs/logo.png";
import { DateTime, Settings } from "luxon";

Settings.defaultLocale = "pt-br";

const data = DateTime.local().toFormat("LLLL/y");

const logo = document.querySelector("#logo");
const logoPresentation = document.getElementById("logo-presentation");

logoPresentation.src = logoSrc;
logo.src = logoSrc;
logo.alt = `IM NEWS ${data} `;
