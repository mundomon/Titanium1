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
		    height: 85,
		    backgroundColor: oddRow ? '#fff' : '#eee'
		  });

		  row.add( Ti.UI.createImageView({
		    image:'/assets/images/' + item.id + '.png',
		    left:-20,
			width: 150,
			height: 80
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize+6, fontWeight: 'bold'},
		    text: item.username,
		    left: 100, top: 6,
		    width: 200, height: 30
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#888',
		    font: { fontSize: defaultFontSize, fontWeight: 'normal'},
		    text: 'Experience: ' + item.exp,
		    left: 100, top: 40,
		    width: 200, height: 20
		  }));
		 
		 
		  tableData.push(row);
		  oddRow = !oddRow;
		}
		var tableView = Ti.UI.createTableView({ data: tableData, width: '90%', height: '80%' });
		box.add(tableView);
//fin añadido tableview
       
        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters;