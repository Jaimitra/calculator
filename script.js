let para = document.querySelector(".input>p");
// console.log(para.innerText);
//
//
//
//
//
//
//
let value = document.querySelector(".calculator");
let equal = document.querySelector(".equalTo");
let removeAll = document.querySelector(".removeAll");
let deletevalue = document.querySelector(".delete");
value.addEventListener("click", (event) => {
  // when we click on any number then the para element intially as 0 init and without if condition below
  //  //then para value == 07,08,etc...
  //  // so inorder remove the zero in front of the number we use this condition
  if (para.innerText == "0") {
    para.innerText = "";
  }
  // it is for AC
  if (event.target == removeAll) {
    para.innerText = "0";
  }
  // it is for Delete and silce(0,-1) means removing the last character
  else if (event.target == deletevalue) {
    para.innerText = para.innerText.slice(0, -1);
  } else if (event.target == equal) {
    equalTo();
  } 
  // here if none of the condition statisfy that means we are giving the input
  else {
    if (event.target != value)
      para.innerText = para.innerText + event.target.innerText;
    // console.log(event.target);
  }
  // console.log(event.target.innerText);
  // console.log(event.currentTarget);
});
//
//
function equalTo() {
  let exp = para.innerText;
  let res = eval(exp);
  para.innerText = res;
}
