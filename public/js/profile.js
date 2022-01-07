import {main_screen} from './bg.js';

let username = document.querySelector(".username");

const popup_container = document.createElement("div");
popup_container.classList.add("popup-container");

const popup_box = document.createElement("div");
popup_box.classList.add("popup-box");

const popup_title = document.createElement("div");
popup_title.classList.add("popup-title");
popup_title.innerHTML = "<p>WHO ARE YOU</p>"

const popup_textinput = document.createElement("div");
popup_textinput.classList.add("popup-textinput");

const input = document.createElement("input");
input.type = 'text';
input.minLength=4;
input.maxLength=8;
input.classList.add("text-input");

popup_textinput.appendChild(input)

popup_box.appendChild(popup_title);
popup_box.appendChild(popup_textinput);

popup_container.appendChild(popup_box);

main_screen.appendChild(popup_container);

main_screen.insertBefore(popup_container,main_screen.firstChild);

const textInput = document.querySelector('.text-input');

textInput.addEventListener("keyup",event=>{
    if(event.keyCode==13)
    {
        if(textInput.value != "")
        {
            getText(textInput.value);
        }
    }
})

function getText(text)
{
    localStorage.setItem('name',JSON.stringify(text));
    popup_container.style.visibility = "hidden";
    update();
}
function update()
{
    username.innerText = JSON.parse(localStorage.getItem('name'));
}

window.addEventListener('DOMContentLoaded',function(){
    if(JSON.parse(localStorage.getItem('name'))!=null)
    {
        popup_container.style.visibility = "hidden";
    }
    else
    {
        popup_container.style.visibility = "visible";
    }
});

update();