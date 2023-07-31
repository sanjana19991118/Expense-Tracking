const Category = require('../models/categories')
const categoryControllers = {}

categoryControllers.list = (req,res) => {  
    Category.find()
      .then((category) => {
         // console.log(category)
         res.json(category)
      })
      .catch((err) => {
         res.json(err)
      })
}

categoryControllers.create = (req,res) => {
   const body = req.body
   const category = new Category(body)
   // note.userId = req.userId
   category.userId = req.userId
   category.save()
     .then((category) => {
         // console.log(category)
         res.json(category)
     })
     .catch((err) => {
       res.json(err)
     })
}

categoryControllers.show = (req,res) => {
   const id = req.params.id
   Category.findOne({_id: id, userId: req.userId})
       .then((category) => {
      //   console.log(req.userId)
          res.json(category)
       })
       .catch((err) => {
          res.json(err)
       })
}

categoryControllers.delete= (req,res) => {
   // console.log("del", req.userId)
   const id = req.params.id
   Category.findByIdAndDelete({_id: id, userId: req.userId})
       .then((category) => {
         // console.log(category)
          res.json(category)
       })
       .catch((err) => {
          res.json(err)
       })
}




module.exports = categoryControllers