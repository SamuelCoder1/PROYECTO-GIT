import { URL_USERS } from "./route.js";
import { post } from "./userServices.js";


const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    register(window.location.href ="../index.html");

})

function register(){
    const name =  inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    post(URL_USERS, {
        "name": name,
        "email": email,
        "password": password,
        "role": "visitor"
    })
}