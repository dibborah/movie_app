import { images } from "images.js";

const movieItems = document.getElementsByClassName("movieItem");

images.map((items) =>{
    const ele = document.createElement("img");

    ele.setAttribute("src",items.src);

    movieItems.appendChild(ele);
});
