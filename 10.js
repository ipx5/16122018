var city={
    name: 'Moscow',
    getName: getNameFn
}

var city2={
    age: 200,
    getAge: getAgeFn 
}


function getNameFn(){
    return this.name;
}

function getAgeFn() {
    return this.age;
}

console.log(getAgeFn.call(city2));
console.log(getNameFn.call(city));

console.log(city.getAge.apply(city,city2));


//не очень понятно как это работает