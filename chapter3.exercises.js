const hexToDecimal = (str) => {
    return parseInt(str, 16);
};

const toStr = (arr, start, end) => {
    return arr.slice(start, end).join('')
};

const getRgb = (color) => {
    if (!color) {
        return null;
    }
    const colorArr = color.split('').slice(1);
    return `rgb(${hexToDecimal(toStr(colorArr, 0, 2))}, ${hexToDecimal(toStr(colorArr, 2, 4))}, ${hexToDecimal(toStr(colorArr, 4, 5))})`;
};

console.log(getRgb('#00FF00'));