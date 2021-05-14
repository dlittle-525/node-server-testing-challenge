const supertest = require("supertest")
const server = require("../server")

describe("server integration tests", () => {
    it("gets welcome message", async ()=> {
        const res = await supertest(server).get("/")
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome to Smurf Village.")
    })
})