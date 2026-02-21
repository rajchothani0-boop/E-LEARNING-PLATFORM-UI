const data = {
html:{title:"HTML Introduction",video:"https://www.youtube.com/embed/UB1O30fR-EE"},
css:{title:"CSS Basics",video:"https://www.youtube.com/embed/yfoY53QXEnI"},
js:{title:"JavaScript Fundamentals",video:"https://www.youtube.com/embed/W6NZfCO5SIk"}
};

function openLesson(id){
localStorage.setItem("current",id);
location.href="player.html";
}

if(document.getElementById("frame")){
let id=localStorage.getItem("current");
document.getElementById("lessonTitle").innerText=data[id].title;
document.getElementById("frame").src=data[id].video;
}

function completeLesson(){
let done=JSON.parse(localStorage.getItem("done")||"[]");
let id=localStorage.getItem("current");
if(!done.includes(id)) done.push(id);
localStorage.setItem("done",JSON.stringify(done));
alert("Progress Saved");
}

function showProgress(){
let done=JSON.parse(localStorage.getItem("done")||"[]");
let percent=Math.floor(done.length/3*100);
document.getElementById("fill").style.width=percent+"%";
document.getElementById("value").innerText=percent+"% Completed";
}