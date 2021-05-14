const express = require("express")
const smurfsRouter = require("./smurfs/smurf-router")

const server = express()
server.use(express.json())

server.use("/smurfs", smurfsRouter)
server.get('/', (req, res) => {
    res.json({
        message: "Welcome to Smurf Village."
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong.",
    })
})

module.exports = server