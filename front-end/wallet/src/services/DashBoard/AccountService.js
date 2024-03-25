import axios from "../API/axios";

const AccountService = {
    // add bank account
    addAccount: (bankAccount, bankName, ifsc, amount, uniqueId) => {
      return axios.post(`/bankaccount/${uniqueId}`, {
        bankAccount, bankName, ifsc, amount
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
    }
    
    
  

  

};

export default AccountService;