import type RegisterData from "@/models/registerdata";
import apiClient from "@/config/apiclient";

//register user function
export const registerUser = async (signUpData: RegisterData) => {
    // api call to server to register user
    const response = await apiClient.post('/auth/register', signUpData);
    return response.data;
}
