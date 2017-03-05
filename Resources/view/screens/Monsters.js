function Monsters() {

    this.box = null;
    
    this.build = function() {

        var box = Ti.UI.createView({
            layout: 'vertical'
        });

        var Header = require('view/components/Header');
        var header = new Header();
        box.add(header.box);

        var monster_data = require('data/monster_data').data;

/*
        var ElementList = require('view/components/ElementList');
        for (var i=0, ii=monster_data.length; i<ii; i++) {
        	var el = new ElementList(monster_data[i]);
        	box.add(el.box);
        }
*/
/*Para añadirlo con tableview*/
		var tableData = [];
		var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
		var oddRow = false;
		for (var i=0, j=monster_data.length; i<j; i++) {
		  var item = monster_data[i];
		  var row = Ti.UI.createTableViewRow({
		  	monsterId:item.id,
		    height: 80,
		    backgroundColor: oddRow ? '#fff' : '#eee'
		  });

		  row.add( Ti.UI.createImageView({
		    image:'/assets/images/' + item.id + '.png',
		    left:2,
			width: 112,
			height: 60
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize+6, fontWeight: 'bold'},
		    text: item.username,
		    left: 110, top: 6,
		    width: 200, height: 30
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#888',
		    font: { fontSize: defaultFontSize, fontWeight: 'normal'},
		    text: 'Experience: ' + item.exp,
		    left: 110, top: 40,
		    width: 200, height: 20
		  }));
		  row.addEventListener('singletap',function(e){
        	//alert('pressed button');
        	Ti.App.controller.show('monster_detail',e.rowData.monsterId);
        	
        });
		 
		 
		  tableData.push(row);
		  oddRow = !oddRow;
		}
		var tableView = Ti.UI.createTableView({ data: tableData, width: '94%', height: '82%',borderRadius:4, });
		box.add(tableView);
//fin añadido tableview
       
        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters;