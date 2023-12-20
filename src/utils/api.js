import { store } from "@/store/store"

const GET_SETTINGS = "get_system_settings"

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
