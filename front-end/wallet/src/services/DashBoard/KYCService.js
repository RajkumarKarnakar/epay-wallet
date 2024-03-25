import axios from "../API/axios";

const KYCService = {
  updateKYCStatus: async (uniqueId) => {
    try {
      const response = await axios.put(`/Kyc/${uniqueId}`, {});
      return response; 
    } catch (error) {
      throw error;
    }
  }

};

export default KYCService;