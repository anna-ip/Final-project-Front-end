import { createSlice } from '@reduxjs/toolkit'



export const SearchReducer = createSlice({
    name: "Veggies",
    initialState: {
        id: []
        //product: []
    },

    //***** here is the Actions *****/
    reducers: {
        setBarcodes: (state, action) => {
            console.log(state)
            console.log(action)
            // state.product = action.payload
            state.items.push({ id: state.code, text: action.payload })
        }

    }
})
/******* The Thunk **********/
//this fetch is for recipes
export const fetchBarcodes = () => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))

        fetch(`http://localhost:8080/recipes`)

            .then((res) => res.json())
            .then((json) => {
                console.log(json)

                dispatch(products.actions.setBarcodes(json))
                dispatch(ui.actions.setLoading(false))
            })

    }
}

//This Thunk should give the full Veggie model, with name, Season and Carbonfootprint
export const fetchVeggies = () => {
    return (dispatch) => {
        //dispatch(ui.actions.setLoading(true))

        fetch(`http://localhost:8080/veggies`)

            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                dispatch(veggies.actions.setName(json))
                //dispatch(ui.actions.setLoading(false))
            })

    }
}