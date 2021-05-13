const db = require("../data/config")

function find() {
    return db("smurfs")
}

function findById(id) {
    return db("smurfs").where("id", id).first()
}

async function add(data) {
    const [id] = await db("smurfs").insert(data)
    return findById(id)
}

function remove(id) {
    return db("smurfs").where("id", id).del()
}

module.exports = {
    find,
    findById,
    add,
    remove,
}