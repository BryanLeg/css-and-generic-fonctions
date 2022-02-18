
const transform = (string) => {
    const vowels = ["a", "e", "i", "o", "u", "y"]
    vowels.map((letter) => {
        if (string.includes(letter)) {
            string = string.replaceAll(letter, `${letter}p${letter}`)
        }
    })
    return string;
};

console.log(transform("bonjour"));