// import { store } from "@/store/store"

const GET_SETTINGS = "get_system_settings"
const HIRE_US = "hire-us"
const GET_PRODUCTS = "products"

// GET SETTINGS
export const getSettingApi = (type, user_id) => {
    return {
        url: `${GET_SETTINGS}`,
        method: "POST",
        data: {
            type: type,
            user_id: user_id,
        },
        authorizationHeader: false,

    }
}

// GET PRODUCTS
export const getProducts = () => {
    return {
        url: `${GET_PRODUCTS}`,
        method: "GET",
        params: {
           
        },
        authorizationHeader: false,

    }
}

//Send Email
export const hireUs = (name,email,budget,phone,message) => {
    return {
        url: `${HIRE_US}`,
        method: "POST",
        data: {
            name:name,
            email:email,
            budget:budget,
            phone: phone,
            message: message,
        },
        authorizationHeader: false,

    }
}
