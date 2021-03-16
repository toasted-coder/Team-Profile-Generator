const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('Initialization', () => {
        it("should create an intern with name, id, email, and school", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.name).toEqual('Carl');
            expect(intern.id).toEqual(4);
            expect(intern.email).toEqual('carl@berkeley.edu');
            expect(intern.school).toEqual('UC Berkeley');
        });
    })

    describe('getName', () => {
        it("should return an intern's name", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.getName()).toEqual('Carl');
        })
    })

    describe('getId', () => {
        it("should return an intern's id", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.getId()).toEqual(4);
        })
    })

    describe('getEmail', () => {
        it("should return an intern's email", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.getEmail()).toEqual('carl@berkeley.edu');
        })
    })

    describe('getSchool', () => {
        it("should return an intern's school", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.getSchool()).toEqual('UC Berkeley');
        })
    })

    describe('getRole', () => {
        it("should return an intern's role", () => {
            const intern = new Intern('Carl', 4, 'carl@berkeley.edu', 'UC Berkeley');
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})
