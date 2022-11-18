function getEle(n) {
  return document.getElementById(n);
}

var numArray = [];

function getNumber() {
  var n = +document.getElementById("inputNum").value;
  numArray.push(n);
  document.getElementById("txtArray").innerHTML = numArray;
}

//bài 1: tính tổng các số dương
document.getElementById("sumCalc").onclick = function ex1() {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sum += numArray[i];
    }
  }
  document.getElementById("txtSum").innerHTML = "Tổng là " + sum;
};

//bài 2: đếm số dương

document.getElementById("countNum").onclick = function ex2() {
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count++;
    }
  }
  document.getElementById("txtCount").innerHTML = "Có " + count + " số dương";
};

//bài 3: tìm số nhỏ nhất

document.getElementById("findMinNum").onclick = function ex3() {
  var minNum = numArray[0];
  var index = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] < minNum) {
      minNum = numArray[i];
    }
  }
  document.getElementById("txtMin").innerHTML = "Số nhỏ nhất là: " + minNum;
};

//bài 4: tìm số dương nhỏ nhất

document.getElementById("findMinPositiveNum").onclick = function ex4() {
  var n = [];
  for (var r = 0; r < numArray.length; r++) {
    if (numArray[r] > 0) {
      n.push(numArray[r]);
    }
  }

  if (n.length > 0) {
    var minPositiveNum = n[0];
    for (var i = 0; i < n.length; i++) {
      if (n[i] < minPositiveNum) {
        minPositiveNum = n[i];
      }
    }
    document.getElementById("txtMinPositiveNum").innerHTML =
      "Số dương nhỏ nhất là: " + minPositiveNum;
  } else {
    document.getElementById("txtMinPositiveNum").innerHTML =
      "Không có số dương trong mảng";
  }
};

//bài 5: Tìm số chẵn cuối cùng trong mảng

document.getElementById("findLastEvenNum").onclick = function ex5() {
  for (var i = 0, r = -1; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      r = numArray[i];
    }
  }
  document.getElementById("txtLastEvenNum").innerHTML =
    "Số chẵn cuối cùng là: " + r;
};

//bài 6:Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById("swapPosition").onclick = function ex6() {
  var inputIndex1 = +document.getElementById("inputIndex1").value;
  var inputIndex2 = +document.getElementById("inputIndex2").value;
  var e = numArray[inputIndex1];
  numArray[inputIndex1] = numArray[inputIndex2];
  numArray[inputIndex2] = e;

  document.getElementById("txtSwapPosition").innerHTML =
    "Mảng sau khi đổi là:" + numArray;
};

//bài 7: Sắp xếp mảng theo thứ tự tăng dần.
function findMinValue(array) {
  var min = array[0];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      index = i;
    }
  }
  return [min, index];
}

document.getElementById("sortIncrease").onclick = function () {
  for (var i = 0; i < numArray.length - 1; i++) {
    for (var j = i + 1; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        var temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
  document.getElementById("txtSortIncrease").innerHTML = numArray;
};

//bài 8: Tìm số nguyên tố đầu tiên trong mảng.

function checkPrime(n) {
  if (n < 2) return !1;
  for (var r = 2; r <= Math.sqrt(n); r++) if (n % r == 0) return !1;
  return !0;
}

document.getElementById("findPrime").onclick = function findPrime() {
  for (var n = -1, r = 0; r < numArray.length; r++) {
    if (checkPrime(numArray[r])) {
      n = numArray[r];
      break;
    }
  }
  document.getElementById("txtFindPrime").innerHTML = n;
};

//bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số
//nguyên?

var newNumArray = [];

function getNewNum() {
  var n = +document.getElementById("newNumArray").value;
  newNumArray.push(n);
  document.getElementById("txtNewArray").innerHTML = newNumArray;
}

document.getElementById("countInteger").onclick = function ex9() {
  var count = 0;
  for (var i = 0; i < newNumArray.length; i++) {
    if (Number.isInteger(newNumArray[i])) count++;
  }
  document.getElementById("txtCountInteger").innerHTML = count;
};

//bài 10: So sánh số lượng số dương và số lượng số âm

document.getElementById("compareNum").onclick = function count() {
  var countPosi = 0;
  var countNega = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      countPosi++;
    } else if (numArray[i] < 0) {
      countNega++;
    }
  }

  if (countPosi > countNega)
    document.getElementById("txtCompareNum").innerHTML = "Số dương > Số âm";
  else if (countNega > countPosi)
    document.getElementById("txtCompareNum").innerHTML = "Số âm > Số dương";
  else
    document.getElementById("txtCompareNum").innerHTML =
      "Số âm và số dương bằng nhau";
};
