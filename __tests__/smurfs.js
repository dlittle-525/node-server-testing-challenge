const supertest = require("supertest")
const server = require("../server")


describe("smurfs integration tests", () => {
    it("gets all smurfs", async () => {
        const res = await supertest(server).get(".smurfs")
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(4)
        expect(res.body[0].name).toBe("smurfette")
    })

    it("gets smurf by ID", async () => {
        const res = await supertest(server).get("smurfs/1")
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(1)
        expect(res.body.name).toBe("papa smurf")
    })

    it("returns a 404 for a missing smurf", async () => {
        const res = await supertest(server).get("/smurfs/50")
        expect(res.status).toBe(404)
    })

    it("creates a new smurf", async () => {
        const res = await supertest(server)
            .post("/smurfs")
            .send({ name: "clumsy smurf" })
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("clumsy smurf")
        expect(res.body.id).toBeDefined()
    })

    it("deletes a smurf", async () => {
        const res = await supertest(server).delete("/smurfs/3")
        expects(res.status).toBe(204)
    })
})