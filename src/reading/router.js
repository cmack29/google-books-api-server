const { Router } = require("express")

const router = Router()

const {createReadingList,
       getReadingList} = require("./controller")

router.post("/", createReadingList)

router.get("/", getReadingList)

module.exports = router