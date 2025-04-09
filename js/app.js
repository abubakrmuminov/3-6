const num = prompt("sonni kiriting");
const first = +num[0];
const second = +num[1];
const third = +num[2];

let thirdnum = "";
switch (first) {
  case 0:
    thirdnum = "nol";
    break;

  case 1:
    thirdnum = "yuz";
    break;

  case 2:
    thirdnum = "ikki yuz";
    break;

  case 3:
    thirdnum = "uch yuz";
    break;

  case 4:
    thirdnum = "to'rt yuz";
    break;

  case 5:
    thirdnum = "besh yuz";
    break;

  case 6:
    thirdnum = "olti yuz";
    break;

  case 7:
    thirdnum = "yetti yuz";
    break;

  case 8:
    thirdnum = "sakkiz yuz";
    break;

  case 9:
    thirdnum = "to'qqiz yuz";
    break;
}

let secondnum = "";

switch (second) {
  case 0:
    secondnum = "";
    break;

  case 1:
    secondnum = "o'n";
    break;

  case 2:
    secondnum = "yigirma";
    break;

  case 3:
    secondnum = "o'ttiz";
    break;

  case 4:
    secondnum = "qirq";
    break;

  case 5:
    secondnum = "ellik";
    break;

  case 6:
    secondnum = "oltmish";
    break;

  case 7:
    secondnum = "yetmish";
    break;

  case 8:
    secondnum = "sakson";
    break;

  case 9:
    secondnum = "to'qson";
    break;
}

let firstnum = "";
switch (third) {
  case 0:
    firstnum = "nol";
    break;

  case 1:
    firstnum = "bir";
    break;

  case 2:
    firstnum = "ikki";
    break;

  case 3:
    firstnum = "uch";
    break;

  case 4:
    firstnum = "to'rt";
    break;

  case 5:
    firstnum = "besh";
    break;

  case 6:
    firstnum = "olti";
    break;

  case 7:
    firstnum = "yetti";
    break;

  case 8:
    firstnum = "sakkiz";
    break;

  case 9:
    firstnum = "to'qqiz";
    break;
}

console.log(thirdnum, secondnum, firstnum);
