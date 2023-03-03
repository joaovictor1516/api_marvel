"use strict";

const md5 = require("md5");

const timeStemp = new Date().getTime();
const publicKey = "a7836e9b654b6019527d0921a05fb2dd";
const privateKey = "b570d67d539a3e9943771eb40333e5b45537f077";
const hash = md5(timeStemp + privateKey + publicKey);

const options = {
    method: "get",
    
};

const link = `http://gateway.marvel.com/v1/public/comics?ts=${timeStemp}&apikey=${publicKey}&hash=${hash}`;

fetch(link, options)
.then((response) => {
    response.json()
    .then((data) => {
        console.log(data)
    })
})
.catch((error) => {
    console.error(error);
})