
const transform = (string) => {
    const vowels = ["a", "e", "i", "o", "u", "y"]
    if (typeof (string) === "string") {
        string = string.toLowerCase();
        vowels.map((letter) => {
            if (string.includes(letter)) {
                string = string.replaceAll(letter, `${letter}p${letter}`)
            }
        })
    } else {
        return 'type a correct string pls'
    }

    return string;
};

console.log(transform("bOnjoUr"));