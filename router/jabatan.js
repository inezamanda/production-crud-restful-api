const express = require('express')
let jabatan = require('../db/jabatan.json')
const route = express.Router();


route.post('/api/v1/jabatan', (req, res) => {

    console.log(req.body)
    const {
        nama_jabatan
    } = req.body


    const id = jabatan[jabatan.length - 1].id + 1
    const posts = {
        id,
        nama_jabatan
    }

    jabatan.push(posts)
    res.status(201).json(jabatan)
})

route.get('/api/v1/jabatan', (req, res) => {
    res.status(200).json(jabatan)
})

route.get('/api/v1/jabatan/:id', (req, res) => {
    const posts = jabatan.find(i => i.id === +req.params.id)
    res.status(200).json(posts)
})




route.delete('/api/v1/jabatan/:id', (req, res) => {
    jabatan = jabatan.filter(i => i.id !== +req.params.id)
    res.status(200).json(jabatan)
})


route.put('/api/v1/jabatan/:id', (req, res) => {
    const id = req.params.id
    jabatan.filter(posts => {
        if (jabatan.id == id) {
            posts.nama_jabatan = req.body.nama_jabatan
            return posts
        }
    })
    res.status(200).json(jabatan)
})

module.exports = route;