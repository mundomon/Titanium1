function Monsters_detail(monsterId) {

    this.box = null;
    
    this.build = function() {

        var box = Ti.UI.createView({
            layout: 'vertical',
            backgroundColor:'#0cf',
        });

        var Header = require('view/components/Header');
        var header = new Header();
        box.add(header.box);
        

        var monster_data = require('data/monster_data').data;
        var item = monster_data[monsterId-1];
        
        var boxContainer= Ti.UI.createView({
            layout: 'vertical',
            backgroundColor:'#fff',
            width: '94%', height: '82%',
            borderRadius:4 
        });
	  		boxContainer.add( Ti.UI.createLabel({
			    color: '#576996',
			    font: { fontSize: defaultFontSize+50, fontWeight: 'bold'},
			    text: item.username,
			    top:30,
			  }));
	  		boxContainer.add( Ti.UI.createImageView({
			    image:'/assets/images/' + monsterId + '.png',
				width: 300,
				height: 160,
				backgroundColor:'#fff',
				top:30
			}));
			boxContainer.add( Ti.UI.createLabel({
			    color: '#576996',
			    font: { fontSize: defaultFontSize+25, fontWeight: 'bold'},
			    text: item.exp,
			    top:30,
			  }));
			  boxContainer.add( Ti.UI.createLabel({
			    color: '#576996',
			    font: { fontSize: defaultFontSize,},
			    text: 'Experience',
			  }));
			var button = Ti.UI.createButton({
			  title: 'BACK',
			  width: 90, height: 45,
			  top: 50,
			  borderColor:'#576996',
			  borderRadius:4,
			  backgroundColor:'#eee',
			  color: '#576996',
			  font: { fontWeight: 'bold'},
			  
			});
			
			button.addEventListener('click',function(e) {
			  //alert('You clicked the button!');
			  Ti.App.controller.show('monsters');
			});
		
			boxContainer.add(button);
		
		box.add(boxContainer);

        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters_detail;