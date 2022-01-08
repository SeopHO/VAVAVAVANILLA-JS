const popup_container = document.querySelector(".popup-container");
const textInput = document.querySelector('.text-input');
const fixBtn = document.querySelector('.fix');
let user_name = document.querySelector(".username");

function getText(text)
{
    localStorage.setItem('name',JSON.stringify(text));
    popup_container.style.visibility = "hidden";
    update();
}

function update()
{
    if(JSON.parse(localStorage.getItem('name'))!=null)
    {
        popup_container.style.visibility = "hidden";
        user_name.innerText = JSON.parse(localStorage.getItem('name'));
    }
    else
    {
        popup_container.style.visibility = "visible";
    }
}

textInput.addEventListener("keyup",event=>{
    if(event.keyCode==13)
    {
        if(textInput.value != "")
        {
            getText(textInput.value);
        }
    }
})

fixBtn.addEventListener("click",function(){
    localStorage.setItem('name',JSON.stringify(null));
    update();
})

update();