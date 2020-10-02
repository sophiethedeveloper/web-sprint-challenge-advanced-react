// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleChanges = (e) => {
        console.log('handleChanges', handleChanges)
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
          console.log('handleSubmit', handleSubmit)
        e.preventDefault();
        setShowSuccessMessage(true);
      };

      return [values, handleChanges, handleSubmit, showSuccessMessage, setShowSuccessMessage]
}

export default useForm;