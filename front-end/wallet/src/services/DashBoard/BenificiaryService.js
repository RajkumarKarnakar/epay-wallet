import axios from "../API/axios";

const BenificaryService = {
  addBeneficiary: async (name, mobileNo, relation, uniqueId) => {
  try {
    console.log(mobileNo, name, relation);
    const response = await axios.post(`/beneficiary/${uniqueId}`, {
      mobileNo, name, relation
    });
    return response;
  } catch (error) {
    throw error;
  }
},
  getAllBeneficiary: async (uniqueId) => {
    try {
      const response = await axios.get(`/beneficiary/${uniqueId}`, {
      });
      
      console.log(response.data)
      return response;
    } catch (error) {
      throw error;
    }
  },

  

};

export default BenificaryService;

