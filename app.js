// Object
var person = {
    name: "JESH",
    age: 30
};
console.log(person.name);
// Array
var arr1;
arr1 = ["Jean", "Heros"];
var arr;
arr = ["Jean", 1910];
console.log(arr1, arr);
// Tuple
var arr2;
arr2 = [1, "Houzyk"];
console.log(arr2);
// Enum
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["READ_ONLY"] = "none";
    Role["AUTHOR"] = "Jaanish";
})(Role || (Role = {}));
console.log(Role.ADMIN, Role.AUTHOR);
