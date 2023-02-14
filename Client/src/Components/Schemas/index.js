import * as yup from "yup";


const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol

export const basicSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    password: yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
    gender: yup.string().required("Required"),
    dob: yup.date().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phonenumber: yup.number().min(10,"Phone number must be a 10 digit number").positive().integer().required("Required")             
})

export const billingAddressSchema =yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phonenumber: yup.number().min(10,"Phone number must be a 10 digit number").positive().integer().required("Required"),
    streetAddress: yup.string().min(2,"Enter minimum 2 characters").required("Required"),           
    city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),           
    pinCode: yup.number().min(6,"Phone number must be a 10 digit number").positive().integer().required("Required"),
    country: yup.string().min(2,"Enter minimum 2 characters").required("Required")           
})

export const AddProductSchema =yup.object().shape({

    Image:yup.string().required('Required'),
    brand:yup.string().required('Required'),
    type:yup.string().required('Required'),
    productName:yup.string().required('Required'),
    rating:yup.string().required('Required'),
    amount:yup.string().required('Required'),
    orginalAmount:yup.string().required('Required'),
    discount:yup.string().required('Required'),
    modelNumber:yup.string().required('Required'),
    inBox:yup.string().required('Required'),
    features:yup.string().required('Required'),
    warrenty:yup.string().required('Required'),
    color:yup.string().required('Required'),
    audioJack:yup.string().required('Required')

})