const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(){
	fabric.Image.fromURL('BirthdayImage.jpg'), function(IMG){
        block_image_object = IMG;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
        };
	
}

function playSound(){
	x.play();
}
function wishes(){
    fabric.Image.fromURL('get_image'), function(IMG){
        block_image_object = IMG;

        block_image_object.scaleToWidth(300);
        block_image_object.scaleToHeight(490);
        block_image_object.set({
            top:50,
            left:70
        });
        canvas.add(block_image_object);
        };
}