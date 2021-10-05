import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box
} from "@chakra-ui/react"
import { useContext } from "react"
import { PurchasesContext } from "../../PurchasesContext"

export default function PurchasesTable() {

    const purchases = useContext(PurchasesContext);

    return (
        <Box p={7} w="90%" ml="auto" mr="auto">
            <Table size="sm">
                <Thead>
                    <Tr>
                        <Th><h4>Código da compra</h4></Th>
                        <Th><h4>Valor</h4></Th>
                        <Th><h4>Data</h4></Th>
                        <Th><h4>Cashback aplicado</h4></Th>
                        <Th><h4>Valor do Cashback</h4></Th>
                        <Th><h4>Status do cadastro</h4></Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {purchases.map(purchase => (
                        <Tr key={purchase.id}>
                            <Td><h5>{purchase.id}</h5></Td>
                            <Td>
                                <h5>
                                    {new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(purchase.purchaseValue)}
                                </h5>
                            </Td>
                            <Td>
                                <h5>
                                    {new Intl.DateTimeFormat('pt-BR').
                                    format(new Date((purchase.date)))}
                                 </h5>
                            </Td>
                            <Td><h5>{purchase.appliedCashback}%</h5></Td>
                            <Td>
                                <h5>
                                    {new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(purchase.cashbackAmount)}
                                </h5>
                            </Td>
                            <Td><h5>{purchase.registrationStatus}</h5></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}