import api from "../../auth/axios/axiosInstance";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface loginData{
  email:string;
  password:string
}

export const signUpRequest = async (formData: SignUpData) => {
    
  const response = await api.post("/signup", formData);
  
  return response.data;
};

export const loginRequest = async (formData: loginData) => {
    
  const response = await api.post("/login", formData);
  
  return response.data;
};
