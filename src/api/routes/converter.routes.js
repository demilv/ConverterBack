const express = require('express');
const {getAllConverters, postConverter, deleteConverter} = require('../controllers/converter.controller');
const router = express.Router();

router.get("/", getAllConverters)

router.post("/newConverter", postConverter)

router.delete("/delConverter/:id", deleteConverter)

module.exports = router;