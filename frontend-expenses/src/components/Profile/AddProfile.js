import React, { useState, useEffect } from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {startUpdateUserProfile} from '../../actions/profileAction'
import {startUpdateUserProfileImage} from '../../actions/profileAction'
import axios from 'axios'
import ProfileDetails from './ProfileDetails'

const AddProfile = () => {
    const profileDetails = useSelector((state) => {
        return state.profile.profile
    })
     const [open, setOpen] = useState(false);


    const [modal, setModal] = useState(false)
    const [file, setFile] = useState(profileDetails.avatar ? profileDetails.avatar : {})
    const [name, setName] = useState(profileDetails.name ? profileDetails.name : '')
    const [age, setAge] = useState(profileDetails.age ? profileDetails.age: ' ')
    const [occupation, setOccupation] = useState(profileDetails.occupation ? profileDetails.occupation : '')
    const [bio, setBio] = useState(profileDetails.bio ? profileDetails.bio : '')
    const [formError, setFormError] = useState({})

    const errors = {}

    const runValidation = () => {
        if(name.trim().length === 0) {
            errors.name = "name is required"
        } else if (age.trim().length === 0) {
            errors.age = "age is required"
        } else if (occupation.trim().length === 0) {
            errors.occupation = "occupation is required"
        } else if (bio.trim().length === 0) {
            errors.bio = "bio is required"
        }

    }

    const dispatch = useDispatch()

    const showModal = () => {
        setModal(!modal)
    }

    const handleOk = () => {
        setModal(false)
    }

    const handleCancel = () => {
        setModal(false)
    }

    const handleChange = (e) => {
      const attr = e.target.name
      if(attr === "name") {
        setName(e.target.value)
      } else if (attr === "age") {
        setAge(e.target.value)
      } else if (attr === 'occupation') {
        setOccupation(e.target.value)
      } else if (attr === 'bio') {
        setBio(e.target.value)
      } else if (attr === 'file') {
         setFile(e.target.files[0])
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if(Object.keys(errors).length === 0) {
            setFormError({})
            const formData = new FormData()
            formData.append("name", name)
            formData.append("age", age )
            formData.append("occupation" , occupation)
            formData.append("bio", bio)
            dispatch(startUpdateUserProfile(formData, profileDetails._id))
        } else {
            setFormError(errors)
        }
    }

    const handlePictureSubmit = () => {
        const formData = new FormData()
        formData.append("avatar", file)
        console.log('append', formData)
        dispatch(startUpdateUserProfileImage(formData, profileDetails._id))
    }

    useEffect(() => {
        setName(profileDetails.name)
        setAge(profileDetails.age)
        setOccupation(profileDetails.occupation)
        setBio(profileDetails.bio)
        setFile(profileDetails.avatar)
        // setId(profileList.id)
    }, [profileDetails._id, profileDetails.name, profileDetails.age, profileDetails.occupation, profileDetails.bio, profileDetails.avatar])

    return (
        <div>
            {
                modal ? (  <Modal 
               visible={modal}
               onOk={handleOk}
               onCancel={handleCancel} 
            >

                <form  onSubmit={handleSubmit} method="post" action="/save-image" enctype="multipart/form-data"> 
                {/* to say we accept this kind of input */}
                    
                    <label>Name</label>
                    <input type="text" value={name} name="name" onChange={handleChange} />


                    <label>Age</label>
                    <input type="text" value={age} name="age" onChange={handleChange} />

                    <label>Occupation</label>
                    <input type="text" value={occupation} name="occupation" onChange={handleChange} />

                    <label>Bio</label>
                    <input type="text" value = {bio} name="bio" onChange={handleChange} />
                    <button type="secondary" htmlType="submit">
                        upload
                    </button>
                </form>
                {/* <img /> */}
                <form onSubmit={handlePictureSubmit}>
                    <input type="file" placeholder="Choose your profile photo" name="file" onChange={handleChange} />
                    <button type="secondary" htmlType="submit">
                        upload 
                    </button>
                </form>
                {/* <div>
                    <button onClick={showModal}>Add Profile</button>
                </div> */}
                <div className="edit">
                    <button onClick={showModal}>Edit</button>
                </div>
            </Modal> ) : <ProfileDetails />
            }
           
        </div>
    )
}

export default AddProfile