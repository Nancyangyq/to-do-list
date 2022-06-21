let data = [];

const InputData=document.querySelector(".inputData"); 
const Btn=document.querySelector(".button");
const InputData_text=document.querySelector(".inputData_text");
const InputText=document.querySelector(".input_text");

function rendorData(){
  let str = "";
  data.forEach(function(item,index){
    str += `<li class="inputData_text">${item.content} <input id="delete" class="button_text" type="button" data-num = "${index}" value="DONE!"></li>`;
  })
  const InputText=document.querySelector(".input_text");
  InputText.innerHTML = str ;
}
rendorData();

// 新增
Btn.addEventListener("click",function(){
  if(InputData.value == ""){
    alert("請輸入待辦事項");
    return;
  }
  let obj = {};
  obj.content = InputData.value;
  data.push(obj);
  rendorData();
  
  InputData.value = "";
})

// 刪除
InputText.addEventListener("click",function(i){
  if(i.target.getAttribute("value") !== "DONE!"){
    alert("你沒有點擊到「DONE!」");
    return;
  }
  let num = i.target.getAttribute("data-num");
  data.splice(num,1);
  
  rendorData();
})