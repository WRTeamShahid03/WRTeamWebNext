"use client";

import { hireUs, getProducts } from "@/utils/api";
import { store } from "../store";
import { apiCallBegan } from "./apiActions";

// HireUs Email
export const hireUsApi = ({
    name = "",
    email = "",
    budget = "",
    phone = "",
    message = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...hireUs(name, email, budget, phone, message),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET PRODUCTS

export const GetProductsApi = ({
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { }, }) => {
    store.dispatch(
        apiCallBegan({
            ...getProducts(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

