import { useNavigate, useParams } from "react-router-dom";
import Search from "./Search/Search"
import Transactions from "./Transactions/Transactions";
import {useState} from "react";
import { PaymentsListProps } from "./indexPaymentsList";

const FindTransactionPage = (props: PaymentsListProps) => {
    
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    return (
        <div>
                <Search initialSearchTerm={searchTerm} />
                <Transactions searchTerm={searchTerm} serverUrl={props.serverUrl}  />
        </div>
    );
}

export default FindTransactionPage;
