const express = require('express');
const route = express.Router();
let pegawais = require('../db/pegawai.json')

//get pegawai
route.get('/api/v1/pegawai', (req, res) => {
    res.status(200).json(pegawais)
})

//get all pegawai
route.get('/api/v1/pegawai/:nik_pegawai', (req, res) => {
    const pegawai = pegawais.find(i => i.nik_pegawai === +req.params.nik_pegawai)
    res.status(200).json(pegawai)
})

//tambah pegawai
route.post('/api/v1/pegawai', (req, res) => {
    console.log(req.body)
    const { nama_pegawai } = req.body
    const nik_pegawai = pegawais[pegawais.length - 1].nik_pegawai + 1
    const pegawai = {
        nik_pegawai,
        nama_pegawai
    }
    pegawais.push(pegawai)
    res.status(201).json(pegawais)
})

//ubah pegawai
route.put('/api/v1/pegawai/:nik_pegawai', (req, res) => {
    const nik_pegawai = req.params.nik_pegawai
    pegawais.filter(pegawai => {
        if (pegawai.nik_pegawai == nik_pegawai) {
            pegawai.nama_pegawai = req.body.nama_pegawai
            return pegawai
        }
    })
    res.status(200).json(pegawais)
})

//hapus pegawai
route.delete('/api/v1/pegawai/:nik_pegawai', (req, res) => {
    pegawais = pegawais.filter(i => i.nik_pegawai !== +req.params.nik_pegawai)
    res.status(200).json(pegawais)
})

module.exports = route;