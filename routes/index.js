const express = require('express')
const router = express.Router()
const Santri = require('../models/Santri')

//CREATE
router.post('/', async (req, res) => {            
    const santriPost = new Santri({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const santri = await santriPost.save()
        res.json(santri)
    } catch (err) {
        res.json({message: err})
    }
})

//READ
router.get('/', async (req, res) => {    
    try {
        const santri = await Santri.find()
        res.json(santri)
    } catch (err) {
        res.json({message: err})
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    try {
        const update = await Santri.updateOne({ _id: req.params.id }, {
            nama: req.body.nama,
            alamat: req.body.alamat
        })

        res.json(update)
    } catch (err) {
        res.json({message: err})        
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroy = await Santri.deleteOne({ _id: req.params.id })
        res.json(destroy)
    } catch (err) {
        res.json({message: err})        
    }
})

module.exports = router