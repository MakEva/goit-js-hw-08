import Player from '@vimeo/player';

const iFrame = document.querySelector("iframe");
const player = new Player(iFrame);

const LS = "videoplayer-current-time";
const currentTime = function (evt) {
    localStorage.setItem(LS, evt.seconds);
} 
console.log(currentTime);

player.on("timeupdate", currentTime)
// console.log(player);


// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


