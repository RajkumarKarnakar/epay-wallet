import axios from "../API/axios";

const CustomerService = {
    getCustomerDetails: (uniqueId) => {
    axios.get(`/customer/${uniqueId}`, {}).then(
        (response) => {
            return response;
        },
        (error) => {
            console.log(error);
        }
    );
    }
      
  

  

};

export default CustomerService;