const person = {
  firstName: 'Marshall',
  lastName: 'Vogt',
  hobby: 'Disc Golf',
};
console.log(
  'firstName:',
  person.firstName,
  'lastName:',
  person.lastName,
  'hobby:',
  person.hobby
);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Case Worker';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Server';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
