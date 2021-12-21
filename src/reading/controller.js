const prisma = require("../utils/database")

const createReadingList = async (req, res) => {
    console.log("body: ", req.body)

    try {
        const addToList = await prisma.reading.create({
            data: {
                title: req.body.title,
                authors: req.body.authors,
                publisher: req.body.publisher
            }
        })
        res.json(addToList)
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

const getReadingList = async (req, res) => {
    try {
        const getAllBooks = await prisma.reading.findMany({})
        res.json(getAllBooks)
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

module.exports = {createReadingList, getReadingList}