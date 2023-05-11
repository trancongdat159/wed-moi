var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#cfpassword')
var form       = document.querySelector('form')

function showError(input, message){
  let parent  = input.parentElement;
  let small   = parent.querySelector('small') 
  parent.classList.add('error')
  small.innerText = message
}


function showSucces(input){
  let parent  = input.parentElement;
  let small   = parent.querySelector('small') 
  parent.classList.remove('error')
  small.innerText = ''
}
function checkEmptyError(Listinput){
  let isEpmtyerror = false;
Listinput.forEach(input => {
  input.value = input.value.trim()

  if(!input.value){
    isEpmtyerror = true;
    showError(input,'khong duoc de rong')
  }else{
    showSucces(input)
  }
});
return isEpmtyerror
}

function checkEmail(input){
  const regexemail =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  input.value = input.value.trim()

let isEmailError = !regexemail.test(input.value)
  if(regexemail.test(input.value)){
    showSucces(input)
  }
  else{
    showError(input,'Email invalid')
  }
return isEmailError

}


function checkLengthError(input, min,max){
input.value = input.value.trim()

if(input.value.length <min){
  showError(input,`phai co it nhat ${min} ky tu`)
  return true
}
 

if(input.value.length>max){
  showError(input,`khong duoc vuot qua ${max} ki tu`)
  return true
}
 return false
}

function checkMatchPasswordError(passwordinput,cfpassword){
  if(passwordinput.value !== cfpassword.value){
    showError(cfpassword,'mat khau khong trung khop')
    return true
  }
  return false
}

 form.addEventListener('submit', function(e){
  e.preventDefault()
  let isEpmtyerror = checkEmptyError([username,email,password,confirmPassword])
  let isEmailError = checkEmail(email)
  let isUsernameLengthError = checkLengthError(username,3,20)
  let isPasswordLengthError = checkLengthError(password,8,20)
  let ischeckPassword = checkMatchPasswordError(password,confirmPassword)
  

  let user = {
    username: username.value, 
    email : email.value,
    password : password.value,};

    let json = JSON.stringify(user);
  
  if(isEpmtyerror || isEmailError || isUsernameLengthError||isPasswordLengthError||ischeckPassword){

  }else{
    localStorage.setItem(username.value,json);
    alert("dang ki thanh cong");
  }
 })

 

//  var username    = document.getElementById("username");
//  var email       = document.getElementById("email");
//  var password    = document.getElementById("password");
//  var btnSignup   = document.querySelector(".btn-signup");
//  var btnLogin    = document.querySelector(".btn-login");
 
//  btnSignup.addEventListener("click", (e) => {
//   e.preventDefault();
//   let user = {
//     username: username.value,
//     email: email.value,
//     password: password.value,
//   };
//   let json = JSON.stringify(user);
//   if (!username.value || !email.value || !password.value) {
//     alert("vui long nhap day du thong tin");
//   } 
    
//   else {
//     localStorage.setItem(username.value, json);
//     alert("dang ky thanh cong");
//   }
// });