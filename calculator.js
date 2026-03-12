let auto_focus = () => {document.querySelector('#sum_area').focus()};
setInterval(auto_focus,1000)
let initial_input_value = document.querySelector('#sum_area');
// this will convert 0 to a number written in input or sum area
function check_sum_area(){
  if(initial_input_value.value == '0'){
    initial_input_value.value = ''
  }else {
    initial_input_value;
  };
};
// function for buttons which can be pressed at very first time i.e. numbers 1 to 0
function btn_click_first(inputValue){ 
  check_sum_area();
  initial_input_value.value += inputValue;
};
// special function for pi as value of pi is constant
const pi = 3.14159265359;
function pi_click(pi){
  check_sum_area();
  if(
    initial_input_value.value === '0'||
    initial_input_value.value.slice(-1) === '*' || 
    initial_input_value.value.slice(-1) === '-' ||
    initial_input_value.value.slice(-1) === '+'||
    initial_input_value.value.slice(-1) === '.'||
    initial_input_value.value.slice(-1) ==='/' 
  ){
    initial_input_value.value +=  pi;
  } else{
    alert('Please enter a valid Format')
  }
};
// function for clearing input area or sum_area
function clear_sum_area(){
  initial_input_value.value = '0';
};
// fuctions for button which can be clicked after having a valid number to avoid 5++ or 6-- 
function btn_click_second(value){
  if(
    initial_input_value.value === '0'
  ){
    alert('Please enter a Number First')
  }else if(
    initial_input_value.value.slice(-1) === '*' || 
    initial_input_value.value.slice(-1) === '-' ||
    initial_input_value.value.slice(-1) === '+'||
    initial_input_value.value.slice(-1) ==='/' ||
    initial_input_value.value.slice(-1) ==='.' ||
    initial_input_value.value.slice(-1) === pi
  ){
    alert('Please enter a valid Format') 
  }else{
    initial_input_value.value += value;
  }
};
// fuction for clearing the last digit i.e. Del
function del_button(){
  // .slice method converts initial_input_value in an object called autoBoxing
  let new_value = initial_input_value.value.slice(0,-1);
  initial_input_value.value = new_value;
  if(new_value === ''){
    initial_input_value.value = '0'
  } else{
    return initial_input_value.value;
  }
};
// function for =(evaluating sum)
function find_sum(){
  let final_ans = eval(initial_input_value.value);
  initial_input_value.value = final_ans;
};

// starting event Listener

initial_input_value.addEventListener('keydown',() => {
  check_sum_area();
  const key = event.key
  if(
    key === '0' ||
    key === '1' ||
    key === '2' ||
    key === '3' ||
    key === '4' ||
    key === '5' ||
    key === '6' ||
    key === '7' ||
    key === '8' ||
    key === '9' 
  ){
    initial_input_value.value += key
  } else if(key === 'Enter'){
    find_sum();
  } else if(key === 'Backspace'){
    initial_input_value.value = initial_input_value.value.slice(0,-1);
  }else if(
    key === '/' ||
    key === '*' ||
    key === '-' ||
    key === '+' ||
    key === '%' ||
    key === '.' 
  ){
    if(
      initial_input_value.value.slice(-1) === '*' || 
      initial_input_value.value.slice(-1) === '-' ||
      initial_input_value.value.slice(-1) === '+'||
      initial_input_value.value.slice(-1) ==='/' ||
      initial_input_value.value.slice(-1) ==='.' ||
      initial_input_value.value.slice(-1) === pi
    ){
      alert('Please enter a valid Format') 
    }else{
      initial_input_value.value += key;
    }
  };
});