import React,{useState} from 'react';

export default function Login(){
    //initiate state variable
    const [formState,setFormState] = useState({});

    const handleChange = ({target})=>{
        const {name,value} = target;
        setFormState((prev)=>({...prev,[name]:value}))
    }
}