There are two sections to the app, settings and expense dashboard.
User can define a budget in settings in addition to defining different categories in which expenses can be made. Both of these options are in settings page.
Once this setup is done, user can add expenses in any of the categories. A summary page shows the expense trend.


Must have features: 
1. Add expense
2. Edit Expense 
3. Delete Expense ( soft delete, show striked or some other indication that it's deleted, don't remove the entry from the database)
4. Expense and budget summary with chart
5. Settings page
6. User Authentication - Register, Login & Logout 

Good to have extra features:
1. Basic user profile with name, photo and occupation only.
2. Undo delete expense
3. Upload invoice or any image along with expense
4. Download invoice from expense listing.
5. List all deleted expenses 

Things to note: 

- Frontend should be written in React .
- Use Node JS + Express + MongoDB for backed.
- You can use Ant Design or Bootstrap for the UI components.

- https://www.npmjs.com/package/mongoose-delete


### version 1

# User 
* _id 
* username
* email
* password
* createdAt
* updatedAt


Register, login , logout
password ecrypt , token generate 

# Budget 
* _id
* amount 
* userId
[ timestamps ]
* createdAt 
* updatedAt
  

 for a given user how many budgets can be created - 1

 can we delete a budget 

 budget can be updated
 default value - 0

# Category
* _id
* name 
* userId
* timestamps 


Category.find({ userId : req.userId })

# Expense 
* _id
* name 
* amount 
* description 
 * expenseDate
* categoryId
* userId - token
* createdAt 
* updatedAt

Expense.find({ userId: req.userId }) - in the middleware 

* Category is a drop down
* while adding the expense, should we send the name of the category at the back end NO - we need to send the ID of the category at the backend 
* value prop we will send the id 
* name in btw should be the ID 
* we are not  using id 
* its token based authentication 
* token is sent to the server 
* server and the express middleware will decode the token, extract the user object 
*  assign the Id to the req object
*  then call the next middleware function 
*  through which the id is going to be set 


### version 2 
# profile 

* name 
 * age 
* bio 
 * profileUrl - multer - handle file uploads 
 [time stamp]
 * createdAt
 * updatedAt


(embed profile to user)

## Expense 
* invoiceUrl 
* React for front end 
* Redux 
* antDesign 
* material UI 
* reactStrap 
* TailCSS
 



