import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// console.clear()

function checkPalindrom(str) {
    const palinrevstr = str.split('').reverse().join('');
    return str === palinrevstr;
};
const palinstr = "naman";
const checkpalindrom = checkPalindrom(palinstr);
console.log(`Palindrome Check "${palinstr}" => `, JSON.stringify(checkpalindrom))
console.log('===========================================')

function reverseString(str) {
    // const revstr = str.split('').reverse().join('')
    const xx = []
    let len = str.length
    for (let i = 0; i < str.length; i++) {
        // xx.unshift(str[i])
        xx[len - 1] = str[i];
        len = len - 1
    }
    return xx.toString('').replaceAll(",", "")
}
const revstr = 'counterrevolutionaries'
const reversestring = reverseString(revstr);
console.log(`Reverse String: no array utility methods "${revstr}" => `, JSON.stringify(reversestring))
console.log('===========================================')

function checkSumTarget(arr, target) {
    let xxx = []
    for (let i = 0; i < arr.length; i++) {
        const flatarr = xxx.flat(2)
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && !flatarr.includes(i)) {
                xxx.push([i, j])
            }
        }
    }
    return xxx
}
const list = [10, 20, 30, 40, 45, 60, 75, 80, 88]
const trgt = 100
const checksumtarget = checkSumTarget(list, trgt);
console.log(`Array - Index of two numbers sum has a target value "${trgt}" from an array "[${list}]" => `, JSON.stringify(checksumtarget))
console.log('===========================================')

function checkPrime(d) {
    if (d <= 1) {
        return false;
    }
    if (d === 2) {
        return true;
    }
    if (d % 2 === 0) {
        return false;
    }
    const sqrd = Math.sqrt(d);
    for (let i = 3; i <= sqrd; i += 2) {
        if (d % i === 0) {
            return false;
        }
    }
    return true;
}
const prime = 1511
const checkprime = checkPrime(prime);
console.log(`Check Prime Number "${prime}" => `, JSON.stringify(checkprime))
console.log('===========================================')

function getFactorials(d) {
    if (d < 0) return "Factorial not defined for negative numbers";
    let total = 1;
    for (let i = 1; i <= d; i++) {
        total = total * i
    }
    return total;
}
const fact = 5
const getfactorials = getFactorials(fact);
console.log(`Factorial of Number "${fact}" => `, JSON.stringify(getfactorials))
console.log('===========================================')

function getFabonacci(d, c) {
    const arr = [d[0], d[1]];
    for (let i = 0; i < c - 2; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    return arr;
}
const fabnums = [0, 1]
const fabcount = 10
const getfabonacci = getFabonacci(fabnums, fabcount);
console.log(`Fibonacci Series given 2 numbers/digits [${fabnums}] array and loop count ${fabcount} times => `, JSON.stringify(getfabonacci))
console.log('===========================================')

function getFabonacciSD(d, c) {
    const arr = [0, d];
    console.log(arr)
    for (let i = 0; i < c - 1; i++) {
        arr.push(arr[i] + arr[i + 1])
    }

    return arr;
}
const fabnum_sd = 50
const fabcount_sd = 12
const getfabonacci_sd = getFabonacciSD(fabnum_sd, fabcount_sd);
console.log(`Fibonacci Series given only single number/digit ${fabnum_sd} and loop count ${fabcount_sd} time => `, JSON.stringify(getfabonacci_sd))
console.log('===========================================')

// Contains Duplicate
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
const duplicatenums = [1, 2, 3, 1]
const containsDuplicatefn = containsDuplicate(duplicatenums);
console.log('containsDuplicatefn ==> ', containsDuplicatefn)
console.log('===========================================')

// Valid Anagram\
function isAnagram(s, t) {
    function fn(str) {
        return str.split('').sort().join('')
    }
    return fn(s) === fn(t)
}
const s = "arc", t = "car";
const isAnagramfn = isAnagram(s, t);
console.log('isAnagram ==> ', isAnagramfn)
console.log('===========================================')

// Maximum Subarray
function maxSubArray(nums) {
    let maxSum = nums[0], currentSum = 0;
    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
const arrnums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxsubarr = maxSubArray(arrnums);
console.log('Maximum Subarray ==> ', maxsubarr)
console.log('===========================================')

// Maximum Subarray with array elems
function maxSubArrayElems(nums) {
    let maxSum = nums[0];
    let currentSum = 0;
    let start = 0, end = 0, tempStart = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i]
            tempStart = i
        } else {
            currentSum += nums[i]
        }
        if (currentSum > maxSum) {
            maxSum = currentSum
            start = tempStart
            end = i
        }
    }
    return {
        sum: maxSum,
        subarray: nums.slice(start, end + 1)
    };
}
const arrnumaxSubArrayElems_arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxSubArrayElems_fn = maxSubArrayElems(arrnumaxSubArrayElems_arr);
console.log('Maximum Subarray Elements==> ', maxSubArrayElems_fn)
console.log('===========================================')

function checkSumTargets(arr, target) {
    const xxx = []
    for (let i = 0; i < arr.length; i++) {
        const flatarr = xxx.flat(2)
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && !flatarr.includes(i) && !(arr[i] === arr[j])) {
                xxx.push([i, j])
            }
        }
    }
    return xxx
}
const lists = [10, 20, 30, 40, 45, 60, 75, 80, 88]
const target = 140
const checksumtargets = checkSumTargets(lists, target);
console.log(`Array - Index of two numbers sum has a target value "${target}" from an array "[${lists}]" => `, JSON.stringify(checksumtargets))
console.log('===========================================')

// Find largest element in array
function getLargestArrElm(arr) {
    // array utility Math.max method
    // return Math.max(...arr)

    // array utility .sort() method
    // return arr.sort((a, b) =>  b-a)[0]

    // reduce method
    // return arr.reduce((m, c) => {
    //     return m > c ? m : c
    //  },arr[0])

    // core js loop method
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
const largest_arr = [152, 20, 130, -400, 445, 605, -705, 180, 88]
const getLargestArrElm_fn = getLargestArrElm(largest_arr);
console.log(`Find largest element in array ==>  "[${largest_arr}]" => `, JSON.stringify(getLargestArrElm_fn))
console.log('===========================================')

// Find largest element in array
function getSecondLargestArrElm(arr) {
    // array utility .sort() method
    // return arr.sort((a, b) =>  b-a)[1]

    let max = arr[0], sec_max = max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sec_max = max
            max = arr[i]
        }
    }
    return { max, sec_max }

}
const second_largest_arr = [500, 208, 330, 400, 445, 605, 705, 180, 188]
const getSecondLargestArrElm_fn = getSecondLargestArrElm(second_largest_arr);
console.log(`Find Second largest element in array ==>  "[${second_largest_arr}]" => `, JSON.stringify(getSecondLargestArrElm_fn))
console.log('===========================================')

// Remove Duplicate Elements
function removeDuplicateElm(arr) {
    const new_arr = []

    // 1: find with .indexOf()
    // for (let i = 0; i < arr.length; i++) {
    //     const elmexist = new_arr.indexOf(arr[i])
    //     if (elmexist === -1) {
    //         new_arr.push(arr[i])
    //     }
    // }

    // 2: with .includes()
    // for (let i = 0; i < arr.length; i++) {
    //     const elmexist = new_arr.includes(arr[i])
    //     if (!elmexist) {
    //         new_arr.push(arr[i])
    //     }
    // }

    // 3: using .filter()
    // return arr.filter((a, b) => {
    //     return arr.indexOf(a) === b
    // })

    // 4: using .reduce()
    return arr.reduce((unq, el) => {
        return unq.includes(el) ? unq : [...unq, el]
    }, [])

    // return new_arr
}
const duplicateElms_arr = [50, 108, 300, 400, 50, 605, 400, 180, 188]
const removeDuplicateElm_fn = removeDuplicateElm(duplicateElms_arr);
console.log(`Remove Duplicate Elements from an array "[${duplicateElms_arr}]" => `, JSON.stringify(removeDuplicateElm_fn))
console.log('===========================================')

// String compression 
function stringCompression(str) {
    const arr = [...str];
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1
        }
    }
    // using  for ... in loop
    let cmprs_str = '', cmprs_str1 = '';
    for (let ob in obj) {
        cmprs_str += ob + obj[ob]
    }

    // using  Object.entries and forEach method
    Object.entries(obj).forEach(([k, v]) => {
        cmprs_str1 += v + k
    })
    return { cmprs_str, cmprs_str1 }
}
const string_compression = 'abacbdefcabdf'
const stringCompression_fn = stringCompression(string_compression);
console.log(`String compression ==>  "[${string_compression}]" => `, JSON.stringify(stringCompression_fn))
console.log('===========================================')

// String compression and max charector frequency
function stringCompressionReduce(str) {
    const arr = [...str];
    const cmprs_obj = arr.reduce((acc, curr) => {
        if (Object.hasOwn(acc, curr)) {
            acc[curr] += 1
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    let cmprs_str = '';
    Object.entries(cmprs_obj).forEach(([k, v]) => {
        cmprs_str += k + v
    })
    const max_char_frqncy = Object.entries(cmprs_obj).sort((a, b) => b[1] - a[1])
    const [maxKey, maxValue] = max_char_frqncy[0];
    const result = { [maxKey]: maxValue };
    return { cmprs_str, freq: result }
}
const string_compression_reduce = 'abacbdefcabsbdftttttt'
const stringCompressionReduce_fn = stringCompressionReduce(string_compression_reduce);
console.log(`String compression and max character frequency ==>  "[${string_compression_reduce}]" => `, JSON.stringify(stringCompressionReduce_fn))
console.log('===========================================')

// Get Max value for a object'key 
function objMaxKeyVal(obj, x_largest) {
    const xx = Object.entries(obj).sort((a, b) => {
        return b[1] - a[1]
    })[x_largest]
    return { [xx[0]]: xx[1] }
}
const maxkeval_obj = { a: 3, b: 4, c: 2, d: 2, e: 1, f: 2, s: 1, t: 6 };
const x_largest = 0 //2st largst
const objMaxKeyVal_fn = objMaxKeyVal(maxkeval_obj, x_largest);
console.log(`Max value of an object's key  ==>  "[${JSON.stringify(maxkeval_obj)}]" => `, JSON.stringify(objMaxKeyVal_fn))
console.log('===========================================')

// Get Max value for a object'key with for loop
function objMaxKeyVal_forLoop(obj) {
    let maxKey = "";
    let maxVal = -Infinity;
    for (let ob in obj) {
        if (Object.hasOwn(obj, ob)) {
            if (obj[ob] > maxVal) {
                maxVal = obj[ob];
                maxKey = ob;
            }
        }
    }
    return { maxKey, maxVal }

}
const maxkeval_obj_loop = { a: 3, b: 4, t: 6, c: 2, d: 2, e: 1, f: 2, s: 1, };
const objMaxKeyVal_loop_fn = objMaxKeyVal_forLoop(maxkeval_obj_loop);
console.log(`Get Max value for a object'key with for loop  ==>  "[${JSON.stringify(maxkeval_obj_loop)}]" => `, JSON.stringify(objMaxKeyVal_loop_fn))
console.log('===========================================')

// Get Max value for a object'key with .reduce() method
function objMaxKeyVal_reduce(obj) {
    return Object.entries(obj).reduce((max, curr) => {
        return max[1] > curr[1] ? max : curr;
    })
}
const maxkeval_obj_reduce = { a: 3, b: 4, t: 16, c: 20, d: 22, e: 111, f: 2, s: 1, };
const objMaxKeyVal_reduce_fn = objMaxKeyVal_reduce(maxkeval_obj_reduce);
console.log(`Get Max value for a object'key with .reduce() method  ==>  "[${JSON.stringify(maxkeval_obj_reduce)}]" => `, JSON.stringify(objMaxKeyVal_reduce_fn))
console.log('===========================================')


// Uniion of arrays/object
const arr3 = [1, 'a', 2, 4, 5, 7, 8];
const arr4 = ['b', 2, 'c', 9, 5, 6, 3];
function arrUnionSet() {
    const newArr = [...new Set([...arr3, ...arr4])];
    console.log(newArr)
    return newArr.sort()
}
const arrUnion_set_fn = arrUnionSet();
console.log(`Uniion of arrays/object fn:arrUnionSet  ==>  "[${arr3}] and [${arr4}] " => `, JSON.stringify(arrUnion_set_fn))
console.log('===========================================')

const arr5 = [1, 'a', 2, 4, 5, 7, 8];
const arr6 = ['b', 2, 'c', 9, 5, 6, 3];
function arrUnionSet_loop() {
    const unionArr = [...arr5]
    for (let i = 0; i < arr6.length; i++) {
        if (unionArr.includes(arr6[i])) {
            unionArr.push(arr6[i])
        }
    }
    return unionArr.sort()
}
const arrUnion_loop_fn = arrUnionSet_loop();
console.log(`Union of arrays/object fn:arrUnionSet_loop ==>  "[${arr5}] and [${arr6}] " => `, JSON.stringify(arrUnion_loop_fn))
console.log('===========================================')


console.log('==============================================================================')
// LIKE AND DISLIKE BUTTONS
console.log('==============================================================================')
const intiallikes = {
    like: {
        count: 115,
        disabled: false
    },
    dislike: {
        count: 56,
        disabled: false
    }
}
const JsPractice = () => {
    const [feedback, setFeedback] = useState(intiallikes)
    const handleLikes = (type) => {
        const newtype = type === 'like' ? 'dislike' : 'like'

        setFeedback({
            [type]: {
                count: intiallikes[type].count + 1,
                disabled: true
            },
            [newtype]: {
                count: intiallikes[newtype].count,
                disabled: false
            }
        })
    }

    return (
        <div>
            <h1>
                JS Practice
            </h1>
            <div className="tracking-wider ">
                <h3>Like and Dislike button's count toggeling</h3>
                <div className="bg-orange-50 min-h-100 pb-4">
                    <div className="p-10 gap-4 flex flex-row">
                        <button
                            className="px-10 py-4 bg-red-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handleLikes('like')}
                            disabled={feedback.like.disabled}
                        >Like {feedback.like.count}</button>
                        <button
                            className="px-10 py-4 bg-red-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handleLikes('dislike')}
                            disabled={feedback.dislike.disabled}
                        >Dislike {feedback.dislike.count}</button>
                    </div>
                    <ul className="max-w-full m-8 p-6 bg-white rounded-xl shadow-lg space-y-3 list-none">
                        <li className="flex items-start gap-3 text-lg text-gray-800 border-b border-gray-100 pb-3">
                            <span className="text-blue-500 font-bold text-xl">•</span>
                            Create a React component with Like and Dislike buttons.
                        </li>

                        <li className="flex items-start gap-3 text-lg text-gray-800 border-b border-gray-100 pb-3">
                            <span className="text-blue-500 font-bold text-xl">•</span>
                            Both buttons are initially enabled with their counts:
                            <ul className="ml-8 mt-2 space-y-1 list-none">
                                <li className="flex items-center gap-2 text-base text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span>
                                    Like: 115
                                </li>
                                <li className="flex items-center gap-2 text-base text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span>
                                    Dislike: 56
                                </li>
                            </ul>
                        </li>

                        <li className="flex items-start gap-3 text-lg text-gray-800 border-b border-gray-100 pb-3">
                            <span className="text-blue-500 font-bold text-xl">•</span>
                            When you click any button:
                            <ul className="ml-8 mt-2 space-y-1 list-none">
                                <li className="flex items-start gap-2 text-base text-gray-600">
                                    <span className="text-orange-500 font-bold">→</span>
                                    Its count increases by <span className="font-bold text-green-600">+1</span>
                                </li>
                                <li className="flex items-start gap-2 text-base text-gray-600">
                                    <span className="text-orange-500 font-bold">→</span>
                                    That button gets disabled <span className="text-red-500 text-sm">(can't click again)</span>
                                </li>
                            </ul>
                        </li>

                        <li className="flex items-start gap-3 text-lg text-gray-800 border-b border-gray-100 pb-3">
                            <span className="text-blue-500 font-bold text-xl">•</span>
                            The opposite button becomes enabled <span className="text-green-500 text-sm">(clickable)</span> with its current count.
                        </li>

                        <li className="flex items-start gap-3 text-lg text-gray-800 pt-2">
                            <span className="text-blue-500 font-bold text-xl">•</span>
                            <span className="font-semibold">Only one button is clickable at a time</span>
                            <span className="ml-2 text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Toggle System</span>
                        </li>
                    </ul>

                </div>

                <h3>{`Palindrome Check ${palinstr} => ${JSON.stringify(checkpalindrom)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const checkPalindrom = ${checkPalindrom.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Reverse String: no array utility methods  ${revstr} => ${JSON.stringify(reversestring)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const reverseString = ${reverseString.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Array - Index of two numbers sum has a target value ${trgt} from an array [${list}] => ${JSON.stringify(checksumtarget)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const checkSumTarget = ${checkSumTarget.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Check if number is Prime ${prime} => ${JSON.stringify(checkprime)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const checkPrime = ${checkPrime.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="1fr">
                        <ul className="leading-7 list-type-disk m-4">
                            <li>check spacial cases if number is equal or less from 1</li>
                            <li>chect even number check if remender is 0</li>
                            <li>get square root of number</li>
                            <li>check with all odd number less then sqr root</li>
                            <li>if remendor is not 0, that is prime number</li>
                        </ul>
                    </div>
                </div>

                <h3>{`Factorial of Number ${fact} => ${JSON.stringify(getfactorials)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const getfactorials = ${getFactorials.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Fibonacci Series given 2 numbers/digits [${fabnums}] array and loop count ${fabcount} times =>  ${JSON.stringify(getfabonacci)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const getFabonacci = ${getFabonacci.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Fibonacci Series given only single number/digit ${fabnum_sd} and loop count ${fabcount_sd} times => ${JSON.stringify(getfabonacci_sd)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const getFabonacciSD = ${getFabonacciSD.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Maximum Subarray Elements [${arrnumaxSubArrayElems_arr}] => ${JSON.stringify(maxSubArrayElems_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const maxSubArrayElems = ${maxSubArrayElems.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Find largest element in array [${largest_arr}] => ${JSON.stringify(getLargestArrElm_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const getLargestArrElm = ${getLargestArrElm.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Find Second Largest Number in array [${second_largest_arr}] => ${JSON.stringify(getSecondLargestArrElm_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const getSecondLargestArrElm = ${getSecondLargestArrElm.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Remove Duplicate Elements [${duplicateElms_arr}] => ${JSON.stringify(removeDuplicateElm_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const removeDuplicateElm = ${removeDuplicateElm.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`String compression  [${string_compression}] => ${JSON.stringify(stringCompression_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const stringCompression = ${stringCompression.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`String compression and max charector frequency  [${string_compression_reduce}] => ${JSON.stringify(stringCompressionReduce_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const stringCompressionReduce = ${stringCompressionReduce.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>{`Get Max value for a object'key  [${JSON.stringify(maxkeval_obj)}] => ${JSON.stringify(objMaxKeyVal_fn)}`}</h3>
                <div className="flex gap-6 flex-row">
                    <div className="w-full">
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            showLineNumbers={true}
                            customStyle={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '14px',
                                borderRadius: '8px'
                            }}
                        >
                            {`const objMaxKeyVal = ${objMaxKeyVal.toString()}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <h3>Sort Array Ascending Order</h3>
                <h3>Sort Array Descending Order</h3>
                <h3>Intersection of Two Arrays</h3>
                <h3>Union of Two Arrays</h3>
                <h3>Missing Number in Array</h3>
                <h3>Move All Zeros to End</h3>
                <h3>Reverse Array In Place</h3>
                <h3>Reverse Each Word in String</h3>

                <h3>check numbers sum is target number</h3>
                <h3>Char Frequency</h3>
                <h3>Remove Duplicate Char</h3>
                <h3>Non Repeating Char</h3>
                <h3>Group strings that are anagrams</h3>
                <h3>Find maximum sum of contiguous subarray</h3>
                <h3>Non Repeating Char</h3>
                <h3>Non Repeating Char</h3>
                <h3>Non Repeating Char</h3>
                <h3>Swap Two Numbers</h3>
                <h3>Non Repeating Char</h3>
            </div>
        </div>
    )
}

export default JsPractice