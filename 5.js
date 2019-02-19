var user ={
    name:'Vasya',
    show: showName,
    }

function showName() {
    console.log(this.name);

    
}

user.show();



