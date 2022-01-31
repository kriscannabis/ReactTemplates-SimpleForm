import { useState, useEffect } from "react";
import styled from "styled-components";
import s from './RegistrationForm.module.css';
import cn from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
`

const RegistrationForm = () => {
  const tempData = {
    name: '',
    lastName: '',
    tel: '',
    email: ''
  }

  const [data, setData] = useState(tempData)
  const [validate, setValidate] = useState({
    name: true,
    lastName: true,
    tel: true,
    email: true
  })

  useEffect(() => {
    //username
    const nameTest = data.name.length ? /(?!.*[\.\-\_]{2,})^[а-яА-Яa-zA-Z0-9\.\-\_]{3,24}$/.test(data.name) : true
    //LastName
    const lastNameTest = data.lastName.length ? /(?!.*[\.\-\_]{2,})^[а-яА-Яa-zA-Z0-9\.\-\_]{3,24}$/.test(data.lastName) : true
    //tel
    const phoneTest = data.tel.length ? /^(8|\+7)(\-?)((\(\d{3}\))|(\d{3}(\-?)))((\d{7})|(\d{3}\-\d{2}\-\d{2}))$/.test(data.tel) : true
    //email
    const emailTest = data.email.length ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email) : true;
    setValidate({
      ...validate,
      name: nameTest,
      lastName: lastNameTest,
      tel: phoneTest,
      email: emailTest
    })
  }, [data])

  const chTelHandler = (e) => {
    setData({ ...data, tel: e.target.value })
  }
  const chEmailHandler = (e) => {
    setData({ ...data, email: e.target.value })
  }

  const chHandler = (fled, value) => {
    setData({ ...data, [fled]: value })
  }

  const submitHandler = () => {
    const { name, lastName, tel, email } = validate;
    (name && lastName && tel && email) ?
      console.log(data)
      :
      console.log('error')
  }

  const clearHandler = () => setData(tempData)

  return (
    <Grid container spacing={3}>
      <Grid item md={3} sm={3} xs={0}></Grid>
      <Grid item md={6} sm={6} xs={12} style={{justifyContent: 'center'}}>
        <Paper>
          <FormContainer>
            <Typography variant="h4" gutterBottom>Регистрация</Typography>

            <TextField id="name" label="Имя" value={data.name} onChange={(e) => chHandler('name', e.target.value)} error={!validate.name} />
            <TextField id="lastName" label="Фамилия" value={data.lastName} onChange={(e) => chHandler('lastName', e.target.value)} error={!validate.lastName} />
            <TextField id="tel" label="Тел." value={data.tel} onChange={(e) => chHandler('tel', e.target.value)} error={!validate.tel} />
            <TextField id="email" label="email" value={data.email} onChange={(e) => chHandler('email', e.target.value)} error={!validate.email} />
            
            <div style={{ margin: '16px' }} />
            <Button onClick={submitHandler} variant="contained" color="primary">Отправить</Button>
            <div style={{ margin: '16px' }} />
          </FormContainer>
        </Paper>
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  )
}

export default RegistrationForm;
