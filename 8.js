var person = {
    name: 'Sergey',
    items:['keys','phone','banana'],
    showItems: function() {
        this.items.forEach((items)=>{
            console.log(this.name + ' have '+ items);
        })
    }
}

console.log(person.showItems());




