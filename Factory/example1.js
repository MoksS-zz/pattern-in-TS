function say () {
    console.log(`${this.type}: rate ${this.rate}/hour`);
};

class FullTime {
    rate = '$12';   
};

class PartTime {
    rate = '$11';
};

class Temporary {
    rate = '$10'; 
};

class Contractor {
    rate = '$15';
};

class Employee {
    static create(type) {
        let employee;

        if (type === 'fulltime') {
            employee = new FullTime();
        } else if (type === 'parttime') {
            employee = new PartTime();
        } else if (type === 'temporary') {
            employee = new Temporary();
        } else if (type === 'contractor') {
            employee = new Contractor();
        }

        employee.type = type;
        employee.say = say;
        
        return employee;
    };
};

const fulltime = Employee.create('fulltime');
const parttime = Employee.create('parttime');
const temporary = Employee.create('temporary');
const contractor = Employee.create('contractor');

fulltime.say();
parttime.say();
temporary.say();
contractor.say();