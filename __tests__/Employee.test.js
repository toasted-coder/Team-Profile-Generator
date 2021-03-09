
const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe('Initialization', () => {
        it("should create an employee with name, id, and email", () => {
            const employee = new Employee('John', 2, 'John@example.com');

            expect(employee.name).toEqual('John');
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual('John@example.com');
        });
    })

    describe('getName', () => {
        it("should return employee's name", () => {
            const employee = new Employee('John', 2, 'John@example.com');

            expect(employee.getName()).toEqual('John');
        })
    })

    describe('getId', () => {
        it("should return employee's id", () => {
            const employee = new Employee('John', 2, 'John@example.com');

            expect(employee.getId()).toEqual(2);
        })
    })

    describe('getEmail', () => {
        it("should return employee's email", () => {
            const employee = new Employee('John', 2, 'John@example.com');

            expect(employee.getEmail()).toEqual('John@example.com');
        })
    })

    describe('getRole', () => {
        it("should return an employee's role", () => {
            const employee = new Employee('John', 2, 'John@example.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})