var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://wwww.flickr.com/photos/big',
        nicknames: ["tabtab", "T-Bone", "Mr. T", "Tabitha"]
    },
    {
        name: 'Popeye',
        clickCount: 0,
        imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        imgAttribution: 'https://wwww.flickr.com/photos/big',
        nicknames: ["Pops"]
    },
    {
        name: 'Chewie',
        clickCount: 0,
        imgSrc: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        imgAttribution: 'https://wwww.flickr.com/photos/big',
        nicknames: ["Chew"]
            }]
var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.clickAge = ko.computed(function(){
        var clicks = this.clickCount();
        if (clicks < 10) {
            return 'infant';
        }else if (clicks < 100) {
            return 'teen';
        }else {
            return 'adult';
        };
    }, this);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.nicknames = ko.observableArray(data.nicknames);

};

var ViewModel = function() {
    // self will always refer to the ViewModel inside this function
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.setCat = function(cat) {
        self.currentCat(cat);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());
