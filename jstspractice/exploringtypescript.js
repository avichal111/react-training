var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var age = 20;
    // age="twenty";
    console.log(age);
    var coder = "matt";
    var incrementAge = function (age) {
        return age + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    printAge(age);
    age = incrementAge(age);
    printAge(age);
    var roomname = void 0;
    roomname = 801;
    roomname = "Towerb 801";
    // roomname = true
    var dhoniage = void 0;
    dhoniage = 42;
    incrementAge(dhoniage);
    dhoniage = null;
    //   dhoniage = "forty two";
    if (dhoniage !== null)
        incrementAge(dhoniage);
    else {
        incrementAge(1);
    }
    incrementAge(dhoniage !== null && dhoniage !== void 0 ? dhoniage : 1);
    incrementAge(dhoniage);
    // optional parameters
    var returnAge = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var returnAge2 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var returnAge3 = function (age) {
        if (age === void 0) { age = 21; }
        return age;
    };
    //classes
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        Person.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            // this.name="Ranbir";
        };
        return Person;
    }());
    var person1 = new Person('virat', 43);
    var person2 = new Person('anoushka');
    //   const person3 = new Person(1);
    console.log(person1, person2);
    person1.celebrateBirthday();
    console.log(person1);
    person2.celebrateBirthday();
    console.log(person2);
    var Person2 = /** @class */ (function () {
        function Person2(name, age) {
            this.name = name;
            this.age = age;
            this.active = false;
        }
        Person2.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            // this.name="Ranbir";
        };
        return Person2;
    }());
    var person3 = new Person2("ranbir", 37);
    console.log(person3);
    var Person3 = /** @class */ (function () {
        function Person3(name, age) {
            this.active = false;
            this._changed = false;
            this.name = name;
            this.age = age;
        }
        Person3.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            // this.name="Ranbir";
        };
        Object.defineProperty(Person3.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person3;
    }());
    var person4 = new Person3("ranbir", 37);
    console.log(person4.changed);
    person4.changed = true;
    console.log(person4.changed);
    // inheritance 
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person3));
    var child1 = new Child('taimur', ["car", "star parents"], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
        }
        CheckingAccount.prototype.addBalance = function (newvalue) {
            this.balance += newvalue;
        };
        return CheckingAccount;
    }());
    //object creation directly from interface is allowed
    var account = { id: 34, balance: 8000, transactions: [100, 200], addBalance: function (newvalue) { this.balance += newvalue; } };
    console.log(account);
    account.addBalance(400);
    console.log(account);
    var amt = 2000;
    var transaction1 = { date: new Date(), amount: amt, description: "Deposit" };
    var EnhancedTransaction = /** @class */ (function () {
        function EnhancedTransaction(date, amount, description) {
            this.date = date;
            this.amount = amount;
            this.description = description;
        }
        return EnhancedTransaction;
    }());
    // combining types
    var x = void 0;
    var s1 = { name: "abc", role: "teacher", id: 1, salary: 20000 };
    var t1 = 23;
    var t2 = true;
    // let t3: type3 = "abc";
}
