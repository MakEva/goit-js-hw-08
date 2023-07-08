import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.querySelector("iframe");
const player = new Player(iFrame);

const LS = "videoplayer-current-time";
const currentTime = function (evt) {
    localStorage.setItem(LS, evt.seconds);
    console.log(evt.seconds);
} 

player.on("timeupdate", throttle(currentTime, 1000));
// console.log(player);

const lastTime = Number(localStorage.getItem(LS));

player.setCurrentTime(lastTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


