import axios from "../API/axios";

const AuthService = {
    loginUser: async (mobileNumber, password) => {
    try {
      const response = await axios.post("/login", {
        mobileNumber,
        password,
      });
      if (response.data) {
        // Extracting the uniqueId from the customerSession string
        const uniqueId = response.data.split('uniqueId=')[1].split(',')[0];    
        // Store the uniqueId in local storage for further authentication or session management
        localStorage.setItem('uniqueId', uniqueId); 
        localStorage.setItem('mobileNumber', mobileNumber);
        }
      return response;
    } catch (error) {
      throw error;
    }
  },
  logoutUser: async (uniqueId) => {
    try {
      // const response = await axios.patch(`/logout/${uniqueId}`);
      localStorage.removeItem('uniqueId');
      localStorage.removeItem('kyc');
      // return response.data;
    } catch (error) {
        // console.error('Error during logout:', error);
        // throw new Error('Logout failed. Please try again.');
        alert("Logout failed. Please try again later.")
    }
},
  signinUser: async (mobileNumber) => {
    try {
      const response = await axios.post("/signUp", {
        mobileNumber,
      });
      const otp = response.data;
      localStorage.setItem('otp', otp);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  registerUser: async (userData) => {
    try {
      const response = await axios.post('/customer', userData);
      return response.data;
    } catch (error) {
      throw error; 
    }
  },
  forgotPassword: async (mobileNumber) => {
    try {
      const response = await axios.post("/forgotPassword", {
        mobileNumber,
      });
      const otp = response.data;
      localStorage.setItem('otp', otp);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updatePassword: async (mobileNumber, password) => {
    try {
      const response = await axios.post("/customer/updatePassword", {
        mobileNumber,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

};

export default AuthService;
