function TableRowList(args) {

    // object properties

    this.box = null;


    // object constructor

    this.init = function() {
        this.build();
    };

    // object functions
    
    this.build = function() {
    	
    	var row = Ti.UI.createTableViewRow({
		    height: 85,
		  });

		  row.add( Ti.UI.createImageView({
		    image:'/assets/images/' + args.id + '.png',
		    left:-20,
			width: 150,
			height: 0
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize+6, fontWeight: 'bold'},
		    text: args.username,
		    left: 90, top: 6,
		    width: 200, height: 30
		  }));
		  row.add( Ti.UI.createLabel({
		    color: '#888',
		    font: { fontSize: defaultFontSize, fontWeight: 'normal'},
		    text: 'Experience: ' + args.exp,
		    left: 90, top: 40,
		    width: 200, height: 20
		  }));
		  row.addEventListener('singletap',function(){
		  	Ti.App.controller.show('monster_detail');
		  });
		  
		  this.box = row;
    };
    
    this.init();
}

module.exports = TableRowList;