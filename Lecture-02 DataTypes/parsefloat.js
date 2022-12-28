function cirumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(cirumference("4.567abcdefgh"));
// expected output: 28.695307297889173

console.log(cirumference("abcdefgh"));
// expected output: 0