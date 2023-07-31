import React, { useState } from "react";
import { Modal } from 'antd'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startUpdateUserProfile } from "../../actions/profileAction"


const EditUserProfile = (props) => {

    const profile = useSelector((state) => {
        return state.profile.profile
    })

    const [file, setFile] = useState(profile.avatar)
    const [name, setName] = useState(profile.name)
    const [age, setAge] = useState(profile.age)
    const [occupation, setOccupation] = useState(profile.occupation)
    
    const [bio, setBio] = useState(profile.bio)



     const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'occupation') {
            setOccupation(e.target.value)
        } else if (e.target.name === 'age') {
            setUserName(e.target.value)
        } else if (e.target.name === 'bio') {
            setEmail(e.target.value)
        } else if (e.target.name === 'avatar') {
            setFile(e.target.files[0])
        }
    }

    const dispatch = useDispatch()



    return (
        <div>
            <form>
                <label>Name : </label>
                <input type="text"/>
                <br/>
                <label>Age</label>
                <input  type="text"/>
                <br/>
                <label>Occupation</label>
                <input type="text"/>
                <br/>
                 <label>Bio</label>
                <input type="text"/>
                <br/>
               
            </form>
        </div>
    )

}


export default EditUserProfile