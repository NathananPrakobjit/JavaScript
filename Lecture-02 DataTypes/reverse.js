function reverseString(value) {
    let reverseString = "";

    value.split("").forEach((char) => {
        reverseString = char + reverseString;
    });

    return reverseString
}

console.log(reverseString("Reverse Me"));