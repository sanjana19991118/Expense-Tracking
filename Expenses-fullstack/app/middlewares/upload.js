const multer = require("multer");
const path = require("path");
const Storage = multer.diskStorage({
  destination: function (req, file, cb) { // cb - callback function
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) { // to include specific file name
    let ext = path.extname(file.originalname); // original name of the file, path module
    cb(null, Date.now() + ext);
  },
});


// middleware
const upload = multer({
  storage: Storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" ||  file.mimetype == 'image/jpeg') {
      callback(null, true);
    } else {
      //console.log({ errors: "only jpg and png file supported" });
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});
module.exports = upload;



// const path = require('path')
// const multer = require('multer')

// var storage =  multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "uploads/")
//     },
//     filename: function(req,file,cb){
//         let ext = path.extname(filter.originalname)
//         cb(null,Date.now() + ext)
//     }
// })

// // send data as multipart formData
// var upload = multer({
//     storage: storage,
//     fileFilter: function(req,file,callback) {
//         if(file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//             callback(null,true)
//         }
//         else {
//             console.log(" upload only jpg or png file, cannot upload files with other extension !!! ")
//             callback(null, false)
//         }
       
//         },  
//         limits : {
//             fileSize: 1024 * 1024 * 2
//     }
// })
// // support only 2MB file and only jpg and png file
// module.exports = upload