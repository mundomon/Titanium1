function Controller(args) {

    // object properties

    this.current_page = null;
    this.win = args.win;
    
    var self = this;


    // object functions
    
    this.show = function(screen_id) {

        var screen = null;
        if (screen_id == 'monsters') {

           var Screen = require('view/screens/Monsters');
           screen = new Screen();

        } else if (screen_id == 'monster_detail') {

           var Screen = require('view/screens/MonsterDetail');
           screen = new Screen();

        }
/*
		var on_post = function(){
			screen.box.removeEventListener('postlayout',on_post);
			self.current_page && self.win.remove(self.current_page.box);
			self.current_page=screen;
		};
		screen.box.addEventListener('postlayout',on_post);
		this.win.add(screen.box);
*/
        this.win.add(screen.box);
        this.current_page && win.remove(this.current_page.box);
        this.current_page = screen;

    };
}

module.exports = Controller;