// ============================================================
// String compression and max character frequency
// ============================================================

const stringCompression = {
    title: "String compression and max character frequency",

    args: [
        "abacbdefcabsbdftttttt"
    ],
    fn: function stringCompressionReduce(str) {
        const arr = [...str];
        const cmprs_obj = arr.reduce((acc, curr) => {

            if (Object.hasOwn(acc, curr)) {
                acc[curr] += 1;
            } else {
                acc[curr] = 1;
            }

            return acc;

        }, {});

        let cmprs_str = "";

        Object.entries(cmprs_obj).forEach(([k, v]) => {
            cmprs_str += k + v;
        });

        const max_char_frqncy =
            Object.entries(cmprs_obj)
                .sort((a, b) => b[1] - a[1]);

        const [maxKey, maxValue] =
            max_char_frqncy[0];

        return {
            cmprs_str,
            freq: {
                [maxKey]: maxValue
            }
        };
    }
};

// ============================================================
// check if an array is sorted without built-in methods
// ============================================================

const checkSortedArr = {
    title: "Check if an array is sorted without built-in methods",
    args: [
        [10, 20, 50, 40, 60]
    ],
    fn: function checkSortedArr(str) {
        let sorted = true;
        for (let i = 1; i < str.length; i++) {
            // console.log(str[i])
            if (str[i - 1] > str[i]) {
                sorted = false;
                break
            }
        }
        return {
            sorted: sorted
        };
    }
};

// ============================================================
// Get Max value for a object'key 
// ============================================================

const objMaxKeyVal = {
    title: "Get Max value for a object'key",
    args: [
        { a: 3, b: 4, c: 102, d: 2, e: 1, f: 2, i: 12, k: 55, s: 1, t: 6 }
    ],
    fn: function objMaxKeyVal(obj) {
        let maxkey = "", maxval = -Infinity;
        for (let ob in obj) {
            // console.log(ob, '=>', obj[ob], maxkey, maxval)
            if (obj[ob] > maxval) {
                maxkey = ob
                maxval = obj[ob]
            }
        }
        return { maxkey, maxval }
    }
};

// ============================================================
// Valid Anagram group
// ============================================================

const groupAnagrams = {
    title: "Valid Anagram group with foreach and .reduce() methods",
    args: [
        ['rat', 'tar', 'art', 'car', 'arc', 'acr', 'add', 'dad', 'daa', 'ada', 'adc', 'cad', 'xyz']
    ],
    fn: function groupAnagrams(arr) {
        const grouped = {};
        arr.forEach(word => {
            const key = word.split("").sort().join("");
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(word);
        });

        const grouped1 = arr.reduce((acc, word) => {
            const key = word.split("").sort().join("");
            if (!acc[key]) acc[key] = []
            acc[key].push(word)
            return acc
        }, {});

        const foreachMethod = Object.values(grouped);
        const reduceMethod = Object.values(grouped1);
        return { foreachMethod, reduceMethod }
    }
};

// ============================================================
// Group array items by property using reduce()
// ============================================================

const groupArrByValues = {
    title: "Group array items by property using reduce() 💡",
    args: [
        [
            { name: 'Alice', role: 'admin' },
            { name: 'Bob', role: 'user' },
            { name: 'Charlie', role: 'admin' },
            { name: 'Dave', role: 'user' },
            { name: 'Eve', role: 'guest' },
        ]

    ],
    fn: function groupArrByValues(arr) {
        const loopMethod = {}
        for (let i = 0; i < arr.length; i++) {
            const key = arr[i].role
            const xx = loopMethod.hasOwnProperty(key)
            if (!xx) {
                loopMethod[key] = [arr[i]]
            }
            else {
                loopMethod[key] = [...loopMethod[key], arr[i]]
            }
        }

        const reduceMethod = arr.reduce((acc, item) => {
            const key = item.role
            if (!acc[key]) {
                acc[key] = [item.name]
            }
            else {
                acc[key] = [...acc[key], item.name]
            }

            // or if else block's alternate
            // (acc[item.role] ??= []).push(item.name);

            return acc
        }, {})

        // console.log(JSON.stringify(reduceMethod, null, 2))
        return { loopMethod, reduceMethod }
    }
};

// ============================================================
// Find Factorial in JavaScript using a simple loop method 💻
// ============================================================

const getFactorial = {
    title: "Find Factorial in JavaScript using a simple loop method 💻",
    args: [ 8 ],
    fn: function getFactorial(num) {
        let factorial=1;
        for(let i = 1; i <= num; i++) {
            factorial *=i
        }
        return factorial
    }
};

// ============================================================
// Capitalize First Letter in JavaScript
// ============================================================

const capitalizeFirstLetter = {
    title: "Capitalize the first letter of a string in JavaScript using charAt(), toUpperCase(), and slice(). A simple but important string manipulation",
    args: [ "counterrevolutionaries" ],
    fn: function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase()+str.slice(1)
    }
};

// ============================================================
// Get elements count frequency in an Array
// ============================================================

const getArrElmCount = {
    title: "Get elements count frequency in an Array",
    args: [["apple", "banana", "orange", "mango", "banana", "orange", "mango", "apple", "banana", "orange"] ],
    fn: function getArrElmCount(arr) {
        const elmCountLoopMethod = {}
        for (let i = 0; i < arr.length; i++) { 
            const key= arr[i]
            if (!elmCountLoopMethod.hasOwnProperty(key)) {
                elmCountLoopMethod[key] = 1
            }
            else { 
                elmCountLoopMethod[key]++
            }
        }
        const elmCountReduceMethod = arr.reduce((acc, el) => {
            // if (!acc.hasOwnProperty(el)) {
            //     acc[el] = 1
            // }
            // else {
            //     acc[el]++
            // }
            
            // OR

            acc[el] = (acc[el] ?? 0) + 1;
            return acc
         }, {})
        return {elmCountLoopMethod, elmCountReduceMethod}
    }
};

// ============================================================
// Array rotation
// ============================================================

const arrayRotation = {
    title: "Array rotation",
    args: [ [1,2,3,4,5,6,7,8,9 ], 4 ],
    fn: function arrayRotation(arr, k) {
        // arr= 1,2,3,4,5,6,7,8,9 ];
        // rotatefrom = 4
        return {
            firstPart: arr.slice(0,k),
            secondPart: arr.slice(k),
            rotate: arr.slice(k).concat(arr.slice(0, k))
        }
    }
};

export {
    stringCompression,
    checkSortedArr,
    objMaxKeyVal,
    groupAnagrams,
    groupArrByValues,
    getFactorial,
    capitalizeFirstLetter,
    getArrElmCount,
    arrayRotation
}