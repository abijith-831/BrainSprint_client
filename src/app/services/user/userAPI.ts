import api from "../../auth/axios/axiosInstance";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export const signUpRequest = async (formData: SignUpData) => {
    
  const response = await api.post("/signup", formData);
  
  return response.data;
};

