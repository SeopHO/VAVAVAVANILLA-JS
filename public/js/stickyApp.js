import { makeApp,main_screen } from "./api.js";

makeApp('sticky');

const sticky_app = document.querySelector('.stickyApp');

sticky_app.addEventListener('click',()=>createSticky());

let cnt=0;

function randomPos()
{
    let calcX= main_screen.clientWidth-250;
    let calcY= main_screen.clientHeight-300;
    let x = Math.floor(Math.random() * calcX);
    let y = Math.floor(Math.random() * calcY);
    console.log(x,y);
    return [x,y];
}
function setPos(element,pos)
{
    element.style.left = pos[0]+'px';
    element.style.top = pos[1]+'px';   
}
function createSticky()
{
    const sticky_obj = document.createElement("div");
    let objname;
    let removeTarget;
    sticky_obj.id=`sticky-obj`;
    sticky_obj.classList.add(`obj-${++cnt}`);
     
    sticky_obj.insertAdjacentHTML('afterbegin',
    `<div class="sticky-bar-area"><div class="sticky-title sticky-title${cnt}"></div><div class="sticky-xbox"><i class="fas fa-times del${cnt}"></i></div></div><div class="sticky-content-box"><textarea></textarea></div>`);
    
    main_screen.appendChild(sticky_obj);
    setPos(sticky_obj,randomPos());
    
    const sticky_obj_del = document.querySelectorAll(`.fa-times`);
    // const sticky_obj_bar = document.querySelector(`.sticky-title${cnt}`);
    
    for(let i=0;i<sticky_obj_del.length;i++)
    {
        sticky_obj_del[i].addEventListener('click',function(){
            let str = sticky_obj_del[i].closest("#sticky-obj");
            objname=str.className;
            removeTarget = document.querySelector(`.${objname}`);
            deleteSticky(removeTarget);
            cnt--;
            console.log(cnt);
        })
    }
}   
function deleteSticky(target)
{
    main_screen.removeChild(target);
}
