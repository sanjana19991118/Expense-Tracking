const Expense = require('../models/expenses')
const expenseController = {}

expenseController.list = (req,res) => {  
    Expense.find()
      .then((expense) => {
         // console.log(expense)
         res.json(expense)
      })
      .catch((err) => {
         res.json(err)
      })
}

expenseController.create = (req,res) => {
   const body = req.body
   const exp = new Expense(body)
   // note.userId = req.userId
   exp.userId = req.userId
   exp.save()
     .then((expense) => {
         // console.log(expense)
         res.json(expense)
     })
     .catch((err) => {
       res.json(err)
     })
}


expenseController.show = (req,res) => {
   // const id = req.params.id
   Expense.find({_id: id, userId: req.userId})
       .then((expense) => {
      //   console.log(req.userId)
          res.json(expense)
       })
       .catch((err) => {
          res.json(err)
       })
}

expenseController.showOne = (req,res) => {
   const id = req.params.id
   Expense.findOne({_id: id, userId: req.userId})
       .then((expense) => {
      //   console.log(req.userId)
          res.json(expense)
       })
       .catch((err) => {
          res.json(err)
       })
}



//  menuItemsController.show = (req,res) => { // search 
//      const { menuName } = req.query
//      console.log(menuName)
//      MenuItems.find({ 'menuName' : { $regex : menuName , $options: "i"}})
//         .then((menu) => {
//             // console.log(menu)
//             res.json(menu)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
//  }

expenseController.search = (req,res) => { // search 
   console.log('hi there')
   // console.log("eu", req.query)
   const { name } = req.query
   console.log(name)
     Expense.find({ 'name' : { $regex : name , $options: "i" }})
        .then((expense) => {
            console.log('expppppp', expense)
            res.json(expense)
        })
        .catch((err) => {
            res.json(err)
        })
}



//  menuItemsController.show = (req,res) => { // search 
//      const { menuName } = req.query
//      console.log(menuName)
//      MenuItems.find({ 'menuName' : { $regex : menuName , $options: "i"}})
//         .then((menu) => {
//             // console.log(menu)
//             res.json(menu)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
//  }


// expenseController.search=(req,res)=>{
//     const search=JSON.parse(req.params.name)
//     console.log(search)
//     if(!search.string){
//         Expense.find({userId:search.userId})
//             .then(data=>{
//                 res.json(data)
//             })
//             .catch(e=>{
//                 res.json(e)
//             })
//     }
//     else{
//         Expense.find({userId:search.userId})
//         .then(expenses=>{
//             const result=expenses.filter(ele=>ele.name.includes(search.string))
//             res.json(result)
//         })
//         .catch(err=>{
//             res.json(err)
//         })
//     }
    
// }


expenseController.invoiceUpload = (req, res) => {
  if (req.file) {
    const body = req.body;
    const id = req.params.id;
    body.invoicePdf = req.file.path;
    Expense.findByIdAndUpdate({ _id: id, userId: req.user._id }, body, {
      new: true,
      runValidator: true,
    })
      .then((expense) => {
        res.json(expense);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ errors: "Upload a pdf file" });
  }
} 

expenseController.update = (req,res) => {
   console.log('eu',req.userId)
   const id = req.params.id
   const body = req.body
   // console.log(body)
   Expense.findByIdAndUpdate({ _id : id } , body , { userId : req.userId } , {new: true, runValidators : true })
       .then((expense) => {
      //   console.log(req.userId)
          res.json(expense)
       })
       .catch((err) => {
          res.json(err)
       })
}

// menuItemsController.show = (req,res) => { // search 
//      const { menuName } = req.query
//      console.log(menuName)
//      MenuItems.find({ 'menuName' : { $regex : menuName , $options: "i"}})
//         .then((menu) => {
//             // console.log(menu)
//             res.json(menu)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
//  }



expenseController.delete = (req,res) => {
   const id = req.params.id
   console.log(req.userId)
   console.log('id', id)
   Expense.findByIdAndDelete({ _id : id, userId: req.userId})
       .then((expense) => {
        console.log(expense)
          res.json(expense)
       })
       .catch((err) => {
          res.json(err)
       })
}

// ExpenseController.delete = (req, res) => {
//     const id = req.params.id
//     Expense.findOneAndDelete({ _id: id, userId: req.user.id })
//         .then((expense) => {
//             res.json(expense)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }


expenseController.softDelete = (req,res) => {
   const id = req.params.id
   console.log('sd', id)
   Expense.deleteById({ _id: id, userId: req.userId})
      .then((expense) => {
         console.log(expense)
         res.json(expense)
      })
      .catch((err) => {
          res.json(err.message)
      })
}


// expenseController.softDelete = (req, res) => {
//   const id = req.params.id;
//   Expense.deleteById({ _id: id, userId: req.user._id })
//     .then((expense) => {
//       res.json(expense);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// };

expenseController.softRestore = (req,res) => {
    const id = req.params.id
    console.log(id)
    Expense.restore({ _id: id, userId: req.userId}) 
       .then((restore) => {
           console.log(restore)
           res.json(restore)
       })
       .catch((err) => {
          res.json(err.message)
       })  
}

expenseController.soft = (req,res) => {
   Expense.findDeleted({userId: req.userId})
     .then((expense) => {
        console.log('deleted', expense)
        res.json(expense)
     })
     .catch((err) => {
        res.json(err.message)
     })
}


//  expenseController.softDelete = (req,res) => {
    
//  }

module.exports = expenseController
