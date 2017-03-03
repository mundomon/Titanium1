function Monsters_detail() {

    this.box = null;
    
    this.build = function() {

        var box = Ti.UI.createView({
            layout: 'vertical'
        });

        var Header = require('view/components/Header');
        var header = new Header();
        box.add(header.box);
        

        var monster_data = require('data/monster_data').data;

        var ElementList = require('view/components/ElementList');
        for (var i=0, ii=monster_data.length; i<3; i++) {
        	var el = new ElementList(monster_data[i+1]);
        	box.add(el.box);
        }
        
        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters_detail;