import { useState, createContext, useEffect, ReactNode } from 'react'

interface Purchase {
    id: number;
    purchaseValue: number;
    date: string;
    appliedCashback: number;
    cashbackAmount: number;
    registrationStatus: string;
}

interface PurchaseProviderProps {
    children: ReactNode;
}

export const PurchasesContext = createContext<Purchase[]>([]);

export function PurchasesProvider({ children }: PurchaseProviderProps) {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setPurchases([{
                id: 1,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'aproved'
            },
            {
                id: 2,
                purchaseValue: 300,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 30,
                registrationStatus: 'denied'
            },
            {
                id: 3,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'validate'
            },
            {
                id: 4,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'denied'
            },
            {
                id: 5,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'aproved'
            },
            {
                id: 6,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'validate'
            },
            {
                id: 7,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'validate'
            },
            {
                id: 8,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'aproved'
            },
            {
                id: 9,
                purchaseValue: 250,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 25,
                registrationStatus: 'denied'
            },
            {
                id: 10,
                purchaseValue: 400,
                date: '2021-10-04',
                appliedCashback: 10,
                cashbackAmount: 40,
                registrationStatus: 'aproved'
            }]);
            console.log(purchases);
        }, 1000);
    }, []);

    return (
        <PurchasesContext.Provider value={purchases}>
            {children}
        </PurchasesContext.Provider>
    )
}