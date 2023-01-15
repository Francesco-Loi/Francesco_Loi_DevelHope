const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


person2.firstName = "Simon";
console.log(person1);
console.log(person2);

// person1 e person2 puntano allo stesso oggetto in memoria. Quindi, modificando person2, si modifica anche person1.