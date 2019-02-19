//this контекст вызова
var user= {
    name: 'Ilya',
    surname: 'Polyakov',
    sayHI: function(){
        console.log("hi "+ this.name);
    }
    fullname: function(){
        console.log(this.name+this.surname);
    }
}
user.sayHI();
var user2= { ...user };
user2.name='Petya';
user2.fullname(); 


