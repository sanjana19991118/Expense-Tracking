const express = require('express')
const router = express.Router()
const upload = require('../app/middlewares/upload')
const usersController = require('../app/controllers/usersController')
const categoryControllers = require('../app/controllers/catergoriesControllers')
const expenseController = require('../app/controllers/expenseController')
const profileController = require('../app/controllers/profileController')
const userAuthentication = require('../app/middlewares/userAuthentication')



//user details
router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', userAuthentication,  usersController.account)
router.put('/api/users/update/:id' , userAuthentication,upload.single("avatar"), usersController.update )

//budget 
router.get('/api/users/budget' , userAuthentication, usersController.budget)
router.put('/api/users/budgetUpdate/:id' , userAuthentication, usersController.budgetUpdate )

//category
router.get('/api/category', userAuthentication , categoryControllers.list)
router.post('/api/category', userAuthentication, categoryControllers.create)
router.get('/api/category/:id' , userAuthentication, categoryControllers.show)
router.delete('/api/category/:id' , userAuthentication, categoryControllers.delete)


//expense 
router.get('/api/expense' , userAuthentication, expenseController.list)
router.post('/api/expense', userAuthentication, expenseController.create)
// router.get('/api/expense/:id' , userAuthentication, expenseController.show)
router.get('/api/expense/show/:id' , userAuthentication, expenseController.showOne)
// expense search
router.get('/api/expense/search',  userAuthentication, expenseController.search)
router.put('/api/expense/update/:id', userAuthentication, expenseController.update)
router.delete('/api/expense/softDelete/:id', userAuthentication, expenseController.softDelete)
router.delete('/api/expense/delete/:id', userAuthentication, expenseController.delete)
router.get('/api/expense/softRestore/:id', userAuthentication, expenseController.softRestore)
router.get('/api/expense/softExpense' , userAuthentication, expenseController.soft)


// //profile 
router.get('/api/user/profile', userAuthentication, profileController.list)
router.post('/api/user/profile/:userId', userAuthentication, profileController.create)
router.delete('/api/user/profile/delete/:id', userAuthentication, profileController.delete)
router.put('/api/user/profile/update', userAuthentication, upload.single("avatar") , profileController.updateInfo)
router.put('/api/user/profile/upload', userAuthentication, upload.single("avatar"), profileController.update)




module.exports = router