const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('Initialization', () => {
        it("should create an engineer with name, id, email, and github", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.name).toEqual('Ricky');
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual('Ricky@example.com');
            expect(engineer.github).toEqual('exampleEngi');
        });
    })

    describe('getName', () => {
        it("should return engineer's name", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.getName()).toEqual('Ricky');
        })
    })

    describe('getId', () => {
        it("should return engineer's id", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("should return engineer's email", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.getEmail()).toEqual('Ricky@example.com');
        })
    })

    describe('getGithub', () => {
        it("should return engineer's github user name", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.getGithub()).toEqual('exampleEngi');
        })
    })

    describe('getRole', () => {
        it("should return engineer's role", () => {
            const engineer = new Engineer('Ricky', 3, 'Ricky@example.com', 'exampleEngi');
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})