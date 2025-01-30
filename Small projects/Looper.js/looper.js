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
 * @param {number} loops 
 * The amount of times the loop will iterate.
 * 
 * @param {function(number): any} code
 * The function to execute for each iteration.
 * It provides the current iteration value.
 * 
 * @throws {TypeError} if the code parameter is not a function.
 */
export function loop(loops, code) {
    if (typeof code != "function") {
        throw new TypeError("The code must be a function.");
    }
    for (let i = 1; i <= loops; i++) {
        code(i);
    }
    return "success";
}

/**
 * Does a synchronous infinite loop. Can be stopped by returning any (non-undefined) value.
 * 
 * @param {function(): any} code
 * The function to execute for each iteration.
 * It provides the current iteration value.
 * 
 * @param {function(): any} [extraCode]
 * An optional function to execute additional operations for each iteration.
 * 
 * @note I understand that passing 2 functions can get messy, but I wanted to provide this option.
 * 
 * @param {number} [delayBetweenCalls = 1]
 * The delay between each iteration in seconds.
 * 
 * @param {boolean} [applyDelayBetweenFunctions = false]
 * If true, the delay will be applied between the main and secondary functions.
 * 
 * @throws {TypeError} if the code parameter is not a function.
 * @throws {RangeError} if delayBetweenCalls is less than 1.
 */
export function infiniteLooper(code, delayBetweenCalls = 1, extraCode, applyDelayBetweenFunctions = false) {
    if (typeof code != "function") {
        throw new TypeError("The main code must be a function.");
    }
    if (extraCode !== undefined && typeof extraCode != "function") {
        throw new TypeError("The secondary code must be a function.");
    }
    if (delayBetweenCalls < 1) {
        throw new RangeError("The delay must be an integer larger than 0.");
    }
    let loops = 0;
    while (true) {
        let res = code(loops);
        if (res !== undefined) {
            break;
        }
        if (extraCode) {
            if (applyDelayBetweenFunctions) {wait(delayBetweenCalls)}
            extraCode(loops);
        }
        loops++;
        wait(delayBetweenCalls);
    }
}

/**
 * Does an asynchronous infinite loop. Can be stopped by returning any (non-undefined) value.
 * 
 * @param {function(): any} code
 * The function to execute for each iteration.
 * It provides the current iteration value.
 * Use .catch() to handle errors.
 * 
 * @param {number} [delayBetweenCalls = 1]
 * The delay between each iteration in seconds.
 * 
 * @throws {TypeError} if the code parameter is not a function.
 * @throws {RangeError} if the delay is less than 1.
 * 
 * Please note that this function doesn't support passing multiple fuctions as parameters.
 */
export async function infiniteLooperAsync(code, delayBetweenCalls = 1) {
    if (typeof code != "function") {
        throw new TypeError("The code must be a function.");
    }
    if (delayBetweenCalls < 1) {
        throw new RangeError("The delay must be an integer larger than 0.");
    }
    let loops = 0;
    while (true) {
        let res = code(loops);
        if (res !== undefined) {
            break;
        }
        loops++;
        await wait(delayBetweenCalls);
    }
}

