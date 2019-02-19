var student = {
    name: 'Billy',

}

var lecturer = {
    name: 'Ilya'
}

var person={
    type: 'human',
    getName: function (){
        return this.name;
    }
}



console.log(person.getName.call(student));


student.__proto__=person;



var student2= Object.create(person);
student2.name="Vasya";
console.log(student2.getName());


var student3= {
    name: 'Student3',

}
Object.setPrototypeOf(student3,person);
console.log(student3.getName());
