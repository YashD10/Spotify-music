let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.querySelectorAll(".songItem"));
let masterSongName = document.querySelector("#masterSongName");
// let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Song 1", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Song 2", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Song 3", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Song 4", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Song 5", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Song 6", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Song 7", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Song 8", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Song 9", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Song 10", filePath: "10.mp3", coverPath: "10.jpg"}
]

songItems.forEach((element, i) =>{
    console.log(element, i)
    element.querySelectorAll("img")[0].src = songs[i].coverPath;  
    element.querySelectorAll(".songName")[0].innerText = songs[i].songName; 
})



masterPlay.addEventListener("click",()=>{
    let songItemPlay = document.querySelectorAll(".songItemPlay");
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;        
        songItemPlay[songIndex].classList.remove("fa-play-circle");
        songItemPlay[songIndex].classList.add("fa-pause-circle");
        // songItemPlay.target.classList.remove("fa-play-circle");
        // songItemPlay.target.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
        songItemPlay[songIndex].classList.remove("fa-pause-circle");
        songItemPlay[songIndex].classList.add("fa-play-circle");
        // songItemPlay.target.classList.remove("fa-pause-circle");
        // songItemPlay.target.classList.add("fa-play-circle");
    }
})

audioElement.addEventListener("timeupdate", ()=>{
    // console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = () =>{
    Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
    
}
//correct
// Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
//     element.addEventListener("click",(e)=>{
//         let songIndex = parseInt(e.target.id);
//         makeAllPlays();
//         e.target.classList.remove("fa-play-circle");
//         e.target.classList.add("fa-pause-circle");
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.src = `${songIndex+1}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//     })
// })

Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        // let oldindex = songIndex;
        songIndex = parseInt(e.target.id);

        // console.log(oldindex);
        // console.log(songIndex);

        if(e.target.classList.contains("fa-play-circle")){
            makeAllPlays();
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.src = `${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
        }

        else {
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");

        }
        

    })
})

document.querySelector("#next").addEventListener("click",()=>{
    let songItemPlay = document.querySelectorAll(".songItemPlay");
    songItemPlay[songIndex].classList.remove("fa-pause-circle");
    songItemPlay[songIndex].classList.add("fa-play-circle");


    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    songItemPlay[songIndex].classList.remove("fa-play-circle");
    songItemPlay[songIndex].classList.add("fa-pause-circle");
    
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.querySelector("#previous").addEventListener("click",()=>{

    let songItemPlay = document.querySelectorAll(".songItemPlay");
    songItemPlay[songIndex].classList.remove("fa-pause-circle");
    songItemPlay[songIndex].classList.add("fa-play-circle");

    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }

    songItemPlay[songIndex].classList.remove("fa-play-circle");
    songItemPlay[songIndex].classList.add("fa-pause-circle");
    
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})



document.querySelectorAll(".songItemPlay").add