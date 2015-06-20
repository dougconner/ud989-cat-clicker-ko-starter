var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.clickAge = ko.computed(function(){
        var clicks = this.clickCount();
        if (clicks < 10) {
            return 'infant';
        }else if (clicks < 100) {
            return 'teen';
        }else {
            return 'adult';
        }
    }, this);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://wwww.flickr.com/photos/big');

    this.nicknames = ko.observableArray([
        "tabtab", "T-Bone", "Mr. T", "Tabitha"
        ]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);

    };


};

ko.applyBindings(new ViewModel());