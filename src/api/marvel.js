"use strict";

const md5 = require("md5");

const timeStemp = new Date().getTime();
const publicKey = "a7836e9b654b6019527d0921a05fb2dd";
const privateKey = "b570d67d539a3e9943771eb40333e5b45537f077";
const hash = md5(timeStemp + privateKey + publicKey);

console.log(hash);

const object = {
    
};

fetch("", object)
.then()
.catch()