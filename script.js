const messageEl = document.getElementById("message");
const startBtn = document.getElementById("start");

const message = `My love, today marks two beautiful years together.
Two years filled with laughter, hugs, dreams, and unforgettable moments.
Every second with you is a treasure. Every smile of yours lights up my world.
I love you more than words can ever say. You are my heart, my life, my everything.
Forever and always, happy 2 years ❤️`;

startBtn.addEventListener("click",()=>{
    startBtn.style.display="none";
    showMessage(message, messageEl, 0);
    createHearts(50);
});

// Function to display message letter by letter
function showMessage(text, element, index){
    if(index < text.length){
        element.style.opacity=1;
        element.innerHTML += text.charAt(index);
        setTimeout(()=>showMessage(text,element,index+1),50);
    }
}

// Function to create floating hearts
function createHearts(num){
    for(let i=0;i<num;i++){
        let heart = document.createElement("div");
        heart.className="heart";
        heart.style.left=Math.random()*100+"%";
        heart.style.animationDuration=(5 + Math.random()*5)+"s";
        heart.style.fontSize=(10+Math.random()*20)+"px";
        document.body.appendChild(heart);
    }
}