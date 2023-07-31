const Profile = require('../models/profile')
const profileController = {}


profileController.list = (req,res) => {
    Profile.find()
        .then((profile) => {
            console.log(profile)
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })
}

// profileController.create = (req,res) => {
//    const file = req.file
//    console.log(req.file)
//    const profile = new Profile(file)
//    profile.userId = req.userId
// //    if(req.file) {
// //       profile.avatar = req.file.path
// //    }
//    profile.save()
//         .then((profile) => {
//             res.json(profile)
//         })
//         .catch((err)=> {
//             res.json(err)
//         })
// }

profileController.create = (req, res) => {
    console.log('ID', req.params)
    const profile = new Profile()
    profile.userId = req.params.userId
    profile.save()
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })
}


// profileController.show = (req,res) => {
//     const id = req.params.id
//     Profile.findOne({_id: id, userId: req.userId})
//         .then((profile) => {
//             res.json(profile)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

profileController.show = async (req, res) => {
    try {
      const userId = req.user.id
      const profile = await Profile.findOne({ userId: userId })
      if (!profile) {
        res.status(404).json()
        return
      }
      res.json(profile)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  


profileController.updateInfo = (req, res) => {
    const body = req.body
    console.log(body)
    Profile.findOneAndUpdate({ userId: req.userId}, body, { new: true, runValidations: true })
        .then((profile) => {
            res.json(profile)
        })
        .catch((errors) => {
            res.json(errors)
        })
}

profileController.update = (req,res) => {
  // console.log(req.file.path)
   if(req.file) {
    const body = req.body;
    // console.log(body)
    body.avatar= req.file.path;
    console.log(avatar)
    Profile.findOneAndUpdate({ userId: req.userId}, { new:true, runValidators: true})
      .then((pic) => {
        console.log(pic)
        res.json(pic);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ errors: "Upload a jpj or png file" });
  }
  //  const id = req.params.id
  //  const body = req.body 
  //  Profile.findOneAndUpdate({_id: id, userId: req.userId}, { $set: body } , { new:true, runValidators: true})
  //    .then((profile) => {
  //     //   console.log(profile)
  //       res.json(profile)
  //    })
  //    .catch((err) => {
  //      res.json(err.message)
  //    })
}

profileController.delete = (req,res) => {
    const id = req.params.id
    Profile.findByIdAndDelete({_id: id, userId: req.userId})
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports = profileController

// multipart form data
//postman - use form data