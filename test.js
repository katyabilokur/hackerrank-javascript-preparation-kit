//--------------- WEEK 1 ---------------------
//--------------------------------------------

//----- Mini-Max Sum -----

// const array = [3, 1, 5, 7, 9];

// function miniMaxSum(arr) {
//   function arrSum(arrToSum) {
//     return arrToSum.reduce((acc, cur) => acc + cur, 0);
//   }

//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   const arrWithoutMin = [...arr];
//   const arrWithoutMax = [...arr];

//   arrWithoutMin.splice(arr.indexOf(min), 1);
//   arrWithoutMax.splice(arr.indexOf(max), 1);

//   console.log(arrSum(arrWithoutMax), arrSum(arrWithoutMin));
// }

// miniMaxSum(array);

//-----  -----
//----- Time Conversion -----

// const time = "02:05:45PM";

// function timeConversion(s) {
//   const amPm = s.slice(-2).toLowerCase();
//   const timeArr = s.slice(0, -2).split(":");

//   const newTime = `${
//     amPm === "am"
//       ? +timeArr[0] === 12
//         ? "00"
//         : timeArr[0]
//       : +timeArr[0] === 12
//       ? "12"
//       : +timeArr[0] + 12
//   }:${timeArr[1]}:${timeArr[2]}`;
//   return newTime;
// }
// timeConversion(time);

//-----  -----
//----- Sparse Arrays -----

//There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// const str = ["ab", "bc", "abc", "de", "ab"];
// const req = ["ab", "de", "abcd"];

// function matchingStrings(strings, queries) {
//   let resArr = [];
//   queries.forEach((qEl) => {
//     const arrContains = strings.filter((strEl) => strEl === qEl);
//     resArr.push(arrContains.length);
//   });
//   return resArr;
// }

// console.log(matchingStrings(str, req));

//-----  -----
//----- Lonely Integer -----

//Given an array of integers, where all elements but one occur twice, find the unique element.

// const arr = [1, 2, 3, 4, 3, 2, 1, 4, 6];
// function lonelyinteger(a) {
//   let searchedNumber = null;
//   a.forEach((element) => {
//     const newArr = a.filter((el) => el === element);
//     if (newArr.length === 1) {
//       searchedNumber = element;
//       return;
//     }
//   });
//   return searchedNumber;
// }

// const number = lonelyinteger(arr);
// console.log(number);

//-----  -----
//----- Flipping bits -----

//You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer

// function flippingBits(n) {
//   let flippedNumber32 = "";
//   const newNumber32 = n.toString(2).padStart(32, "0");
//   const newArr = newNumber32.split("");

//   newArr.forEach((element) => {
//     if (element === "0") flippedNumber32 += "1";
//     if (element === "1") flippedNumber32 += "0";
//   });

//   return parseInt(flippedNumber32, 2);
// }

// console.log(flippingBits(12));

//-----  -----
//----- Diagonal Difference -----

// Given a square matrix, calculate the absolute difference between the sums of its diagonals
// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];

// const arr2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 1, 2],
//   [3, 4, 5, 6],
// ];

// function diagonalDifference(arr) {
//   //Arr is square check
//   const arrSize = arr.length;

//   if (arr[0].length !== arrSize) {
//     console.log("The given array is not square");
//     return;
//   }

//   let sum1 = 0;
//   let sum2 = 0;

//   for (let index = 0; index < arrSize; index++) {
//     sum1 = sum1 + arr[index][index];
//     sum2 = sum2 + arr[index][arrSize - 1 - index];
//   }

//   return Math.abs(sum1 - sum2);
// }

// console.log(diagonalDifference(arr1));

//-----  -----
//----- Counting Sort 1 -----

//Alternative Sorting

// const arr = [1, 1, 3, 2, 1, 99, 99, 97];

// function countingSort(arr) {
//   let frequencyArr = Array(100).fill(0);

//   arr.forEach((element) => {
//     frequencyArr[element]++;
//   });

//   return frequencyArr;
// }

// console.log(countingSort(arr));

//-----  -----
//----- Pangrams -----

//Pangram or not
// const str1 = "We promptly judged antique ivory buckles for the next prize";
// const str2 = "We promptly judged antique ivory buckles for the prize";

// function pangrams(s) {
//   let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
//   const strToCompare = [...s.toLowerCase()];

//   strToCompare.forEach((char) => {
//     alphabet = alphabet.filter((el) => el !== char);
//   });

//   if (alphabet.length === 0) return "pangram";
//   return "not pangram";
// }
// console.log(pangrams(str2));

//-----  -----
//----- Permuting Two Arrays -----

//Array Permutattion to be A[i] + B[i]>= k. There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// const k1 = 10;
// const arrA1 = [2, 1, 3];
// const arrB1 = [7, 8, 9];

// const k2 = 5;
// const arrA2 = [1, 2, 2, 1];
// const arrB2 = [3, 3, 3, 4];

// function twoArrays(k, A, B) {
//   const sortedA = A.sort();
//   const sortedB = B.sort((a, b) => b - a);

//   for (let i = 0; i < sortedA.length; i++) {
//     let z = 0;
//     let currentCheck = sortedA[i] + sortedB[z] >= k;
//     if (!currentCheck) return "NO";

//     if (sortedB.length > 1) {
//       for (let y = 1; y < sortedB.length; y++) {
//         if (sortedA[i] + sortedB[y] >= k) {
//           currentCheck = sortedA[i] + sortedB[y];
//           z = y;
//         } else {
//           z = y - 1;
//           break;
//         }
//       }
//     }

//     sortedB.splice(z, 1);
//   }

//   return "YES";
// }

// console.log(twoArrays(k1, arrA1, arrB1));
// console.log(twoArrays(k2, arrA2, arrB2));

//-----  -----
//----- Subarray Division 1 -----

//Subarray Division 1
// const arrS = [2, 2, 1, 3, 2];
// const d = 4;
// const m = 2;

// function birthday(s, d, m) {
//   let numOfWays = 0;
//   if (s.length < m) return numOfWays;

//   for (let i = 0; i <= s.length - m; i++) {
//     const mArr = s.slice(i, i + m);

//     if (mArr.reduce((val, acc) => val + acc, 0) === d) numOfWays++;
//   }

//   return numOfWays;
// }

// console.log(birthday(arrS, d, m));

//-----  -----
//----- XOR Strings 2 -----

//XOR Strings 2

//TEST sample
// function fizzBuzz(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   arr.forEach((el) => {
//     let res = "";

//     if (el % 3 === 0) res = res + "Fizz";
//     if (el % 5 === 0) res = res + "Buzz";
//     if (el % 3 !== 0 && el % 5 !== 0) res = el;

//     console.log(res);
//   });
// }

// fizzBuzz(15);

//TEST 1

// const arr = [0, 12, 22, 43, 26, 5, 3223, 7225, 8];

// function findMedian(arr) {
//   arr.sort((a, b) => a - b);
//   const index = Math.floor(arr.length / 2);
//   console.log(arr);
//   return arr[index];
// }

// console.log(findMedian(arr));

//--------------- WEEK 2 ---------------------
//--------------------------------------------

//-----  -----
//----- Sales by Match -----
//Socks pairing

// const socks = [1, 1, 1, 3, 4, 5, 2, 2, 3, 1, 2, 3, 6];
// const socks1 = [1, 2, 1, 2, 1, 3, 2];
// const socks2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

// function sockMerchant(n, ar) {
//   const unickColours = new Set(ar);

//   let pairs = 0;

//   unickColours.forEach((colour) => {
//     const filteredSocksByColour = ar.filter((sock) => sock === colour);
//     pairs = pairs + Math.floor(filteredSocksByColour.length / 2);
//   });

//   return pairs;
// }

// console.log(sockMerchant(2, socks2));

//-----  -----
//----- Drawing Book -----

//book flipped

// const n = 5;
// const p = 3;

// function pageCount(n, p) {
//   const midBook = (n + 1) / 2;

//   if (p < midBook) {
//     return Math.floor(p / 2);
//   } else {
//     if (n % 2 == 0) return Math.floor((n - p + 1) / 2);
//   }

//   return Math.floor((n - p) / 2);
// }

// console.log(pageCount(6, 3));

//-----  -----
//----- Tower Breakers -----

//-----  -----
//----- Caesar Cipher -----

// const string = "middle-Outz";
// const string2 = "There's-a-starman-waiting-in-the-sky";
// const string3 =
//   "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M";
// const k = 27;
// //okffng-Qwvb
// //1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N

// function caesarCipher(s, k) {
//   const alph = [..."abcdefghijklmnopqrstuvwxyz"];
//   let shiftedAlph = [];
//   const kShift = k > alph.length ? k % alph.length : k;

//   function isLowerCase(ch) {
//     if (ch === ch.toLowerCase()) return true;
//     return false;
//   }

//   //Created a new shifter alphabet
//   for (let index = 0; index < alph.length; index++) {
//     if (index < alph.length - kShift) {
//       shiftedAlph.push(alph[index + kShift]);
//     } else {
//       shiftedAlph.push(alph[index - alph.length + kShift]);
//     }
//   }

//   //Create a new line of code
//   const origStr = [...s];
//   const encryptedStr = [];

//   origStr.forEach((char) => {
//     if (!char.toLowerCase().match(/[a-z]/)) encryptedStr.push(char);
//     else {
//       const origCharIndex = alph.indexOf(char.toLowerCase());

//       if (isLowerCase(char)) {
//         encryptedStr.push(shiftedAlph[origCharIndex]);
//       } else {
//         encryptedStr.push(shiftedAlph[origCharIndex].toUpperCase());
//       }
//     }
//   });

//   return encryptedStr.join("");
// }

// console.log(caesarCipher(string3, k));

//-----  -----
//----- Max Min -----

// const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 2];
// const k = 3;
// const arr1 = [100, 200, 300, 350, 400, 401, 402];

// function maxMin(k, arr) {
//   arr.sort((a, b) => a - b);

//   let minUnfairness = Infinity;

//   for (let index = 0; index <= arr.length - k; index++) {
//     const currentUnfairness = arr[index + k - 1] - arr[index];
//     if (currentUnfairness < minUnfairness) {
//       minUnfairness = currentUnfairness;
//     }
//   }

//   return minUnfairness;
// }

// console.log(maxMin(k, arr1));

//-----  -----
//----- Sum vs XOR -----

// const num = 5;

// //WORKING BUT SLOW
// function sumXor(n) {
//   let result = 0;

//   function bitwiseXOR(index) {
//     let bitwiseXOR = [];

//     const nBit = [...n.toString(2)];
//     const indexBitMatch = [...index.toString(2).padStart(nBit.length, "0")];

//     for (let y = 0; y < nBit.length; y++) {
//       if (
//         (nBit[y] == 0 && indexBitMatch[y] == 0) ||
//         (nBit[y] == 1 && indexBitMatch[y] == 1)
//       ) {
//         bitwiseXOR.push(0);
//       } else bitwiseXOR.push(1);
//     }

//     return parseInt(bitwiseXOR.join(""), 2);
//   }

//   for (let i = 0; i <= n; i++) {
//     if (i + n === bitwiseXOR(i)) result++;
//   }

//   return result;
// }

// console.log(sumXor(num));

//WORKING AND FAST
// function sumXor2(n) {
//   let count = 0;
//   let numZerosInN = 0;

//   // Count number of zeros in the binary representation of n
//   while (n > 0) {
//     if (n % 2 === 0) {
//       numZerosInN++;
//     }
//     n = Math.floor(n / 2);
//   }

//   // We count the number of zeros in the binary representation of n. This is because for each zero in n, there is a corresponding choice for x such that x + n = x XOR n. This corresponds to the properties of XOR where 0 bits in n allow x to be freely chosen without affecting the sum and XOR condition.

//   // Number of non-negative integers x such that x + n = x XOR n
//   count = Math.pow(2, numZerosInN);

//   return count;
// }

//-----  -----
//----- Dynamic Array -----

// const n = 2;
// const queries = [
//   [1, 0, 5],
//   [1, 1, 7],
//   [1, 0, 3],
//   [2, 1, 0],
//   [2, 1, 1],
// ];

// function dynamicArray(n, queries) {
//   let answers = [];
//   let lastAnswer = 0;
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push([]);
//   }

//   for (let index = 0; index < queries.length; index++) {
//     const idx = (queries[index][1] ^ lastAnswer) % n;
//     if (queries[index][0] === 1) {
//       arr[idx].push(queries[index][2]);
//     }
//     if (queries[index][0] === 2) {
//       lastAnswer = arr[idx][queries[index][2] % arr[idx].length];
//       answers.push(lastAnswer);
//     }
//   }

//   return answers;
// }

// console.log(dynamicArray(n, queries));

//-----  -----
//----- Grid Challenge -----

// const arr = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
// const arr2 = ["mpxz", "abcd", "wlmf"];

// function gridChallenge(grid) {
//   let newGrid = [];
//   let answer = "YES";

//   //Create a new array of arrays with letters
//   grid.forEach((str) => {
//     newGrid.push(str.split(""));
//   });

//   //Sort it
//   newGrid.forEach((line) => line.sort());

//   //Check if rows are already sorted as well.
//   let rowArr = [];
//   for (let i = 0; i < newGrid[0].length; i++) {
//     rowArr.push([]);
//   }

//   for (let index = 0; index < newGrid.length; index++) {
//     for (let y = 0; y < newGrid[0].length; y++) {
//       rowArr[y].push(newGrid[index][y]);
//     }
//   }

//TODO: forEach is not good here, as foreach keeps running when we need to stop. Use filter.
//   rowArr.forEach((element) => {
//     if (
//       JSON.stringify(element.join("")) !==
//       JSON.stringify([...element].sort().join(""))
//     ) {
//       answer = "NO";
//     }
//   });

//   return answer;
// }

// console.log(gridChallenge(arr));

//-----  -----
//----- Sherlock and Array -----

// const arr = [5, 6, 8, 11];
// const arr2 = [1];
// const arr3 = [1, 0];
// const arr4 = [0, 2, 1];

// function balancedSums(arr) {
//   const arrSum = arr.reduce((acc, curV) => acc + curV, 0);
//   let firstSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const lastSum = i === arr.length - 1 ? 0 : arrSum - arr[i] - firstSum;

// if (firstSum === lastSum) {
//       return "YES";
//     }
//     firstSum += arr[i];
//   }
//   return "NO";
// }

// console.log(balancedSums(arr4));

//-----  -----
//----- Counter game -----

// function counterGame(n) {
//   if (n === 1) return "Richard";

//   let firstPlayerRound = true;
//   let currentN = n;

//   function isPowerOf2(number) {
//     return Math.log2(number) % 1 === 0;
//   }

//   function nearestPowerOf2(number) {
//     return 1 << (31 - Math.clz32(number));
//   }

//   while (currentN > 1) {
//     if (isPowerOf2(currentN)) {
//       currentN = currentN / 2;
//     } else {
//       currentN = currentN - nearestPowerOf2(currentN);
//     }
//     if (currentN === 1) break;
//     firstPlayerRound = !firstPlayerRound;
//     // if (currentN === 1) break;
//   }

//   return firstPlayerRound ? "Louise" : "Richard";
// }

// console.log(counterGame(5));

//-----  -----
//----- Recursive Digit Sum -----

// const n = " 9875";
// const k = 4;
// const n =
//   "7404954009694227446246375747227852213692570890717884174001587537145838723390362624487926131161112710589127423098959327020544003395792482625191721603328307774998124389641069884634086849138515079220750462317357487762780480576640689175346956135668451835480490089962406773267569650663927778867764315211280625033388271518264961090111547480467065229843613873499846390257375933040086863430523668050046930387013897062106309406874425001127890574986610018093859693455518413268914361859000614904461902442822577552997680098389183082654625098817411306985010658756762152160904278169491634807464356130877526392725432086439934006728914411061861235300979536190100734360684054557448454640750198466877185875290011114667186730452681943043971812380628117527172389889545776779555664826488520325234792648448625225364535053605515386730925070072896004645416713682004600636574389040662827182696337187610904694029221880801372864040345567230941110986028568372710970460116491983700312243090679537497139499778923997433720159174153";
// const k = 100000;

// function superDigit(n, k) {
//   function superSum(numb) {
//     if (numb <= 9) return numb;
//     else {
//       const arr = numb.toString().split("").map(Number);
//       return arr.reduce((prev, curr) => prev + curr, 0);
//     }
//   }

//   const number = n.trim();
//   let sum = superSum(number) * k;

//   while (+sum > 9) {
//     sum = superSum(sum);
//   }

//   return sum;
// }

// console.log(superDigit(n, k));

//--------------- WEEK 3 ---------------------
//--------------------------------------------

//-----  -----
//----- New Year Chaos -----

// const q = [2, 1, 5, 3, 4];
// const q1 = [2, 5, 1, 3, 4];
// const q2 = [1, 2, 5, 3, 7, 8, 6, 4];

// function minimumBribes(q) {
//   let bribes = 0;

//   for (let i = q.length - 1; i >= 0; i--) {
//     // Check if the current person has moved more than 2 positions forward
//     if (q[i] - (i + 1) > 2) {
//       return "Too chaotic";
//     }

//     // Only check positions where someone could have bribed the current person
//     // Start from the max of 0 or (q[i] - 2) to avoid unnecessary checks
//     for (let j = Math.max(0, q[i] - 2); j < i; j++) {
//       if (q[j] > q[i]) {
//         bribes++;
//       }
//     }
//   }

//   return bribes;
// }

// console.log(minimumBribes(q2));

//-----  -----
//----- Sherlock and the Valid String -----

// function isValid(s) {
//   const arr = s.split("");
//   const arrSet = [...new Set(arr)];

//   if (arrSet.length === arr.length) return "YES";

//   const charNumbers = new Array(arrSet.length).fill(0);

//   const setPositions = new Map();
//   for (let i = 0; i < arrSet.length; i++) {
//     setPositions.set(arrSet[i], i);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     charNumbers[setPositions.get(arr[i])]++;
//   }

//   const uniqueCharNumbers = [...new Set(charNumbers)];
//   //Now we have 2 sets charNumbers - list of all unique chars counted
//   //uniqueCharNumbers - unique set counts

//   //if there is more than 2 sets of unique chars, there is no way to remove only one
//   if (uniqueCharNumbers.length > 2) return "NO";
//   if (uniqueCharNumbers.length === 1) return "YES";

//   const [uniqueChar1, uniqueChar2] = uniqueCharNumbers;
//   const countOne = charNumbers.filter((char) => char === uniqueChar1);

//   if (
//     countOne.length === 1 &&
//     (uniqueChar1 === 1 || uniqueChar1 - uniqueChar2 === 1)
//   )
//     return "YES";
//   if (
//     charNumbers.length - countOne.length === 1 &&
//     (uniqueChar2 === 1 || uniqueChar2 - uniqueChar1 === 1)
//   )
//     return "YES";

//   return "NO";

//   // if (uniqueChar1 === 1 && Math.abs(uniqueChar1 - uniqueChar2) > 1) return "NO";
//   // if (Math.abs(charNumbers.length - countOne.length) > 1) return "NO";

//   // return "YES";
// }

// const s = "aabbcd"; //no
// const s1 = "abcc"; //yes
// const s2 = "aabbccddeefghi"; //no
// //yes
// const s3 =
//   "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd";
// const s4 = "aaaabbcc"; //no
// const s5 = "aaabbbcc"; //no

// console.log(isValid(s));
// console.log(isValid(s1));
// console.log(isValid(s2));
// console.log(isValid(s3));
// console.log(isValid(s4));
// console.log(isValid(s5));

//-----  -----
//----- Climbing the Leaderboard -----

function climbingLeaderboard(ranked, player) {
  let newRanked = [];
  const uniqueScores = [...new Set(ranked)];

  player.forEach((play) => {
    if (play >= uniqueScores[0]) newRanked.push(1);
    else if (play < uniqueScores[uniqueScores.length - 1])
      newRanked.push(uniqueScores.length + 1);
    else if (play === uniqueScores[uniqueScores.length - 1])
      newRanked.push(uniqueScores.length);
    else {
      for (let i = 1; i < uniqueScores.length; i++) {
        if (play >= uniqueScores[i]) {
          newRanked.push(i + 1);
          break;
        }
      }
    }
  });

  return newRanked;
}

// ranked = [100, 90, 90, 80];
// player = [70, 80, 85, 105];
// ranked = [100, 100, 50, 40, 20, 10]; //6 4 2 1
// player = [5, 25, 50, 120];

ranked = [100, 90, 90, 80, 75, 60];
player = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(ranked, player));
