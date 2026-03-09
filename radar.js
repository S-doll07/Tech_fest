const radarCanvas=document.createElement("canvas");
const radarCtx=radarCanvas.getContext("2d");

radarCanvas.width=300;
radarCanvas.height=300;

radarCanvas.style.position="fixed";
radarCanvas.style.bottom="20px";
radarCanvas.style.right="20px";
radarCanvas.style.border="2px solid #00ffcc";
radarCanvas.style.background="#000";

document.body.appendChild(radarCanvas);

let angle=0;

function drawRadar(){

radarCtx.clearRect(0,0,300,300);

const cx=150;
const cy=150;
const radius=120;

radarCtx.strokeStyle="#00ffcc";

for(let r=40;r<=radius;r+=40){

radarCtx.beginPath();
radarCtx.arc(cx,cy,r,0,Math.PI*2);
radarCtx.stroke();

}

radarCtx.beginPath();
radarCtx.moveTo(cx,cy);

radarCtx.lineTo(
cx+radius*Math.cos(angle),
cy+radius*Math.sin(angle)
);

radarCtx.stroke();

for(let i=0;i<5;i++){

const x=Math.random()*300;
const y=Math.random()*300;

radarCtx.fillStyle="red";

radarCtx.beginPath();
radarCtx.arc(x,y,3,0,Math.PI*2);
radarCtx.fill();

}

angle+=.05;

}

setInterval(drawRadar,50);