export const convertToUppercase = (val: string) => {
    return val.toUpperCase();
}

export const convertToLowercase = (val: string) => {
    return val.toLowerCase();
}

export const removeDuplicate = (val: string) => {
    let newArr = []
    const splitView = val.split(" ");
    const uniqueVal: any = new Set(splitView);
    for (let i of uniqueVal) {
        newArr.push(i)
    }
    return newArr.join(" ");
}

export const removeSpace = (val: string) => {
    return val.replaceAll(" ", "");
}