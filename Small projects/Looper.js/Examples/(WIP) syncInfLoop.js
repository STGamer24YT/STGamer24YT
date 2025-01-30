import * as looper from '../looper.js'

const titles = ['Good page', 'Fantastic example', 'R Tape loading error, 0:1', 'poke fun at nasty software']

document.addEventListener('DOMContentLoaded', () => {
    function bgChange() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        return
    }

    function titleChange() {
        let rand = Math.floor(Math.random() * titles.length)
        document.title = titles[rand]
        return
    }

    looper.infiniteLooper(bgChange, 1, titleChange, false)
})