import { OperationTemppmailo } from "./OperationWithDomain";
import { OperationTemppmail } from "./OperationWithDomain";
const DataScrap = async () => {



    setInterval(() => {
        OperationTemppmailo();
        OperationTemppmail();
    }, 60000); // Fetch every 60 seconds
}

export default DataScrap;
