// 43.Berilgan qatorni sozlash uchun faqat raqamlar va harflarni saqlab, boshqa barcha belgilarni olib tashlang.
function sanitizeString(str = "") {
  let arr = str.split("")
  let new_arr = arr.filter(item => ((item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z') || (!isNaN(item)) && item != " "))
  return new_arr.join("")
}
// console.log(sanitizeString("7he@llo! w0rld#")); // "hello0rld"

// 44.Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.
function separatePositivesAndNegatives(arr) {
  let positives = arr.filter(item => item > 0)
  let negatives = arr.filter(item => item < 0)
  return { positives, negatives }
}
// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));
// { positives: [1, 3, 5], negatives: [-2, -4] }


// 45.Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.
function firstUniqueElement(arr) {
  let new_arr = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
      }
    }
    if (count == 1) {
      new_arr.push(arr[i])
    }
  }
  return new_arr[0]
}
// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4, 7])); // 5


// 46.Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.
function elementCounts(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
      }
    }
    obj[arr[i]] = count 
  }
  return obj
}
// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }


// 47.Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.
function swapElements(arr=[], k) {
  arr.push(...arr.splice(k, 1, arr.pop()))
  return arr
}
console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]
// [1, 2, 3, 4, 5]