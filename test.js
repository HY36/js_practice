function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name:'小明',
    birth:1990,
    age:getAge
};

console.log(xiaoming.age());
getAge();