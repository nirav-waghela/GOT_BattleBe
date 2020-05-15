const gotData = require('../models/got')


const battleController = {
    getAllLocation: async function (req, res) {
        try {
            let response = await gotData.find({}, { location: 1, _id: 1 })
            res.status(200).json({
                success: true,
                message: "All location",
                data: response
            })
        }
        catch (err) {
            console.warn(err)
            res.status(400).json({
                success: false,
                message: 'An error occured'
            })
        }
    },

    getBattleCount: async function (req, res) {
        try {
            let response = await gotData.countDocuments();
            res.status(200).json({
                success: true,
                message: "Battle Count",
                data: response
            })
        }
        catch (err) {
            console.warn(err)
            res.status(400).json({
                success: false,
                message: "An error occured"
            })
        }
    },

    getSearchResult: async function (req, res) {
        const result = []
        try {
            const regex = new RegExp(req.query.name, "gi");
            let response = await gotData.find({ name: { $in: [regex] } })
            console.log(response)
            response.map(e => {
                let obj = {
                    id: e._id,
                    name: e.name
                }
                result.push(obj)
                obj = {}
            })
            console.log(result)
            res.status(200).json({
                success: true,
                message: 'Search Results',
                data: result
            })
        }
        catch (err) {
            console.warn(err)
            res.status(400).json({
                success: false,
                message: 'An error occured'
            })
        }
    },

    getDataById: async function (req, res) {
        try {
            let response = await gotData.find({ name: req.query.name })
            console.log(response)
            res.status(200).json({
                success: true,
                message: 'Battle Details',
                data: response
            })
        }
        catch{

        }
    }
}

module.exports = battleController;