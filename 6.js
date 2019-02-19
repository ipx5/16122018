var user = {
    name: 'Ilya',
    getName: getNameFn
}
function getNameFn(){
    return this.name
}
console.log(user.getName());
var getName = user.getName;

console.log(getName());


var sergey= {
    age: 29,
    getAge: function(a,b){
        return this.age;
    }
}

var oleg = {
    age:25
}

var getAge=sergey.getAge;

console.log(getAge.call(oleg));


console.log(getAge.call(oleg,1,3));

var fruits =[];
var citrus= ['orange', 'lemon', 'Apple'];
fruits.push('Banana');
fruits.push.apply(fruits,citrus);
fruits.push.call(fruits,citrus[0], citrus[1]);


var numbers= [10,13,30,16];
Math.max.apply(null,numbers);

