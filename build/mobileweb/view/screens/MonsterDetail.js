function Monsters_detail() {

    this.box = null;
    
    this.build = function() {

        var box = Ti.UI.createView({
            layout: 'vertical',
            backgroundColor:'red',
        });

        var Header = require('view/components/Header');
        var header = new Header();
        box.add(header.box);
        

        var monster_data = require('data/monster_data').data;

 /*       var ElementList = require('view/components/ElementList');
        for (var i=0, ii=monster_data.length; i<3; i++) {
        	var el = new ElementList(monster_data[i+1]);
        	box.add(el.box);
        }
  */      
  		box.add( Ti.UI.createImageView({
		    image:'/assets/images/1.png',
			width: 300,
			height: 160
		}));
		box.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize+6, fontWeight: 'bold'},
		    text: 'hola', //item.username,
		    top: 6,
		    width: 200, height: 30
		}));
        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters_detail;