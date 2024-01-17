const form = document.getElementById('contact-form');
const firstname = document.getElementById('firstname');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'Prenumele este obligatoriu');
    } else {
        setSuccess(firstname);
    }

    if(nameValue === '') {
      setError(name, 'Numele este obligatoriu');
    } else {
      setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email este obligatoriu');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Adresa de email este gresita. Incearca din nou');
    } else {
        setSuccess(email);
    }

    if(messageValue === '') {
      setError(message, 'Mesajul este obligatoriu');
    } else {
      setSuccess(message);
    }
    

};

document.querySelector("button2").addEventListener("submit", function() {
  alert("Mesaj trimis");
});




