// ESERCIZIO 1

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







// ESERCIZIO.2

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    

    static isSameOwner(petA, petB) {
        if (petA.ownerName === petB.ownerName) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
       
    


    

   
    
    isSameOwnerInstance(ownerToCompare) {
        return this.ownerName === ownerToCompare.ownerName
    }
 
}

console.log(Pet)



const pets =[];



// let myForm = document.getElementsByClassName("form1")[0]


// myForm.addEventListener("submit", function(event){
//     event.preventDefault()
//     document.getElementById("Input1").value
//     document.getElementById("Input2").value
//     document.getElementById("Input3").value
//     document.getElementById("Input4").value
// })


const savePets = e => {
    e.preventDefault(); 

    const newNamePets = document.getElementById("Input1"); 
    
    const newOwnerName = document.getElementById("Input2"); 
    const species = document.getElementById("Input3"); 
    const breed = document.getElementById("Input3")

  
    const finalPet = newNamePets.value + " — " + newOwnerName.value + " - " + species.value + " - " + breed.value; 
  
   
    pets[dayIndex].push(finalPet); 

  
    console.log(pets);

    

}


// let myBtn = document.getElementsByClassName("btn").addEventListener("click", function(event){
//     event.preventDefault()
// })








//     if (user1.age < user2.age) {
//       return console.log(
//           user1.firstName + "è più giovane di" + user2.firstName
//       );
//     } else {
//       return console.log(
//           user1.firstName + " è più vecchio di " + user2.firstName
//       );
//     }
// }





