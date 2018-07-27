export function regExp(text) {
    const arr = text.match(/\d/g);
    let str = "";
    arr.forEach(item => str += item);
    return str;
}