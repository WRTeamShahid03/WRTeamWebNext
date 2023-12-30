// import { store } from "@/store/store"

const GET_SETTINGS = "get_system_settings"
const HIRE_US = "hire-us"
const CONTACT_US = "contact-us"
const GET_PRODUCTS = "products"
const GET_TESTIMONIALS = "testimonials"
const GET_TEAM_MEMBERS = "team-members"
const CAREER_MAIL = "send-career-email"

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
// GET TESTIMONAILS
export const getTestimonials = () => {
    return {
        url: `${GET_TESTIMONIALS}`,
        method: "GET",
        params: {
           
        },
        authorizationHeader: false,

    }
}
// GET TEAMMEMBERS
export const getTeamMembers = () => {
    return {
        url: `${GET_TEAM_MEMBERS}`,
        method: "GET",
        params: {
           
        },
        authorizationHeader: false,

    }
}

//Send HireUs Mail
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

//SendcontactUs Mail
export const contactUs = (name,email,subject,phone,message) => {
    return {
        url: `${CONTACT_US}`,
        method: "POST",
        data: {
            name:name,
            email:email,
            subject:subject,
            phone: phone,
            message: message,
        },
        authorizationHeader: false,

    }
}

//Send careerMail
export const careerMail = (full_name, email, qualification, contact, apply_for, experience, file) => {
    let data = new FormData();
    data.append('full_name', full_name);
    data.append('email', email);
    data.append('qualification', qualification);
    data.append('contact', contact);
    data.append('apply_for', apply_for);
    data.append('experience', experience);
    data.append('file', file);
    return {
        url: `${CAREER_MAIL}`,
        method: "POST",
        data,
        authorizationHeader: false,

    }
}