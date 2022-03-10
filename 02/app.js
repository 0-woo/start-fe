var name = 'aj';
name =111;
console.log(name);

var isMan = 'true'; //문자열
var isMan1 = true; // 불린형
console.log(isMan);
console.log(isMan1);

function log(str){
    console.log(str);
}

log('hello');

//object

var img ={};
img.width=100;
img.height=200;
console.log(img);
//배열

var arr=[1,2,3,4,5];
console.log(arr);

//연산자
console.log(1+1);
console.log(name+'hello');

//typeof

console.log(typeof (1+'4'));
typeof foo !== 'undefined';

// debugger;
var me={
    age:11,
    name:'aj',
    isMan:true,
    sayHello:function (){
        console.log('hello');
    },
};


me.sayHello();

var arr=[1,2,3,4,5];
console.log(arr.length);

for (var i=0;i< arr.length;i++){
    console.log(arr[i]);
}

var article ={
    title:'제목1',
    url:'naver.com',

}
var article = [article];
console.log(article);


var todos=['운동'];

var todo = '게임';
todos.push(todo);

console.log(todos);

todos.forEach(function (todo){
    console.log(todo);
})