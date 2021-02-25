
exports.min = function (array) {
    if (!(array.length) || array.length == 0) {
      return 0;
  }
  let res = Number.POSITIVE_INFINITY;
  array.forEach(item => {
      if (item < res) {
          res = item;
      }
  })
  return res;
}

exports.max = function (array) {
    if (!(array.length) || array.length == 0) {
      return 0;
  }
  let res = Number.NEGATIVE_INFINITY;
  array.forEach(item => {
      if (item > res) {
          res = item;
      }
  })
  return res;
}

exports.avg = function (array) {
    if (!(array.length) || array.length == 0) {
      return 0;
  }
  let res = 0;
  array.forEach(item => {
      res += item;
  })
  res = res / array.length;
  return res;
}