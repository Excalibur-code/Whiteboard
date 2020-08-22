//npm init -y
//npm install electron --save-dev
//create main.js file
//goto => package.json
//change main,add start script
//npm start to run the code
//const a=10;
const electron = require('electron');
const app=electron.app;//electron is like amodule so we are taking out app module from it
//npm install ejs-electron --save-dev
//create window will create a window of given height and width(in pixels)
function createWindow(){
      let win = new electron.BrowserWindow({
        width:800,
        height:600,
        //to open app inn hidden mode
        //show:false,//we did this bcz now window will open only in maximize mode and not in this aspect
        webPreferences: {
            nodeIntegration: true//electron can access the functions,files of desktop via this command should be true
        }//for this it will run without web preference part 
    })
    win.loadFile('index.html').then(function(){
        win.maximize();//to open the electron window in maximize mode
        //unhide app to let user view it.
        win.show();//this func and show:false in crete window is used to get rid of window being maximized after opening the electron 
        //to open dev tools
        //win.webContents.openDevTools();//to open developer tools aka inspect tools on opening the page
    });
}
//package=>app=>desktop=>open  
app.whenReady().then(createWindow);//to start app we use app.whenReady() then the function inside will be executed
//when the app is ready to run
//since javascript does not run without environment so app.whenReady converts the code into executable file
//and then then function is called.
//node integration is set true if we want the functionality of node in the electron.
//SYNTAX------------------------------------------------------------------------------------------

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

  //-----code in this block is for mac bcz in mac app cannot be quit just be crossing it..it needs to removed to for that these functions are used---------
  //till here all was setup for the code we continue below----------------------------------------

