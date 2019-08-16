import React, {useEffect} from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import {getData} from '../actions'

function SmurfForm({dispatch, status, setStatus}) {
    console.log(status)
    useEffect(() => {
        if(status !== undefined) {
            dispatch(getData())
        }
        setStatus(undefined);

    },[status])

    return (
        <Form>
            <Field   className='user-input' type='text' name='name' placeholder="Please enter your smurf's name" />
            <Field  className='user-input' type='text' name='age' placeholder='age' />
            <Field  className='user-input' type='text' name='height' placeholder='height' />
            <button className='btn' type='submit'>Submit</button>
        </Form>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
       return {
        name: name || '',
        age: age || '',
        height: height || ''
       }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('You must enter a name').max(50, "Our database can't handle such an amazing name"),
        age: Yup.string().required('You must enter an age'),
        height: Yup.string().required('You must enter a height')
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        console.log("form submitted", values);
        axios.post(`http://localhost:3333/smurfs`, values)
        .then(res => {
            console.log('response', res.data)
            setStatus(res.data)
            resetForm();
        })
        .catch(error => {
            console.log('Post Error', error)
            setStatus(error.message)
        })
    }

})(SmurfForm)
export default FormikSmurfForm;