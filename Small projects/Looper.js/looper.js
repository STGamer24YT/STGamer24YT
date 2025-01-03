// Description: This module provides functions for looping in Js with ease.

/**
 * Pauses execution for a specified amount of time.
 * @param {number} DelayInSeconds - The number of seconds to wait.
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 */
function wait(DelayInSeconds) {
    return new Promise(resolve => setTimeout(resolve, (DelayInSeconds * 1000)));
}

/**
 * Does a for loop.
 * 
 * @param {number} start 
 * The starting value of the loop.
 * 
 * @param {number} end
 * The ending value of the loop.
 * 
 * @param {function(number): any} code
 * The function to execute for each iteration.
 * It provides the current iteration value.
 * 
 * @throws {TypeError} if the code parameter is not a function.
 */
export function loop(start, end, code) {
    if (typeof code != "function") {
        throw new TypeError("The code must be a function.");
    }
    for (let i = start; i <= end; i++) {
        code(i);
    }
    return "success";
}

/**
 * Does an asynchronous infinite loop. Can be stopped by returning any value.
 * 
 * @param {function(): number} code
 * The function to execute for each iteration.
 * It provides the current iteration value.
 * Use .catch() to handle errors.
 * 
 * @param {number} [delayBetweenCalls = 1]
 * The delay between each iteration in seconds.
 * 
 * @throws {TypeError} if the code parameter is not a function.
 */
export async function infiniteLoopAsync(code, delayBetweenCalls = 1) {
    if (typeof code != "function") {
        throw new TypeError("The code must be a function.");
    }
    if (delayBetweenCalls < 1) {
        throw new RangeError("The delay must be an integer larger than 0.");
    }
    let loops = 0;
    while (true) {
        await wait(delayBetweenCalls);
        let res = code(loops);
        if (res !== undefined) {
            break;
        }
        loops++;
    }
}
