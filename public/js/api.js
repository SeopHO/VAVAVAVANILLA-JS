const app_content = document.querySelector(".content");
let appArr = [];
let cnt=0;

function makeApp()
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
    box.classList.add(`box${cnt}`);
    if(appArr.length>1)
    {
        app_content.style.width=`${(app_content.offsetWidth+80)}px`
    }

    app_content.appendChild(box);
}
console.log(appArr)
makeApp();
makeApp();
makeApp();