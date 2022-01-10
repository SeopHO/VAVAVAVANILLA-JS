const popup_area = document.querySelector(".popup-area");
const textInput = document.querySelector('.popup-text-input');
const fixBtn = document.querySelector('.profile-fix');
let user_name = document.querySelector(".profile-username");

const profile_ball = document.querySelector(".profile-ball");
const profileUrl_area = document.querySelector(".profileUrl-area");
const profileUrl_submit = document.querySelector(".profileUrl-submit");
let profileUrl = document.querySelector(".profileUrl-input");

let clickCheck = false;

profile_ball.addEventListener('click',function(){
    if(clickCheck)
        clickCheck=false;
    else
        clickCheck=true;
    updateUrl(clickCheck,localStorage.getItem('profileImageUrl'));

});
profileUrl_submit.addEventListener('click',function(){
    let url = profileUrl.value;
    if(url.indexOf("https://")!=-1)
    {
        getUrl(url);
    }
})

textInput.addEventListener("keyup",event=>{
    if(event.keyCode==13)
    {
        if(textInput.value != "")
        {
            getUsername(textInput.value);
        }
    }
})

fixBtn.addEventListener("click",function(){
    localStorage.setItem('name',JSON.stringify(null));
    updateUsername();
})


function getUsername(text)
{
    localStorage.setItem('name',JSON.stringify(text));
    popup_area.style.visibility = "hidden";
    updateUsername();
}
function updateUsername()
{
    if(JSON.parse(localStorage.getItem('name'))!=null)
    {
        popup_area.style.visibility = "hidden";
        user_name.innerText = JSON.parse(localStorage.getItem('name'));
    }
    else
    {
        popup_area.style.visibility = "visible";
    }
}
function getUrl(url)
{
    localStorage.setItem('profileImageUrl',url);
    clickCheck=false;
    updateUrl(clickCheck,localStorage.getItem('profileImageUrl'));
}
function updateUrl(click,url)
{
    if(click)
    {
        profileUrl_area.style.visibility="visible";
    }
    else
    {
        profileUrl_area.style.visibility="hidden";
    }

    if(url!=null)
    {
        profile_ball.style.background=`url(${url})center`;
        profile_ball.style.backgroundSize = "30px 30px";
    }

}

updateUrl(clickCheck,localStorage.getItem('profileImageUrl'));
updateUsername();
