var elForm = document.querySelector('.form')
var elMo = document.querySelector('.modal')
var elMod = document.querySelector('.modall')
var elPla = document.querySelector('.place')
var elSHa = document.querySelector('.shadow')





elForm.addEventListener('submit', function(e){
 e.preventDefault();


    if(e.target.login.value.length > 10 && e.target.pass.value.length  > 5 ){
      elMo.classList.add("modal__open")
      elPla.classList.add('places')
      elSHa.classList.add('')
    }else {
      elMod.classList.add('modall__open')
      elPla.classList.add('places')
    }
    
})          