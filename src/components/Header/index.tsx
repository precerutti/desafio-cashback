import { Heading } from "@chakra-ui/react";
import logo from "../../assets/logo-white.svg"
import { Flex, Image, Button, Text, FormLabel, FormControl } from "@chakra-ui/react"
import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { Input } from "@chakra-ui/react"
import { api } from "../../services/api";

export function Header() {
    const [code, setCode] = useState('')
    const [date, setDate] = useState('')
    const [value, setValue] = useState('')

    function handleCreateNewPurchase(event: FormEvent) {
        event.preventDefault();

        const data = {
            code,
            date,
            value,
        };

        api.post('/purchases', data)
    }

    function closeModal(event: FormEvent) {
        handleCreateNewPurchase(event);
        setIsNewPurchaseModalOpen(false);
      }

    const [isNewPurchaseModalOpen, setIsNewPurchaseModalOpen] = useState(false);

    function handleOpenNewPurchaseModal() {
        setIsNewPurchaseModalOpen(true);
    }

    function handleCloseNewPurchaseModal() {
        setIsNewPurchaseModalOpen(false);
    }

    return (
        <Flex py="5" pos="fixed" px="8" justify="space-between" padding-bottom="90rem" align="center" backgroundColor="#6f967e" height="37px" size="lg" direction="row" w="100%" h="8rem">
            <Image src={logo} alt="o boticário" />
            <Button onClick={handleOpenNewPurchaseModal} size="sm">
                Cadastrar nova compra
            </Button>
            <Modal 
            isOpen={isNewPurchaseModalOpen} 
            onRequestClose={handleCloseNewPurchaseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            ariaHideApp={false}>
                <h1>Cadastrar nova compra</h1>
                <Input type="number" placeholder="Digite o código da compra" value={code} onChange={event => setCode(event.target.value)} />
                <Input placeholder="Digite a data da compra" value={date} onChange={event => setDate(event.target.value)}/>
                <Input placeholder="Digite o valor da compra" value={value} onChange={event => setValue(event.target.value)}/>
                <Button mt="3" onClick={closeModal}>Cadastrar</Button>
            </Modal>
        </Flex>
    )
}