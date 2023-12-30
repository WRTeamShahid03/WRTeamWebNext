"use client";

import { hireUs, getProducts, contactUs, getTestimonials,getTeamMembers,careerMail } from "@/utils/api";
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
// HireUs Email
export const contactUsApi = ({
    name = "",
    email = "",
    subject = "",
    phone = "",
    message = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...contactUs(name, email, subject, phone, message),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};
// career Email
export const careerMailApi = ({
    full_name = "",
    email = "",
    qualification = "",
    contact = "",
    apply_for = "",
    experience = "",
    file = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...careerMail(full_name, email, qualification, contact, apply_for, experience, file),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET PRODUCTS
export const GetProductsApi = ({
    onSuccess = () => {},
    onError = () => {},
    onStart = () => {}}) => {
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
// // GET TESTIMONIALS
export const GetTestimonialsApi = ({
    onSuccess = () => {},
    onError = () => {},
    onStart = () => {},
}) => {
    store.dispatch(
        apiCallBegan({
            ...getTestimonials(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET TEAMMEMBERS
export const GetTeamMembersApi = ({
    onSuccess = () => {},
    onError = () => {},
    onStart = () => {},
}) => {
    store.dispatch(
        apiCallBegan({
            ...getTeamMembers(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

