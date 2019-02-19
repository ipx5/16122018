var person = {
    name: 'Sergey',
    items:['keys','phone','banana'],
    showItems: function() {
        this.items.forEach(function(items){
            console.log(this.name + ' have '+ items);
    
        }, this)
    }
}

console.log(person.showItems());




