const frm = document.querySelector(".sgform");
const btn = document.getElementById("sgbtn");
email = frm.querySelector(".mail"),
    eInput = email.querySelector("input"),
    password = frm.querySelector(".pass"),
    pInput = password.querySelector("input");
passwrd = frm.querySelector(".passwrd");
p1Input = passwrd.querySelector("input");



//to close forms while switching
const btn1 = document.getElementById("sign");

btn1.onclick = function () {
    document.getElementById('lgclose').click();
};




btn.onsubmit = (e) => {
    e.preventDefault(); //preventing from form submitting
    //if email and password is blank then add shake class in it else call specified function
    (eInput.value == "") ? email.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? password.classList.add("shake", "error"): checkPass();
    (p1Input.value == "") ? passwrd.classList.add("shake", "error"): checkPass();

    setTimeout(() => { //remove shake class after 500ms
        email.classList.remove("shake");
        password.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    } //calling checkEmail function on email input keyup
    pInput.onkeyup = () => {
        checkPass();
    } //calling checkPassword function on pass input keyup
    p1Input.onkeyup = () => {
        checkPass();
    } //calling checkPassword function on pass input keyup

    function checkEmail() { //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
            email.classList.add("error");
            email.classList.remove("valid");
            let errorTxt = email.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            email.classList.remove("error");
            email.classList.add("valid");
        }
    }

    function checkPass() { //checkPass function

        if (pInput.value == "") { //if pass is empty then add error and remove valid class
            password.classList.add("error");
            password.classList.remove("valid");
        } else { //if pass is empty then remove error and add valid class
            password.classList.remove("error");
            password.classList.add("valid");
        }

        if (p1Input.value == "") { //if pass is empty then add error and remove valid class
            passwrd.classList.add("error");
            passwrd.classList.remove("valid");
        } else { //if pass is empty then remove error and add valid class
            passwrd.classList.remove("error");
            passwrd.classList.add("valid");
        }
    }

    //if email and password doesn't contains error class that mean user filled details properly
    if (!email.classList.contains("error") && !password.classList.contains("error") && !passwrd.classList.contains("error")) {
        window.location.href = frm.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    }
}