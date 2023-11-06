// Es.1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static isSameAge(ageA, ageB) {
        return ageA.age === ageB.age;
    }

    isSameAgeInstance(ageToCompare) {
        return this.age === ageToCompare.age
    }

  
}
 console.log(User)

 function users() {
      const user1 = new User ("Gianni", "Rossi", 40, "Milano");
      console.log(user1);

      const user2 = new User("Agata", "Verdi", 34, "Roma");
      console.log(user2);

      if (user1.age < user2.age) {
        return console.log(
            user1.firstName + "è più giovane di" + user2.firstName
        );
      } else {
        return console.log(
            user1.firstName + " è più vecchio di " + user2.firstName
        );
      }
 }

users();


// es.2