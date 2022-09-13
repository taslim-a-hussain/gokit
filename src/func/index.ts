export const cap = (str:string):string => {
    let newStr = str[0].toUpperCase();
    for (let index = 1; index < str.length; index++) {
        newStr += str[index];
    }
    return newStr;
};


export const ftrim = (str: string):string => {
    let newStr = str.trim();
    newStr = newStr.replace(/\s+/g, ' ');
    return newStr;
};


export const fcap = (str: string):string => {
    let newstr = str.split(' ');
    let process = [];
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i]) {
            process.push(newstr[i][0].toUpperCase() + newstr[i].substring(1));
        }
    }
    return process.join(' ');
};
