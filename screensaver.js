var ssTimeOut;
var screenSaverX_video;
var screenSaverX;
var screenSaverConfig = {
    "backgroundColor": "rgba(0,0,0,0.8)",
    "videoOpacity": 0.5,
    "timeout": 30,
    "videos": []
}

function stop_screen_saver_X(){
  screenSaverX.style.display = "none";
  screenSaverX_video.style.display = "none";
  screenSaverX_video.innerHTML = '';
  run_screen_saver_x(screenSaverConfig);
}

window.addEventListener('load', function(){ 
  screenSaverX = document.createElement("div");
  screenSaverX.id = "screenSaverX";
  document.body.appendChild(screenSaverX);
  
  screenSaverX_video = document.createElement("div");
  screenSaverX_video.id = "screenSaverX_video";
  document.body.appendChild(screenSaverX_video);

  ["mousemove", "click", "keypress", "keydown"].forEach(function(e) {
    window.addEventListener(e, stop_screen_saver_X);
  });
});

function screen_saver_X(){
  const video_src_arr = screenSaverConfig["videos"];
  if (video_src_arr.length > 0){
    const random = Math.floor(Math.random() * video_src_arr.length);
    const video_src = video_src_arr[random];
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsinline = true;
    video.src = video_src;
    screenSaverX_video.appendChild(video);
    screenSaverX.style.display = "block";
    screenSaverX_video.style.display = "block";
    setTimeout(function(){
        screenSaverX.style.backgroundColor = screenSaverConfig["backgroundColor"];
        video.style.opacity = screenSaverConfig["videoOpacity"];
    }, 500);
  }
}

function run_screen_saver_x(conf){
  clearTimeout(ssTimeOut);
  screenSaverConfig = conf;
  ssTimeOut = setTimeout(screen_saver_X, parseInt(screenSaverConfig["timeout"]) * 1000);
}
