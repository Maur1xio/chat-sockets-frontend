import { useState } from 'react'

export const useForm = () => {
    const [dataForm, setDataForm] = useState({});

    function handleInputChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    return [dataForm, handleInputChange];

}

