/* Your JS goes in this file */

// #1 //
const age = 34;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isAdult(age));

// #2 //

const student1score = 88;

function didStudentPass(score) {
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}

console.log(didStudentPass(student1score));

// #3 //

const student2score = 59;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}

console.log(gradeCalculator(student2score));

// #4 //

const season = 'summer';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}

console.log(seasonMessenger(season));

// #5 //

const dayOfTheWeek = 'Sunday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday') {
    return 'have a good weekend!';
  } else if (dayOfTheWeek === 'Sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday";
  }
}

console.log(dayDetector(dayOfTheWeek));
