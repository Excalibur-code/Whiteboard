function createSticky(){
   // <div class="stickyPad">
     //    <div class="navbar">
       //      <div class="close"></div>
         //    <div class="minimize"></div>
         //</div>
        // <div class="container"><textarea name="" id="" cols="30" rows="10"></textarea></div>
    //</div>
    
    //create all the required area
    // let stickyPad = document.createElement("div");
    // let navBar = document.createElement("div");
    // let close = document.createElement("div");
    // let minimize = document.createElement("div");
    // let container = document.createElement("div");
    let container = createBox();
    let textarea = document.createElement("textarea");
    
    //create subtree
    // stickyPad.appendChild(navBar);
    // stickyPad.appendChild(container);
    // navBar.appendChild(close);
    // navBar.appendChild(minimize);
    container.appendChild(textarea);
    
    //add styling to them using css classes
    // stickyPad.setAttribute("class", "stickyPad");
    // navBar.setAttribute("class", "navBar");
    // close.setAttribute("class", "close");
    // minimize.setAttribute("class", "minimize");
    // container.setAttribute("class", "container");
    textarea.setAttribute("class", "textarea");

    //append it to body
    // document.body.appendChild(stickyPad);
    // let initialX = null;
    // let initialY = null;
    // let isStickydown = false;
    // navBar.addEventListener("mousedown", function (e) {
    //      //initial point
    //      initialX = e.clientX;
    //      initialY = e.clientY;
    //      isStickydown = true;

    // })
    // board.addEventListener("mousemove", function (e) {
    //     if (isStickydown == true) {
    //         // final point 
    //         let finalX = e.clientX;
    //         let finalY = e.clientY;
    //         //  distance
    //         let dx = finalX - initialX;
    //         let dy = finalY - initialY;
    //         //  move sticky
    //         let { top, left } = stickyPad.getBoundingClientRect()
    //         // stickyPad.style.top=10+"px";
    //         stickyPad.style.top = top + dy + "px";
    //         stickyPad.style.left = left + dx + "px";
    //         initialX = finalX;
    //         initialY = finalY;
    //     }
    // })
    // window.addEventListener("mouseup", function () {
    //      isStickydown = false;
    // })

    // close.addEventListener("click", function () {
    //     stickyPad.remove();
    // })

    // let flag = true;
    // minimize.addEventListener("click", function () {
    //      if(flag == true){
    //          container.style.display = "none";
    //      }else{
    //           container.style.display = "block";
    //      }
    //      flag = !false;
    // })
}
//sticky.js and image.js get the container made from the util.js file