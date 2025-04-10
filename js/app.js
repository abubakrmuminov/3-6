/*=================*/
/*Amaliy mashg'ulot*/
/*=================*/

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

/*=======*/
/*1-mashq*/
/*=======*/

const day = +prompt("son kiriting");

switch (day) {
  case 1:
    console.log("Dushanba");
    break;

  case 2:
    console.log("Seshanba");
    break;

  case 3:
    console.log("Chorshanba");
    break;

  case 4:
    console.log("Payshanba");
    break;

  case 5:
    !!!!!!!console.log("Juma");
    break;

  case 6:
    console.log("Shanba");
    break;

  case 7:
    console.log("Yakshanba");
    break;

  default:
    console.log("1dan 7gacha bo'lgan sonni kiriting");
    break;
}

/*2-mashq*/

const baho = prompt("bahoni kiriting");

switch (true) {
  case +baho < 50:
    console.log("yomon");
    break;

  case +baho < 90:
    console.log("o'rtacha");
    break;

  case +baho >= 90:
    console.log("yaxshi");
    break;
}

/*=======*/
/*3-mashq*/
/*=======*/

const age = prompt("yoshingiz nechchida");
let agenum = "";

if (age >= 18 && age < 30) {
  agenum = "salom, yoshlar!";
} else if (age > 30) {
  agenum = "salom, katta odam!";
} else {
  agenum = "kirish taqiqlanadi";
}

console.log(agenum);

/*=======*/
/*4-mashq*/
/*=======*/

const kun = +prompt("son kiriting");

switch (kun) {
  case 1:
    console.log("Dushanba");
    break;

  case 2:
    console.log("Seshanba");
    break;

  case 3:
    console.log("Chorshanba");
    break;

  case 4:
    console.log("Payshanba");
    break;

  case 5:
    console.log("Juma");
    break;

  case 6:
    console.log("Shanba");
    break;

  case 7:
    console.log("Yakshanba");
    break;

  default:
    console.log("1dan 7gacha bo'lgan sonni kiriting");
    break;
}

/*=======*/
/*5-mashq*/
/*=======*/

const grade = prompt("ballni kiriting");

if (grade >= 90 && grade <= 100) console.log("A");
else if (grade >= 75 && grade < 90) console.log("B");
else if (grade >= 50 && grade < 75) console.log("C");
else if (grade >= 0 && grade < 50) console.log("D");
else console.log("1 dan 100 gacha bo'lgan son kiriting");

/*=======*/
/*6-mashq*/
/*=======*/

const raqam = prompt("raqam kiriting");

if (raqam < 0) console.log("bu manfiy son");
else if (raqam > 0) console.log("bu musbat son");
else if (raqam == 0) console.log("bu nol");
else console.log("bu raqam emas");

/*=======*/
/*7-mashq*/
/*=======*/

const dam = +prompt("1 dan 7 gacha son kiriting");

switch (dam) {
  case 6:
    console.log("dam olish kuni");
    break;
  case 7:
    console.log("dam olish kuni");
    break;
  case 1:
    console.log("ish kuni");
    break;
  case 2:
    console.log("ish kuni");
    break;
  case 3:
    console.log("ish kuni");
    break;
  case 4:
    console.log("ish kuni");
    break;
  case 5:
    console.log("ish kuni");
    break;
  default:
    console.log("1dan 7gacha son kiriting");
    break;
}

/*=======*/
/*8-mashq/*
/*=======*/

const score = prompt("ballni kiriting");

if (score >= 90 && grade <= 100) console.log("A");
else if (score >= 75 && grade < 90) console.log("B");
else if (score >= 50 && grade < 75) console.log("C");
else if (score >= 0 && grade < 50) console.log("D");
else console.log("1 dan 100 gacha bo'lgan son kiriting");

/*=======*/
/*9-mashq*/
/*=======*/

const password = prompt("parolni kiriting");

if (password == 1234) console.log("parol to'gri");
else console.log("parol noto'g'ri");

/*========*/
/*10-mashq*/
/*========*/

const yosh = prompt("yoshingiz nechchida");

if (yosh >= 18) console.log("ro'yxattan o'ta olasiz");
else console.log("ro'yxattan o'ta ololmaysiz");
