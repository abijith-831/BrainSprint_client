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
    
  const response = await api.post("/auth/signup", formData);
  
  return response.data;
};

export const loginRequest = async (formData: loginData) => {
    
  const response = await api.post("/auth/login", formData);
  
  return response.data;
};


export const getProblems = async ()=>{
  
  const response = await api.get('/problems')

  return response.data;
}