//3)Write a “person” class to hold all the details.

class person {
    constructor(name,fatherName,motherName,gender,address,mobileNo,Email) {
      this.name = name ;
      this.fatherName = fatherName ;
      this.motherName = motherName;
      this.gender = gender; 
      this.address = address ;
      this.mobileNo = mobileNo; ;
      this.Email = Email;
   }
    personName() {
      return `my name is  ${this.name}`;
    }
  
    personfatherName() {
      return `my father name is ${this.fatherName}`;
    }
    personmotherName() {
      return `my mother name is ${this.motherName}`;
    }
    persongender() {
      return `i am ${this.gender}`;
    }
    personaddress() {
      return `my addressis ${this.adress}`;
    }
    personmobileNo() {
      return `my mobile_no is ${this.mobile_No}`;
    }
    personEmail() {
      return `my email is ${this.Email}`;
    }
  }
  
  let sumitha = new person("Jeni","Ebi","Prisci","male","chennai","123456","jeni@gmail.com");
  
  console.log(sumitha.personName());
  console.log(sumitha.personfatherName());
  console.log(sumitha.personmotherName());
  console.log(sumitha.persongender());
  console.log(sumitha.personaddress());
  console.log(sumitha.personmobileNo());
  console.log(sumitha.personEmail());

//  Output:
// my name is  Jeni
// my father name is Ebi
// my mother name is Prisci
// i am male
// my addressis undefined
// my mobile_no is undefined
// my email is jeni@gmail.com