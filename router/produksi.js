const express = require('express')
const route = express.Router()
const produksi = require('../db/produksi.json')


route.get('/api/v1/produksi', (req, res) => {
    res.status(200).json(produksi)
})

route.get('/api/v1/produksi/:id', (req, res) => {
    const produk = produksi.find(i => i.id === +req.params.id)
    res.status(200).json(produk)
})

route.post('/api/v1/produksi', (req, res) => {
    const {
        nama,
        tanggal
    } = req.body

    const id = produksi[produksi.length - 1].id + 1
    const produk = {
        id,
        nama,
        tanggal
    }

    produksi.push(produk)

    res.status(201).json(produk)
})

route.delete('/api/v1/produksi/:id', (req, res) => {
    const produk = produksi.filter(i => i.id !== +req.params.id)
    res.status(200).json(produk)
})

route.put('/api/v1/produksi/:id', (req, res) => {
    const id = req.params.id
    produksi.filter(produk => {
        if (produk.id == id) {
            produk.nama = req.body.nama
            produk.tanggal = req.body.tanggal
            return produk
        }
    })
    res.status(200).json(produksi)
})

module.exports = route;