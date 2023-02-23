document.querySelector('#nav_expand').addEventListener('change', (e) => {
    if (document.querySelector('#nav_expand').checked == true) {
        document.querySelector('header nav').style.display = "flex"
    } else {
        document.querySelector('header nav').style.display = "none"
    }
})

const nameTag = document.querySelector('header h2')

nameTag.addEventListener('click', () => {
    window.location.href = "index.html"
})

nameTag.addEventListener('mouseover', () => {
    document.querySelector('header h2').innerText = "der Bahnbabo";
    if (!playing) {
        toggleSong()
        playingBecauseOfHover = true;
    }
})

nameTag.addEventListener('mouseout', () => {
    document.querySelector('header h2').innerText = "Peter Wirth";
    if (playing && playingBecauseOfHover) {
        toggleSong()
        playingBecauseOfHover = false;
    }
})

let playing = false;
let playingBecauseOfHover = false;
function toggleSong() {
    if (!playing) {
        document.querySelector('audio').play()
        document.querySelector('#title_img').style.outlineColor = "#34b1eb";
        document.querySelector('#title_img').style.outlineWidth = "10px";
        document.querySelector('#title_img').style.outlineOffset = "10px";
        document.querySelector('#title_img').style.outlineStyle = "dashed";
        document.querySelector('#title_audio').innerText = "anhalten"
        playing = true
        console.debug('playing')
    } else {
        document.querySelector('audio').pause()
        document.querySelector('#title_img').style.outlineWidth = "4px";
        document.querySelector('#title_img').style.outlineColor = "#fff";
        document.querySelector('#title_img').style.outlineStyle = "solid";
        document.querySelector('#title_img').style.outlineOffset = "0px";
        document.querySelector('#title_audio').innerText = "abspielen"
        playing = false
        console.debug('stoped')
    }
}