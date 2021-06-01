// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            get getName() {
                return this.firstName + " " + this.lastName;
            }
            set SetName(name) { 
                name = name.split(" ");
                this.firstName = name[0];
                this.lastName = name[1];
            }
        }
        
        let person1 = new Person("O", "P")
        console.log(person1.getName);
        person1.SetName = "P O";
        console.log(person1.getName);
        
    
    
    });
})();
