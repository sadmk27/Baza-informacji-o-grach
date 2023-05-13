const gamesList=[
{   
title: "The Witcher 3: Wild Hunt",
description: "opis gry",
developer: "CD Projekt Red",
publisher: "CD Projekt",
release_date: "2015-05-19",
image: "/img/wiedzmin.jfif"
},
{
title: "Grand Theft Auto V",
description: "opis gry",
developer: "Rockstar North",
publisher: "Rockstar Games",
release_date: "2013-09-17",
image: "/img/gtaV.jpg"
},
{
title: "Portal 2",
description: "opis gry",
developer: "Valve Corporation",
publisher: "Valve Corporation",
release_date: "2011-04-19",
image: "/img/gtaV.jpg"
},
{
title: "The Elder Scrolls V: Skyrim",
description: "opis gry",
developer: "Bethesda Game Studios",
publisher: "Bethesda Softworks",
release_date: "2011-11-11",
image: "/img/skyrim.jpg"
},
{
title: "Red Dead Redemption 2",
description: "opis gry",
developer: "Rockstar Studios",
publisher: "Rockstar Games",
release_date: "2018-10-26",
image: "/img/rdr2.jfif"
}
];



const contentWrapper = document.querySelector(".content-wrapper");

for(let i=0;i<gamesList.length;i++){
    contentWrapper.innerHTML+=`
    <div class="content">
        <h1 class="name" style="--i: 0">${gamesList[i].title}</h1>
        <div class="description" style="--i: 1">
            <p>${gamesList[i].description}</p>
        </div>
        <ul class="properties" style="--i: 1">
           <li>
               <span class="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
               <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
               </svg>
               </span>
               <span>Twórca: </span>
               <span>${gamesList[i].developer}</span>
           </li>
           <li>
               <span class="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rocket" viewBox="0 0 16 16">
               <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"/>
               <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z"/>
               <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z"/>
               </svg>
               </span>
               <span>Wydawca: </span>
               <span>${gamesList[i].publisher}</span>
           </li>
           <li>
               <span class="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
               <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
               </svg>
               </span>
               <span>Data wydania: </span>
               <span>${gamesList[i].release_date}</span>
           </li>
        </ul>
        <button style="--i:3">Więcej <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg> </button>
    </div>
    `;
}

const slide = document.querySelector(".slide-wrapper .slide");

for(let i=0;i<gamesList.length;i++){
    slide.innerHTML +=`
    <div class="item-wrapper">
        <div class="item">
            <img src="${gamesList[i].image}" alt="" />
        </div>
    </div>
    `
}

const backgrounds = document.querySelectorAll(".carousel-bg-wrapper");
const indicatorNumbers = document.querySelectorAll(".number");
const contents=document.querySelectorAll(".content");

const items = document.querySelectorAll(".slide .item-wrapper");
const prev = document.querySelector(".carousel-control .prev");
const next = document.querySelector(".carousel-control .next");

let currentIndex = 0;

const setActive = (index) =>{
    currentIndex = index;

    if(currentIndex==0){
        prev.disabled=true;
    }else prev.disabled=false;

    if(currentIndex==gamesList.length-1){
        next.disabled=true;
    }else next.disabled=false;


    indicatorNumbers.forEach((number) => {
        number.classList.remove("active");
    });
    indicatorNumbers[currentIndex].classList.add("active");

    contents.forEach((content) =>{
        content.classList.remove("active");
    });
    contents[currentIndex].classList.add("active");

    items.forEach((item) =>{
        item.classList.remove("active");
    });
    items[currentIndex].classList.add("active");
};

setActive(currentIndex);

prev.addEventListener("click", ()=> {
    currentIndex--;
    slide.style= `--i: ${currentIndex}`;
    setActive(currentIndex);
})
next.addEventListener("click", ()=> {
    currentIndex++;
    slide.style= `--i: ${currentIndex}`;
    setActive(currentIndex);
})