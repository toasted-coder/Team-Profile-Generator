const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {
        it("should create a manager with name, id, email, and officeNumber", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.name).toEqual('Richard');
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual('richard@example.com');
            expect(manager.officeNumber).toEqual(9);
        });
    })

    describe('getName', () => {
        it("should return manager's name", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.getName()).toEqual('Richard');
        })
    })

    describe('getId', () => {
        it("should return manager's id", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.getId()).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it("should return manager's email", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.getEmail()).toEqual('richard@example.com');
        })
    })

    describe('getOfficeNumber', () => {
        it("should return manager's office number", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.getOfficeNumber()).toEqual(9);
        })
    })

    describe('getRole', () => {
        it("should return manager's role", () => {
            const manager = new Manager('Richard', 1, 'richard@example.com', 9);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
})