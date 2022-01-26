import  {useState, useEffect} from "react";
import styled from "styled-components";
import s from './RegistrationForm.module.css';
import cn from 'classnames';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RegistrationForm = ()=>{
  const tempData = {
    name:'',
    lastName:'',
    tel:'',
    email:''
  }

  const [data, setData] = useState(tempData)
  const [validate, setValidate] = useState({
    name:true,
    lastName:true,
    tel:true,
    email:true
  })
  
  useEffect(()=>{
    //username
    const nameTest = /(?!.*[\.\-\_]{2,})^[а-яА-Яa-zA-Z0-9\.\-\_]{3,24}$/.test(data.name)
    //LastName
    const lastNameTest = /(?!.*[\.\-\_]{2,})^[а-яА-Яa-zA-Z0-9\.\-\_]{3,24}$/.test(data.lastName)
    //tel
    const phoneTest = /^(8|\+7)(\-?)((\(\d{3}\))|(\d{3}(\-?)))((\d{7})|(\d{3}\-\d{2}\-\d{2}))$/.test(data.tel)
    //email
    const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email);
    setValidate({...validate, 
      name:nameTest, 
      lastName:lastNameTest,
      tel: phoneTest, 
      email:emailTest})
  },[data])

  const chTelHandler = (e)=>{
    setData({...data, tel:e.target.value})
  }
  const chEmailHandler = (e)=>{
    setData({...data, email:e.target.value})
  }

  const chHandler = (fled, value)=>{    
    setData({...data, [fled]:value})
  }

  const submitHandler = ()=>{
    const {name, lastName, tel, email} = validate;
    (name && lastName && tel && email)?
      console.log(data)
      :
      console.log('error')
  }

  const clearHandler = ()=>setData(tempData)

  return(
    <FormContainer>
    
      <h1>Registration</h1>
      
      Имя: 
      <input 
        className={cn( validate.name?s.valid:s.invalid )} 
        onChange={(e)=>chHandler('name', e.target.value)} 
        type={'text'} 
        value={data.name} 
      />
      Фамилия: 
      <input 
        className={cn( validate.lastName?s.valid:s.invalid )}
        onChange={(e)=>chHandler('lastName', e.target.value)} 
        type={'text'} 
        value={data.lastName} 
      />
      Тел.: <input className={cn( validate.tel?s.valid:s.invalid )} onChange={chTelHandler} type={'text'} value={data.tel} />
      email: <input className={cn( validate.email?s.valid:s.invalid )} onChange={chEmailHandler} type={'text'} value={data.email} />
      <button onClick={clearHandler}>Clear</button>
      <button onClick={submitHandler}> OK</button>
    
    
    </FormContainer>
  )
}

export default RegistrationForm;
