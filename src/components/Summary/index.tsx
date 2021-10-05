import { Box, Grid } from "@chakra-ui/react"
import { useContext } from 'react'
import { PurchasesContext } from "../../PurchasesContext";

export function Summary() {
    const purchases = useContext(PurchasesContext);

    const summary = purchases.reduce((acc, purchase) => {
        if (purchase.registrationStatus === 'aproved') {
            acc.aproved += purchase.purchaseValue * 0.1;
        }
        if (purchase.registrationStatus === 'validate') {
            acc.validate += purchase.purchaseValue * 0.1;
        }
        if (purchase.registrationStatus === 'denied') {
            acc.denied += purchase.purchaseValue * 0.1;
        }

        return acc;
    }, {
        aproved: 0,
        validate: 0,
        denied: 0,
    })

    return (
        <Grid templateColumns="repeat(3, 1fr)" pt="12rem" px="2rem" gap={8} >
            <Box w="100%" h="200" p="1.25rem" bg="red.100">
                <h2>Cashback recusado</h2>
                <br></br>
                <h3>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.denied)}
                </h3>
            </Box>
            <Box w="100%" h="200" p="1.25rem" bg="yellow.100">
                <h2>Cashback em validação</h2>
                <br></br>
                <h3>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.validate)}
                </h3>
            </Box>
            <Box w="100%" h="200" p="1.25rem" bg="green.200">
                <h2>Cashback aprovado</h2>
                <br></br>
                <h3>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.aproved)}
                </h3>
            </Box>
        </Grid>
    )
}