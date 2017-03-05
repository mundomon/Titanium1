function ElementList(args) {

    // object properties

    this.box = null;


    // object constructor

    this.init = function() {
        this.build();
    };

    // object functions
    
    this.build = function() {
        var box = Ti.UI.createView({
        	height: 50
        });
        box.add(Ti.UI.createLabel({
            text: args.username
        }));
        box.add(Ti.UI.createView({
            height: 1,
            top: 0,
            backgroundColor: '#ffffff'
        }));
        box.addEventListener('singletap',function(){
        	alert('pressed button');
        	//Ti.App.controller.show('monster_detail');
        });
        this.box = box;
    };
    
    this.init();
}

module.exports = ElementList;