function user(name,age) {
    this.name=name;
    this.age= age;

    // return {
    //     name: name
    // }
    
}
var Ilya = new user('Ilya',29);
console.log(Ilya);


var Vasya= new user('Vasya');
console.log(Vasya);



