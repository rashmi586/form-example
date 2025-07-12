const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const name=document.getElementById("name")
    const email=document.getElementById("email")
    const message=document.getElementById("message")

    if(!name.value){
        name.classList.add("is-invalid")
    }
    else{
        name.classList.remove("is-invalid")
    }
    if(!email.value|| !email.validity.valid){
        email.classList.add("is-invalid")
    }
    else{
        email.classList.remove("is-invalid")
    }
    if(!message.value){
        message.classList.add("is-invalid")
    }
    else{
        message.classList.remove("is-invalid")
    }
    
    if(name.value && email.value && email.validity.valid && message.value){
        console.log("Form Sumbitted")
    }
})
