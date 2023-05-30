import { useState } from "react"

/**
 * 
 * @param { Object } initialForm 
 * @returns { Object }
 */

export const useForm = ( initialForm = {}) => {
    const [formState, setFormState] = useState( initialForm )

    const onHandleChanges = ({ target:{ name, value } }) => {
        setFormState({
            ...formState,
            [name]: value 
        })
    }
    const onResetForm = () =>  {
        setFormState( initialForm )
    }

    return {
        formState,
        onHandleChanges,
        onResetForm
    }
}