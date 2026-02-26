import { api, type ApiResponse } from "./axiosClient";

//respuesta del endpoint en C#
interface AuthResponse {
  id: string;
  name: string;
  userName: string;
  email: string;
  token: string;
  roles: string[];
  isVerified: boolean;
}

export const googleLogin = async (idToken: string) => {
  try {
    //peticion http
    const response = await api.post<ApiResponse<AuthResponse>>(
      "/Account/Google",
      {
        idToken: idToken,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Google Auth Error: ", error);
    throw error;
  }
};
