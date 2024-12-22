const hexadecimalDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

const convertHexColorToNumber = (color: string) => {
    return hexadecimalDigits.indexOf(color[0]) * 16 + hexadecimalDigits.indexOf(color[1])
}

export const createTransparentColor = (color: string, ratio: number) => {
    let str = color;
    str = str.substring(1);
    const redPartColor = str.slice(0, 2)
    const greenPartColor = str.slice(2, 4)
    const bluePartColor = str.slice(4, 6)
    return `rgba(${convertHexColorToNumber(redPartColor)}, ${convertHexColorToNumber(greenPartColor)}, ${convertHexColorToNumber(bluePartColor)}, ${ratio})`
}