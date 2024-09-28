const validateFunction = function validateFunction(){
    const submit = document.querySelector('form button[type="submit"]');
    submit.addEventListener('click', (event)=> {
        if(!form.checkValidity()){
            event.target.preventDefault();
            form.setCustomValidity('fill the inputs properly');
        }
    })
}