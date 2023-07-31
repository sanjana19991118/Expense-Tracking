import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from "antd-button-color"
import { Form, Input, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { startAddExpense } from "../../actions/expenseAction"

const CollectionCreateForm = ({ open, onCreate, onCancel }, props) => {
 const { handleChangeAmount, handleChangeId, handleChangeName, handleDateChange, amount, desc, name, date, categoryId, handleChangeDesc, categoryData, handleSubmit} = props
  const [form] = Form.useForm();
  // const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Modal
      open={open}
      title="Add New Expense"
      type="success"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
        onSubmit={handleSubmit}
      >
        <Form.Item
          name="Name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Enter the Expense Name',
            },
          ]}
        >
          <Input type="text" 
                 value={name}
                 onChange={ handleChangeName }/>
        </Form.Item>
         <Form.Item name="amount" label="Amount" rules={[ { 
          required: true,
          message:'Enter the Expense Amount'

         },
         ]}>
          <Input type="text"
                 value={amount} 
                 onChange={handleChangeAmount}/>
        </Form.Item>
        <Form.Item name="date" label="Select Date">
           <DatePicker selected={date} 
                      onChange={handleDateChange}
                      dateFormat='dd/MM/yyyy' 
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                      />
        </Form.Item>
        
        <Form.Item name="description" label="Description">
          <Input type="textarea" 
                 value={desc}
                 onChange={handleChangeDesc} />
        </Form.Item>
           <Dropdown onChange={handleChangeId}  categoryData={categoryData} />
      </Form>
    </Modal>
  );
};
const ExpenseForm = (props) => {
  const { amount: amt , name: nam, _id : serialNo, categoryId: id, date : datepicker, formSubmission, desc : des} = props
  
  const [expenseData, categoryData] = useSelector((state) => {
     return [state.expense.expense, state.category.category]
  })

  // console.log('expense', expense)
  // console.log('cat', categoryData)
 

  const[name, setName] = useState(nam ? nam : '')
  const [amount, setAmount] = useState(amt ? amt : '')
  const [categoryId, setCategoryId] = useState(id ? id : '')
  const [_id] = useState(serialNo ? serialNo : '')
  const [desc, setDesc] = useState(des ? des : '')
  // const [date, setDate] = useState(datepicker ? datepicker : '')
  const [date, setDate] = useState(datepicker ? datepicker : '')

  const dispatch = useDispatch()

  const handleChangeName = (e) => {
     setName(e.target.value)
  }
  
  const handleChangeAmount = (e) => {
     setAmount(e.target.value)
  }

  const handleChangeId = (e) => {
     setCategoryId(e.target.value)
  }

  const handleDateChange = (e) => {
     setDate(e.target.value)
  }

  const handleChangeDesc = (e) => {
      setDesc(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: name,
      amount: amount,
      categoryId : categoryId,
      desc : desc,
      date: date
    }
    dispatch(startAddExpense(formData))
    // formSubmission(formData, _id)
    console.log("formData", formData)
  }

  useEffect(() => {
     setAmount('')
     setCategoryId('')
     setName('')
     setDesc('')
     setDate('')
  }, [expenseData,categoryData])
  
  useEffect(() => {
     setAmount(amount)
     setCategoryId(categoryId)
     setName(name)
     setDesc(desc)
     setDate(date)
  },[amount, name, categoryId, date, desc])

  
  
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  return (
    <div>
      <Button
        type="default"
        style={{ width: "250px", backgroundColor : "#006633", color : "white", boxShadow: "0 0 0 0.2rem rgba(40, 167, 69, 0.25)"}}
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Expense
      </Button>
      <CollectionCreateForm
        open={open}
        createButtonProps={{ style: { backgroundColor: "#2d8659" } }} 
        cancelButtonProps={{ style: { border: "0.5px solid red" , color : "red"}}}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        handleChangeName={handleChangeName}
        handleChangeAmount={handleChangeAmount}
        handleChangeId={handleChangeId}
        handleDateChange={handleDateChange}
        handleChangeDesc={handleChangeDesc}
      />
    </div>
  );
};
export default ExpenseForm;