console.log('03');

if("test"){
    console.log("true");
}
"2"+2; //22
2+5+"1"//71

var a=1;
var b=a;
b=2;
console.log(a,b);

var a=[1];
var b=a;
b[0] = [2];
console.log(a,b);

var a ={x:1};
var b=a;
b.x =2;
console.log(a,b);

function  byValue(count){
    count = count +2;
}
var count =3;
byValue(count);
console.log(count);//3

function byReference(count){
    count.push('2');
}
var count =['1'];
byReference(count);
console.log(count);//["1","2"]

var isMan=true;
if(isMan) {
    console.log('난 남자');
}else{
    console.log('난 여자인가?');
}

var gender = isMan ? '남자' : '여자'; // 삼항연산자

for (var count =0;count<5;count++){
    //총 5번실행
}
var obj = {a:1,b:2};

for (var prop in obj){
    console.log(prop,obj[prop]);
}

function log(str){
    console.log(str);
}
var result = log('hello');
console.log(result);

/*prompt('누구세요?');
var isDelete = confirm('정말 삭제합니까?');
if(isDelete){
    //.....
}*/

var enc = encodeURIComponent('카카오');
decodeURIComponent(enc);

isNaN('1'); //숫자 여부

parseInt('12');
parseInt('09', 10); //항상 두번째 인자 주는 습관
parseFloat('10.33');

function test() {
    console.log('test()');
}

var id = setTimeout(test, 1000); //1초후 1번실행

var id = setInterval(test, 1000); //1초마다 계속 실행

var nick = 'aji'; //전역변수

function test() {
    var age = 30; //지역변수
    console.log(nick, age);
}
//
// test();
//
// var name = 'global';
// function test() {
//     console.log(name);
//     var name = 'local';
//     console.log(name);
// }

//함수또한
test2();
function test2() {
    console.log('test');
}
//quiz

var result = 0;
for (var a=0; a<count.length;a++){
    result = result + count[i]
}
console.log(result/count.length);

for(var a=1;a<10;a++){
    for(var b=1; b<10;b++){
        console.log(`${a} * ${b}=${a*b}`);
}
}

function multi(){
    for(var a=1;a<10;a++){
        for(var b=1; b<10;b++){
            console.log(`${a} * ${b}=${a*b}`);
    }
}
}
multi();

var person={
    name : 'cho',
    age :26,
    gender : 'male',
    Information  : function(){
        return this.name + this.age+ this.gender;
    }
}
console.log(person.Information());

var num1 = window.prompt('입력해주세요','0');
var num2 = window.prompt('입력해주세요','0');
console.log(Number(num1)+Number(num2));

var todo=['운동','게임']
var count = [0,1,23,11]

function cArr(arr,add){
    arr.push(add)
}

function rArr(arr){
    arr.forEach(e=>{
        console.log(e)
    })
}

function  uArr(arr,exist,change){
    var newArr = arr.map(params =>{
        if (params === exist){
            return change
        }
        return params
    })
    console.log(newArr)
}

function dArr(arr,del){
    var newArr = arr.filter(params=>{
        return params !== del
    })
    console.log(newArr)
}
