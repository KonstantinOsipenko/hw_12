const items = [1, 2, 3];

const cbFor = (value) => {
  console.log(value);
};
const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};
forEach(items, cbFor);

const mapCb = (item) => {
  return item * 2;
};
const MyMap = (arr, cb) => {
  const copyItems = [];
  for (let i = 0; i < arr.length; i++) {
    copyItems.push(cb(arr[i], i, arr));
  }
  return copyItems;
};
const newArr = MyMap(items, mapCb);
console.log(newArr);

const words = ["apple", "worms", "orange", "banana", "minions"];

const filter = (array, callBack) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack.call(array, array[i], i)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const resFilter = filter(words, function name(items) {
  return items.length == 6;
});
console.log(resFilter);

let nums = [1, 2, 3, 4, 5];

const cbCheck = (value) => value === 5;
const every = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (!cb.call(arr, arr[i], i)) {
      return false;
    }
  }
  return true;
};

const resEvery = every(nums, cbCheck);
console.log(resEvery);

const some = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb.call(arr, arr[i], i)) {
      return true;
    }
  }
  return false;
};
const resSome = some(nums, cbCheck);
console.log(resSome);

const find = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb.call(arr, arr[i], i)) {
      return arr[i];
    }
  }
  return;
};
const resFind = find(nums, cbCheck);
console.log(resFind);

const reduce = (arr, cb, value) => {
  let result = value;
  for (let i = 0; i < arr.length; i++) {
    result = cb.call(null, result, arr[i], i, arr);
  }
  return result;
};
const resReduce = reduce(
  nums,
  (result, num) => {
    return result + num;
  },
  0
);
console.log(resReduce);
