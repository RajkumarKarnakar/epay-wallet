import axios from "../API/axios";

const BillPaymentService = {
  getAllBills: async (uniqueId) => {
    try {
      const response = await axios.get(`/paidBills/${uniqueId}`, {
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  addBill: async (billType, amount, billDescription, uniqueId) => {
    try {
      if (!billDescription){
        billDescription = `${billType} of ${amount} Rs is paid`;
      }
      const response = await axios.post(`/billpayment/${uniqueId}`, {
        billType, amount, billDescription
      });
      console.log(response.data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  

  

};

export default BillPaymentService;