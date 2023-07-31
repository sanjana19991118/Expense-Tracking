const User = require('../models/user')
const Budget = require('../models/budget')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res) => {
    const body = req.body
    const users = new User(body)
   //  console.log(users)
    users.save() 
       .then((user) => { 
          const budget = new Budget({ userId: user._id })
             budget.save()
         //  console.log('b', budget)
         //  console.log(user)
          res.json(user)
        })
       .catch((err) => {
          res.json(err.message)
       })
}



usersController.login = (req,res) => {
    const body = req.body
   //  console.log(req.body)
    User.findOne({ email : body.email })
            .then((user) => {
               // console.log(user)
               if(user) {
                  // res.json(user)
                  bcrypt.compare(body.password, user.password)
                     .then((result) => {
                          if(result) {
                             const token = jwt.sign({ id: user._id }, process.env['JWT_SECRET'] )
                           //   console.log(token, '___________')
                             res.json({ // consise properties
                               token : `${token}` // Bearer used as per the community
                             })
                          }
                          else {
                            res.json({
                               errors: 'invalid email or password'
                            })
                          }
                          
                     })
               }
               else {
                  res.json({
                      errors: 'invalid email or password'
                  })
               }
            })
            .catch((err) => {
               res.json(err)
            })
   
}

// usersController.account = (req,res) => {
//    console.log('account' , req.user)
//    res.json(req.user)
// }

usersController.account = function(req,res) {
   // verify token
   // console.log(req)
   // console.log(req.userId)
   User.findById(req.userId)
     .then((user) => {
      //   console.log('account..', user)
        res.json(user)
     })
     .catch((err) => {
      //   res.status(400).json(err)
      res.json(err)
     })
}

// usersController.showbudget = (req,res) => {
//     Budget.findOne({})
// }



usersController.budget = (req,res) => {
//   console.log('id check', req.userId)
   // const id = '6430fd95d4cc9ca1d3d30a9d'
   Budget.findOne({  userId : req.userId })
     .then((budget) => {
      // console.log('bud', budget)
      res.json(budget)
   })
   .catch((err) => {
       res.json(err.message)
   })

   // res.json(req.userId)
   // const id = "642ffdedc4f23b882d413065"
}


usersController.update = (req, res) => {
  if (req.file) {
    const body = req.body;
    body.avatar = req.file.path;
    User.findOneAndUpdate({_id: id, userId: req.userId}, { $set: body } , { new:true, runValidators: true})
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ errors: "Upload a jpj or png file" });
  }
};

usersController.budgetUpdate = (req,res) => {
   // console.log(req)
   const id = req.params.id
   // console.log('id', id)
   const body = req.body 
   console.log('body', body)
   // console.log('pu', req.userId)
   Budget.findOneAndUpdate({_id: id, userId: req.userId}, { $set: body } , { new:true, runValidators: true})
     .then((budget) => {
      //   console.log(budget)
        res.json(budget)
     })
     .catch((err) => {
       res.json(err.message)
     })
}
module.exports = usersController


// const User = require('../models/user')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const usersCltr = {}
// usersCltr.register = (req,res) => {
//     const body = req.body 
//     const user = new User(body)
//      user.save()
//        .then((user) => {
//           console.log(user)
//           res.json(user)
//        })
//        .catch((err) => {
//          res.json(err)
//        })

// }

// usersCltr.login = (req,res) => {
//    const body = req.body
//    // res.json(body)
//    // find the user based on his email
//       // if  user with valid email is  present 
//          // compare with the excrypted password
//          // if valid password  
//              // respond / generate a token for the user 
//       // else 
//           // respond with invalid email or password 
//       // else 
//           // respond with invalid email or password 
//       User.findOne({ email : body.email })
//             .then((user) => {
//                if(user) {
//                   // res.json(user)
//                   bcrypt.compare(body.password, user.password)
//                      .then((result) => {
//                           if(result) {
//                              const token = jwt.sign({ id: user._id }, process.env['JWT_SECRET'] )
//                              res.json({ // consise properties
//                                token : `Bearer ${token}` // Bearer used as per the community
//                              })
//                           }
//                           else {
//                             res.json({
//                                errors: 'invalid email or password'
//                             })
//                           }
                          
//                      })
//                }
//                else {
//                   res.json({
//                       errors: 'invalid email or password'
//                   })
//                }
//             })
//             .catch((err) => {
//                res.json(err)
//             })
   
// }

// usersCltr.account = function(req,res) {
//    // verify token
//    User.findOne({_id : req.userId })
//      .then((user) => {
//         console.log(req.userId)
//         res.json(user)
//      })
//      .catch((err) => {
//       //   res.status(400).json(err)
//       res.json(err)
//      })
// }

// //ultr.orders = function(){// verify token}
// //ultr.address = function(){// verify token}
// // ultr.payments = function(){ // verify token}

// module.exports = usersCltr
