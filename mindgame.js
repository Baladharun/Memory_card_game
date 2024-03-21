const start = document.getElementById('strt');
let intervalId;
start.addEventListener('click',()=>{again(),caltime()})
const boxes = document.querySelectorAll(".image");

const all_images=["./doraemon.png","./dorami.png","./gyan.png","./kevin.png","./ben.png","./suneo.png","./nobita.png","./shizukka.png"];
function again()
{
    let values = [2,2,2,2,2,2,2,2];
boxes.forEach(box=>assign(box))
function assign(box)
{
    box.display = "none";
    let x;
    do {
        x = Math.floor(Math.random()*8);
    } while (values[x]==0);
    ;
    values[x]--;
    let txt = "<img class='cards' src='" + all_images[x] + "'>";
    box.innerHTML = txt;
}
}
let open = 0;
let cardsElement =" ";
boxes.forEach(box=>
    {
        box.addEventListener('click',()=>
        {
            if(open == 0)
            {
                cardsElement = box.querySelector('.cards');
                cardsElement.style.display = "flex";
                open++;
            }
            else if(open == 1)
            {
                const cardElement = box.querySelector('.cards');
                    cardElement.style.display = "flex";
                if(cardsElement.getAttribute('src')!=cardElement.getAttribute('src'))
                {
                    setTimeout(()=>{
                        cardElement.style.display = "none";
                        cardsElement.style.display="none";
                    },500);
                }
                open = 0;
            }
        })
    })
function caltime()
{
    const secs = document.getElementById("secs");
    const min = document.getElementById("mins");
    min.innerHTML="00:";
  secs.innerHTML = "30";
setInterval(()=>
{

    if(secs.innerHTML == "0")
    {
        min.innerHTML = " ";
        secs.innerHTML = "TIMES UP";
        again();
      clearInterval(intervalId);
        return;
    }
    else if(isNaN(secs.innerHTML))
    {
        secs.innerHTML = "TIMES UP";
      clearInterval(intervalId);
    }
    else
    {
      clearInterval(intervalId);
        secs.innerHTML=secs.innerHTML-1;
    }
    
},1000)
}
