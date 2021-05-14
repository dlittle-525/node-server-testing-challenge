const express = require("express")
const Smurfs = require("./smurf-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Smurfs.find())
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const smurf = await Smurfs.findById(req.params.id)
        if (!smurf) {
            return res.status(404).json({
                message: "Smurf not found",
            })
        }

        res.json(smurf)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const smurf = await Smurfs.add({
            name: req.body.name,
        })

        res.status(201).json(smurf)
    } catch (err) {
        next(err)
    }

    router.delete("/:id", async (req, res, next) => {
        try {
            await Smurfs.remove(req.params.id)
            
            res.status(204).end()
        } catch (err) {
            next(err)
        }
    })
})

module.exports = router