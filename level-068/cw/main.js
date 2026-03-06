import { countryName, products, getInfo } from "./georgia.js";
import { countryName2, products2, getInfo2 } from "./japan.js";
import { countryName3, products3, getInfo3 } from "./germany.js";

const app = document.getElementById("app");

app.innerHTML = `
  <h2>${countryName}</h2>
  <p>${products.join(", ")}</p>
  <p>${getInfo()}</p>

  <h2>${countryName2}</h2>
  <p>${products2.join(", ")}</p>
  <p>${getInfo2()}</p>

  <h2>${countryName3}</h2>
  <p>${products3.join(", ")}</p>
  <p>${getInfo3()}</p>
`;