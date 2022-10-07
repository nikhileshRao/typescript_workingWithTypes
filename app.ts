// Object

const person: {
  name: string;
  age: number;
} = {
  name: "JESH",
  age: 30,
};

console.log(person.name);

// Array

let arr1: string[];
arr1 = ["Jean", "Heros"];

let arr: any[];
arr = ["Jean", 1910];

console.log(arr1, arr);

// Tuple
let arr2: [number, string];
arr2 = [1, "Houzyk"];

console.log(arr2);

// Enum
enum Role {
  ADMIN = "Admin",
  READ_ONLY = "none",
  AUTHOR = "Jaanish",
}

console.log(Role.ADMIN, Role.AUTHOR);
