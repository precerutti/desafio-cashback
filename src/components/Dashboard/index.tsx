import { Header } from "../Header";
import PurchasesTable from "../Purchases";
import { Summary } from "../Summary";

export function Dashboard(){
    return(
        <>
            <Header />
            <Summary />
            <PurchasesTable />
        </>
    )
}