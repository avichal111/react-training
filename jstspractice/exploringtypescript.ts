{
  let age: number = 20;
  // age="twenty";
  console.log(age);
  let coder: string = "matt";

  const incrementAge = (age: number): number => {
    return age + 1;
  };

  const printAge = (age: number): void => {
    console.log(age);
  };

  printAge(age);
  age = incrementAge(age);
  printAge(age);

  let roomname: number | string;
  roomname = 801;
  roomname = "Towerb 801";
  // roomname = true

  let dhoniage: number | null;
  dhoniage = 42;
  incrementAge(dhoniage);

  dhoniage = null;
  //   dhoniage = "forty two";
  if (dhoniage !== null) incrementAge(dhoniage);
  else {
    incrementAge(1);
  }

  incrementAge(dhoniage ?? 1);

  incrementAge(dhoniage!);

  // optional parameters
  const returnAge = (age: number | null): number => {
    return age ?? 21;
  };

  const returnAge2 = (age?: number): number => {
    return age ?? 21;
  };

  const returnAge3 = (age: number = 21): number => {
    return age;
  };

  //classes
  class Person {
    name: string;
    age?: number;
    active: boolean = false;

    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        // this.name="Ranbir";
    }
  }

  const person1 = new Person('virat',43);
  const person2 = new Person('anoushka');
//   const person3 = new Person(1);

  console.log(person1, person2);
  person1.celebrateBirthday();
  console.log(person1);
  person2.celebrateBirthday();
  console.log(person2);


  class Person2 {
    
    active: boolean = false;

    constructor(public name: string, public age?: number) {
      
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        // this.name="Ranbir";
    }
  }

  const person3 = new Person2("ranbir", 37);
  console.log(person3);

  class Person3 {
    name: string;
    age?: number;
    active: boolean = false;
    private _changed:boolean = false;

    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        // this.name="Ranbir";
    }

    public get changed():boolean{
        return this._changed;
    }

    public set changed(value:boolean){
        this._changed = value;
    }
  }

  const person4 = new Person3("ranbir", 37);
  console.log(person4.changed)
  person4.changed = true;
  console.log(person4.changed);

  // inheritance 

  class Child extends Person3 {
    toys : string[];

    constructor(name:string, toys:string[], age?:number, ){
        super(name,age);
        this.toys = toys;
    }

  }


  let child1 = new Child('taimur', ["car", "star parents"], 5);
  console.log(child1);


  // interfaces
  interface Account {
    id: number;
    balance:number;
    transactions:number[];
    addBalance(newvalue:number):void;
        
  }

  class CheckingAccount implements Account {
    
     constructor(public id:number, public balance:number, public transactions:number[]){
        
     }

     public addBalance(newvalue:number):void{
        this.balance+=newvalue;
     }
  }
  
  //object creation directly from interface is allowed

  let account:Account={id:34,balance:8000,transactions:[100,200],
    addBalance(newvalue:number){this.balance+=newvalue}};

  console.log(account);
  account.addBalance(400);
  console.log(account);

// types

type Transaction = {
    date : Date;
    amount : number;
    description : string;
}

let amt:number = 2000;
const transaction1:Transaction = {date:new Date(),amount:amt, description:"Deposit"};

class EnhancedTransaction implements Transaction {

    constructor(public date:Date, public amount:number, public description:string){

    }
}

// combining types

let x : number | string;

type Teacher = {name:string, role:string}
type Employee = {id:number, salary:number}

type SchoolEmployee = Teacher & Employee;

let s1:SchoolEmployee = {name:"abc", role:"teacher", id:1, salary:20000};

// warning - if used with alternative types - it will only give the common types
type type1 = string | number | boolean;
type type2 = Teacher | number | boolean;

type type3 = type1 & type2;
let t1 :type3 = 23;
let t2: type3 = true;
// let t3: type3 = "abc";


}











}
