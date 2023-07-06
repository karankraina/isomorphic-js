// Declaration for the browser window object
declare const window: {
    btoa(input: string): string;
    atob(input: string): string;
};

/**
 * Encodes a string in base64 format.
 * @param input The string to be encoded.
 * @returns The base64 encoded string.
 */
export function btoa(input: string): string {
    // Check if running in a browser environment and window.btoa is available
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
        // Use browser's built-in btoa function
        return window.btoa(input);
    } else if (typeof global !== 'undefined' && typeof global.btoa === 'function') {
        // Use global object's btoa function (Node.js)
        return global.btoa(input);
    } else {
        // Use Node.js Buffer class for base64 encoding
        const buffer = Buffer.from(input, 'binary');
        return buffer.toString('base64');
    }
}

/**
 * Decodes a base64 encoded string.
 * @param input The base64 encoded string to be decoded.
 * @returns The decoded string.
 */
export function atob(input: string): string {
    // Check if running in a browser environment and window.atob is available
    if (typeof window !== 'undefined' && typeof window.atob === 'function') {
        // Use browser's built-in atob function
        return window.atob(input);
    } else if (typeof global !== 'undefined' && typeof global.atob === 'function') {
        // Use global object's atob function (Node.js)
        return global.atob(input);
    } else {
        // Use Node.js Buffer class for base64 decoding
        const buffer = Buffer.from(input, 'base64');
        return buffer.toString('binary');
    }
}
