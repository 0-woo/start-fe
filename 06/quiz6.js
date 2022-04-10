// <input type="number" placeholder="1" value="10" id="num" /> 단
// <button id="btn">출력</button>
// <hr />
// <div id="result"></div>


// #num input, #btn button, #result div 요소를 가져와
const num = document.querySelector('#num');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
// btn 클릭하면 input 값을 가져와야돼
btn.addEventListener('click', (e)=>{
   result.innerHTML = "";
   const inputValue = num.value;
   console.log(Number(inputValue));
   if(Number(inputValue)===0){
      alert("alert");
      return;
   }
   // 가져온 input값으로 구구단을 만들어
   for(i=1;i<10;i++){
      const vent = i*num.value;
      // console.log(`${inputValue} x ${i} = ${vent} `);
      // div라는 요소를 생성
      const div1 = document.createElement("div");
      // console.log(div1);
      // 생성된 div에 구구단 값 한줄씩 넣음
      div1.innerHTML = `${inputValue} x ${i} = ${vent} `;
      // console.log(div1);
      // 값을 넣은 div를 result 안에 넣어
      result.appendChild(div1);
   }
})


