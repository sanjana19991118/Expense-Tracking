// const User = require('../models/user')
const jwt = require("jsonwebtoken")
const userAuthentication = function(req, res, next) {
    // verify token
    // next 
    const token = req.headers['authorization']
    // console.log(token) 
    let tokenData
    if(token) {
        try {
           tokenData = jwt.verify(token, process.env['JWT_SECRET'])
        //  console.log('t',tokenData)
           req.userId = tokenData.id
        //    console.log('user Auth middleware', req.userId)
           next()
        }
        catch(e) {
            res.status(400).json(e)
        }
    }
    else {
        res.status(401).json({
            error: 'no token provided'
        })
    }
}


module.exports = userAuthentication