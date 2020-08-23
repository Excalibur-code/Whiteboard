//const { Socket } = require("socket.io-client");

let ispendown = false;
let points = [];
let redoArr = [];
board.addEventListener("mousedown", function(e){
     //console.log(e);//this e object is a mouse pointer object and have lot of elements inside it.
     //path start
     let x = e.clientX;
     let y = e.clientY;
     let top = getPosition();
     y = y - top;//subtracting the area of tools
     //move to
     ctx.beginPath(0,0);
     ctx.moveTo(x,y);
     ispendown = true;

     let mdp = {
          x: x,
          y: y,
          id: "md",
          color: ctx.strokeStyle,
          width: ctx.lineWidth
      }
      points.push(mdp);
      socket.emit("md", mdp);

})
board.addEventListener("mousemove", function(e){
     //line to
     let x = e.clientX;
     let y = e.clientY;
     let top = getPosition();
     y = y - top;
     if(ispendown == true){
             ctx.lineTo(x,y);
             ctx.stroke();
             let mmp = {
               x: x,
               y: y,
               id: "mm",
               color: ctx.strokeStyle,
               width: ctx.lineWidth
           }
           points.push(mmp);
           socket.emit("mm", mmp);
     }
     //repeat
})
window.addEventListener("mouseup", function(e){
     //mouse up
     ispendown = false;
})

function getPosition(){
    let { top } = board.getBoundingClientRect();
    return top;
}

function redraw(){

      for(let i=0;i<points.length;i++){

           let {x, y, id, color, width} = points[i];
           ctx.strokeStyle = color;
           ctx.lineWidth = width;
           if(id == "md"){//mouse down
                ctx.beginPath();
                ctx.moveTo(x,y);
           }else if(id == "mm"){//mouse move
                ctx.lineTo(x,y);
                ctx.stroke();
           }
      }
}

function undoMaker() {
     // addFirst => unshift, 
     // removeFirst => shift
     //  addLast=> push
     // removeLast => pop
     if (points.length >= 2) {
         // pop last line
         let tempArr = [];
         for (let i = points.length - 1; i >= 0; i--) {
             let { id } = points[i];
             if (id == "md") {
                 tempArr.unshift(points.pop());
                 break;
             }else{
                //  mm
                 tempArr.unshift(points.pop());
             }
         }
         //  clear Rect
         ctx.clearRect(0, 0, board.width, board.height);
         // call redraw
         redoArr.push(tempArr);
         redraw();
     }
 
 }

 function redoMaker() {

      if(redoArr.length > 0){
           let mPathArr = redoArr.pop();
           //add all points to undo arr
           points.push(...mPathArr);
           //  clear Rect
           ctx.clearRect(0, 0, board.width, board.height);
           // call redraw
           redraw(); 
      }
 }
