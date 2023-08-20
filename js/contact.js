const inputs=document.querySelectorAll('input')
let valid=0
console.log(valid)
document.forms[0].addEventListener('submit',function(e){
   e.preventDefault()
 
})
document.forms[0].addEventListener('input',function(e){
   
    if($('.valid').length==inputs.length){
    
    $('.disabled-btn').removeClass('disabled')
    }
    else{
      $('.disabled-btn').addClass('disabled')
    }
 })
inputs[0].addEventListener('input',function () {
    if(validateName(inputs[0])){
      inputs[0].classList.add('valid')
       
    }
    else{
      inputs[0].classList.remove('valid')
    }
})
inputs[1].addEventListener('input',function () {
    if(validateEmail(inputs[1])){
      inputs[1].classList.add('valid')
       
    }
    else{
      inputs[1].classList.remove('valid')
    }
})
inputs[2].addEventListener('input',function () {
    if(validatePhone(inputs[2])){
      inputs[2].classList.add('valid')
      
    }
    else{
      inputs[2].classList.remove('valid')
    }
})
inputs[3].addEventListener('input',function () {
    if(validateAge(inputs[3])){
      inputs[3].classList.add('valid')
       
    }
    else{
      inputs[3].classList.remove('valid')
    }
})
inputs[4].addEventListener('input',function () {
    if(validatePasword(inputs[4])){
      inputs[4].classList.add('valid')
       
    }
    else{
      inputs[4].classList.remove('valid')
    }
})
inputs[5].addEventListener('input',function () {
    if(inputs[5].value==inputs[4].value){
      inputs[5].classList.add('valid')
       
        inputs[5].classList.add('is-valid')
        inputs[5].classList.remove('is-invalid')
        
    }
    else{
        inputs[5].classList.add('is-invalid')
        inputs[5].classList.remove('is-valid')
        inputs[5].classList.remove('valid')
         
    }
})
function Register() {
   const user={
    "name":inputs[0].value,
    "email":inputs[1].value,
    "phone":inputs[2].value,
    "age":inputs[3].value,
    "password":inputs[4].value,
   } 
   console.log(user)
}
function validateName(input) {
    const regex=/^(?:[a-zA-Z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;

      if(regex.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
      }
      else{
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
      }
}
function validateEmail(input) {
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


      if(regex.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
      }
      else{
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
      }
}
function validatePhone(input) {
    const regex=/^[0-9]{11}$/;


      if(regex.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
      }
      else{
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
      }
}
function validateAge(input) {
    const regex=/^([1-7][0-9]|80)$/;


      if(regex.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
      }
      else{
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
      }
}
function validatePasword(input) {
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


      if(regex.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
      }
      else{
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
      }
}