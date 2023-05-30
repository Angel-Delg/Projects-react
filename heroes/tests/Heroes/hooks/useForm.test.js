import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../../src/Heroes/hooks/useForm"

describe("Pruebas en los hooks", () => {

    const initialForm = {
        username: '',
        password: ''
    }

    test("useForm Devolver Valores por default", () => {
        const { result: { current} } = renderHook(() => useForm( initialForm ))
        expect( current ).toEqual({
            formState: initialForm,
            onHandleChanges: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test("useForm evaluar que cambia el estado del input",() =>{

        const nuevoValor = 'Angel'
        const { result } = renderHook(() => useForm( initialForm ))
        const { onHandleChanges } = result.current
        act(() => {
            onHandleChanges({target: { name:'username', value: nuevoValor }})
        })

        expect(result.current.formState.username ).toBe(nuevoValor)
    })
})