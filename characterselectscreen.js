/**
 * Created by Mike on 5/11/16.
 */
/*
input shout be a mouse click
 */

function CharacterSelect(input, width, height){
    var CANVAS_WIDTH = width;
    var CANVAS_HEIGHT = height;

    var characterSelect = "";

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var CHARACTER_BOX_DIMENSION = 200;
    var clintonHead = document.getElementById("clintonHead");
    var sandersHead = document.getElementById("sandersHead");
    var trumpHead = document.getElementById("trumpHead");
    var cruzHead = document.getElementById("cruzHead");

    var clintonBox = ctx.drawImage(clintonHead, 300, 300, CHARACTER_BOX_DIMENSION, CHARACTER_BOX_DIMENSION);
    var sandersBox = ctx.drawImage(sandersHead, 500, 300, CHARACTER_BOX_DIMENSION, CHARACTER_BOX_DIMENSION);
    var trumpBox = ctx.drawImage(trumpHead, 300, 500, CHARACTER_BOX_DIMENSION, CHARACTER_BOX_DIMENSION);
    var cruzBox = ctx.drawImage(cruzHead, 500, 500, CHARACTER_BOX_DIMENSION, CHARACTER_BOX_DIMENSION);
    clintonBox.onclick = function () {
        characterSelect = "hillaryClinton";
    };

    sandersBox.onclick = function () {
        characterSelect = "bernieSanders";
    };

    trumpBox.onclick = function () {
        characterSelect = "donaldTrump";
    };

    cruzBox.onclick = function () {
        characterSelect = "tedCruz";
    };


}