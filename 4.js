var user ={
    name:'Vasya',
    sayHi: function(){
        showName(this);
    }
}
function showName(nameObj) {
    console.log(nameObj);

    
}

user.sayHI();

