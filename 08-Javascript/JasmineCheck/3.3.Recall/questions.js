let selectElementsStartingWithA = (array) => {
    return array.filter(a => a.charAt(0)== "a");
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(a => a.charAt(0).match(/[aeyuio]+/));
}

let removeNullElements = (array) => {
    return array.filter(a => a != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(a => a !== null && a !== false );
}

let reverseWordsInArray = (array) => {
    return array.toString().split("").reverse().join("").split(",").reverse();
}

let everyPossiblePair = (array) => {
    return array.sort().map((item, index, arr)=>(arr.filter((item,indexFil)=>item[index]!=item[indexFil]))).reverse(); 
}

let allElementsExceptFirstThree = (array) => {
    return array.filter((a,index) => index > 2 );
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a,b)=> a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1));
}

let getFirstHalf = (string) => {
    return string.slice(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let i;
    let count = 0;
        for(i = 0 ; i < array.length; i++)
        {
            if (array[i] === array[i].split("").reverse().join(""))
            {
                count++;
            }
        }
    return count;
}

// return array.filter((elem)=>elem===elem.split('').reverse().join('')).length

let shortestWord = (array) => {
    return array.sort((a, b) => a.length - b.length)[0]; 
}

let longestWord = (array) => {
    return array.sort((a, b) => b.length - a.length)[0]; 
}

let sumNumbers = (array) => {
    return array.reduce((a,b)=>a+b);
}

let repeatElements = (array) => {
    return [...array, ...array];
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b)=>a+b)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let arr = [];
    let i;
    for (i = 0; i <= array.length;  i++)
    {
        if (array[i] <= 5)
            arr.push(array[i])
        else if (array[i] > 5)
            break;
    }
    return arr;
}

let convertArrayToObject = (array) => {
    let obj = {};
    let i;
    for (i = 0; i < array.length; i += 2)
            obj[array[i]] = array[i+1];
    return obj;
}

let getAllLetters = (array) => {
    return array.toString().split("").filter(a=>a!=",").filter((item, index, arr)=> arr.indexOf(item) == index).sort();
}

let swapKeysAndValues = (object) => {
    return Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })));
}

let sumKeysAndValues = (object) => {
    return Object.entries(object).flat(2).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString('en-GB');
}

let getDomainName = (string) => {
    return string.replace(/.*@/, "").replace(/\.[^/.]+$/, "");
}

let titleize = (string) => {
    let array = string.split(" ")
    let arr = [];
    let str;
    let i;
    for (i = 0; i < array.length; i++)
    {
        if (i === 0 || array[i].length > 3 || array[i -1].endsWith("."))
        {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
            arr.push(array[i]);
        }
        else
            arr.push(array[i]);
    }
    str = arr.join(" ");
    return str;
}

let checkForSpecialCharacters = (string) => {
    return string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ? true : false;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return  number == 0 ? 1 : number * factorial (number-1);
}

let findAnagrams = (string) => {
    let anagram = [string];
    for (let x = 0; x < anagram.length; x++) {
        const base = anagram[x].split('');
        for (let i = 0; i < base.length; i++) {
            let ana = base[i];
            for (let j = 0; j < base.length; j++) {
                if (i != j) ana += base[j];
            }
            anagram.push(ana);
            anagram.push(reverseWordsInArray([ana])[0]);
        }
        anagram = [...new Set(anagram)];
    }
    return anagram;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    let str = array.join().toLowerCase()
    let arr = [];
    let i = 0;
    for (i = 0; i <= str.length; i++)
    {
        if (str.charCodeAt(i) >= 96 && str.charCodeAt(i) <= 122)
        arr.push(str.charCodeAt(i) - 96);
    }
        return arr;
  }
