function modalUs(){
    var catalogElement = document.querySelector('.catalog__title')
var catalogUl = document.querySelector('.catalog-ul')
var catalog = function(){
     catalogElement.addEventListener('mouseover', function(evt){
        evt.preventDefault();
        catalogUl.classList.add("catalog-ul_enabled")
    });
    catalogElement.addEventListener('focus', function(evt){
        evt.preventDefault();
        catalogUl.classList.add("catalog-ul_enabled")
    });
    
    document.querySelector('.header').addEventListener('mouseleave', function(){
        catalogUl.classList.remove("catalog-ul_enabled")
        

    });
    document.querySelector('.header').addEventListener('blur', function(){
        catalogUl.classList.remove("catalog-ul_enabled")
        
    });
}()

var about                       = document.querySelector(".button_showPopup")
var modal                       = document.querySelector(".writeUs")
var cross                       = document.querySelector(".writeUs_close")
var formName                    = document.querySelector(".writeUs__name")
var formEmail                   = document.querySelector(".writeUs__email")
var formMessage                 = document.querySelector(".form__textarea")
var meme                        = document.querySelector(".meme")
var submit                      = document.querySelector(".writeUs__form")
    console.log(formMessage.value)

   function showPopup(popupClass) {
       popupClass.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.toggle("writeUs_enable")
        if (popupClass != cross){formName.focus()}
        })
    }

    showPopup(about)
    showPopup(cross)

function formValidate (){
   return submit.addEventListener("submit", function(evt){
        evt.preventDefault();
        if (!formName.value || !formEmail.value || !formMessage.value){
            meme.classList.toggle("meme_on")
        setTimeout(() => {
            meme.classList.toggle("meme_on")
            
        }, 5000);
    }
    })
    
};
formValidate()
}
modalUs();
var carusel = () =>{
    var button = document.querySelectorAll(".slider__button")

    var 
        i = 0,
        btnCounter = button[i];
        console.log(".slider__button-" + (i+1))

    for(var i = 0,
        btnCounter = button[i];
        i < button.length && btnCounter.addEventListener("click", function(){return true}) == true; i++){
        elemCounter = sliderElement[i];
        console.log("hey")
        btnCounter.addEventListener("click", function(){
            console.log("click on " + i)})
            console.log(btnCounter)
            console.log(elemCounter);
            elemCounter.classList.toggle("slider__element_active")}


console.log(Boolean(document.querySelector(".slider__button-1").click))
}
carusel()