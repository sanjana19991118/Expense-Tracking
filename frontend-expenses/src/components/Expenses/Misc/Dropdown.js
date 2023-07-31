import React from 'react'
import {Select, Space, Typography} from "antd"
// import { useSelector } from 'react-redux'
import { useState } from 'react'
function Dropdown(props) {
    const { categoryData, handleChangeId } = props
    const [categories, setCategories] = useState(null)

    console.log('sas',categoryData)
    // // const CATEGORY = ["food", "electronics", "home appliances","clothes"]

    // const category = useSelector((state) => {
    //      return state.category.category
    // })
    // console.log('c', category)
    return <div className="">
        {/* <Typography.Title>Select Category Dropdown</Typography.Title> */}
        <Space direction="horizontal" size={12}>
        <Typography.Text>Select Category:</Typography.Text>
        <Select  value={categoryData}
                 onChange={handleChangeId} 
                 placeholder="Select Category"
                 options={categoryData.map((category) => {
                   console.log('l', category)
                    return {
                   label : `${categories}`,
                   value : category
                   }
             })}
             style={{width: "200px"}}/>
            {/* <Select placeholder="Select Category..."/> */}
        </Space> 
    </div>;
}

export default Dropdown