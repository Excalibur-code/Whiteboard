let upload = document.querySelector("#upload");
upload.addEventListener("change", function (e) {
    let uInp = document.querySelector("input[type='file']");//uploadInput
    //any image is selected
    //let changed = false;
    //have used bubbling here--

    let container = createBox();
    let file = uInp.files[0];
    //let file = upload.files[0];
    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.setAttribute("class", "upload-img");
    container.appendChild(img);//add image to the container as in sticky portion
    //remove
    uInp.value = null;

    //const reader = new FileReader();
    //reader.readAsDataURL(upload.files[0]);
    //using File Reader
    //reader.onload = function () {
           //img.src = reader.result;
    //}
})


//download the whole board
let download = document.querySelector("#download");
download.addEventListener("click", function () {
     let a = document.createElement("a");//this is an anchor which prompt the user to save the url
     a.href = board.toDataURL('image/png');//canvas or board's url get copied and set to href of anchor 'a'.
     //if we use any other url on above line it will take us to that url in this case it takes us to the url of image 
     a.download = 'file.png';//name of the file by which file will be downloaded
     a.click();//click on anchor which downloads the file on url
     a.remove();
})
// the url of the image or the board is used to download the image which gets saved on href of a which is in turn used to download.
//image/png on ln 31 defines the type of file we want for the url.