// Description: This file is used to test the range.js file.
import * as looper from "../looper.js";

document.addEventListener("DOMContentLoaded", () => {
    looper.loop(20, (bee) => {
        console.log("Buzz!");
        if (bee == 20) {
            let rand = Math.floor(Math.random() * 5) + 1;
            switch (rand) {
                case 1:
                    document.write("Buzz 🐝")
                    break;
                case 2:
                    document.write("Buzz? 🐝")
                    break;
                case 3:
                    document.write("Buzz!! 🐝")
                    break;
                case 4:
                    document.write("Buzz... 🐝")
                    break;
                case 5:
                    document.write("Buzz Buzz Buzz 🐝")
                    break;
                default:
                    document.write("🐝")
            }
        }
    })
})
