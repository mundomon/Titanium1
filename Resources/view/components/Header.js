function Header() {

    // object properties

    this.box = null;


    // object constructor

    this.init = function() {
        this.build();
    };

    // object functions
    
    this.build = function() {
        var header = Ti.UI.createLabel({
            width: '100%',
            height: 100,
            text: 'Choose a Monster',
            color: '#fff',
            shadowColor: '#444',
            shadowOffset: { x: 1, y: 1 },
            font: { 
                fontSize: defaultFontSize+15, 
                fontWeight: 'bold', 
            },
            textAlign: 'center',
            backgroundImage: '/assets/images/headerbg.png',
            backgroundRepeat: true
        });
        this.box = header;
    };
    
    this.init();
}

module.exports = Header;