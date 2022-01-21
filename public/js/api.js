const main_screen = document.querySelector(".main-screen");
const bottom_area = document.querySelector(".bottom-Area");
const app_content = document.querySelector(".app-content");
const top_bar = document.querySelector(".top-bar");
let appArr = [];
let cnt=0;

function makeApp(title)
{
    const box = document.createElement("div");
    box.style.width="60px";
    box.style.height ="60px";
    box.style.backgroundColor="green";
    box.style.borderRadius="20px";
    box.style.marginLeft="5px";
    box.style.marginRight="5px";
    box.style.cursor="pointer";
    cnt++;
    appArr.push(`box${cnt}`);
    box.classList.add(`boxApp${cnt}`);
    box.classList.add(`${title}App`);
    box.innerHTML=`<p>${title}</p>`;
    if(appArr.length>1)
    {
        app_content.style.width=`${(app_content.offsetWidth+80)}px`
    }

    app_content.appendChild(box);
}
console.log(appArr)

export {makeApp,main_screen,bottom_area,top_bar};