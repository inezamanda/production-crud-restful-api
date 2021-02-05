const express = require('express')
const produksiRouter = require("./router/produksi")
const pegawaiRouter = require("./router/pegawai")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(produksiRouter)
app.use(pegawaiRouter)


//middleware
app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
        errors: "Are you lost?"
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        status: "fail",
        errors: err.message
    })
})

app.listen(9999, () => {
    console.log('Server nyala di port 9999!')
})