var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var win = Ti.UI.createWindow({
	title: 'Choose a Monster',
	backgroundColor: '#0cf',
});


// create a controller instance

var Controller = require('Controller');
var controller = new Controller({ win: win });


// set the controller as a global resource
 
Ti.App.controller = controller; //todo lo que ponga despues de Ti.App.loquesea se convierte en una variable global, accesible desde cualquier punto de mi aplicacion


// open the first app screen

Ti.App.controller.show('monsters');//es decir con esta instrucción puedo cambiar de pagina desde cualquier lado porque es global


// open the main window

win.open();
