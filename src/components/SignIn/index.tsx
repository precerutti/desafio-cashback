import { Flex, Input, Button, Stack, FormLabel, FormControl, Text } from "@chakra-ui/react"
import Modal from 'react-modal';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {

  function closeModal() {
    setIsNewRegisterModalOpen(false);
  }

  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] = useState(false);

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModalOpen(true);
  }

  function handleCloseNewRegisterModal() {
    setIsNewRegisterModalOpen(false);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.50"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="green.200"
              bgColor="gray.100"
              variant="filled"
              _hover={{
                bgColor: "gray.200"
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="green.200"
              bgColor="gray.100"
              variant="filled"
              _hover={{
                bgColor: "gray.200"
              }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button mt="6" colorScheme="green" size="lg">
          <Link to="/dashboard">
            Entrar 
          </Link>
        </Button>

        <Text align="center"> ou </Text>
        <Button mt="2" width="100%" onClick={handleOpenNewRegisterModal}>Cadastre-se</Button>
        <Modal
          isOpen={isNewRegisterModalOpen}
          onRequestClose={handleCloseNewRegisterModal}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
          ariaHideApp={false}>
          <h1>Cadastre-se</h1>
          <Input placeholder="Nome ompleto" />
          <Input placeholder="E-mail" />
          <Input placeholder="CPF" />
          <Input placeholder="Senha" />
          <Button onClick={closeModal} mt="6">Confirmar cadastro</Button>
        </Modal>
      </Flex>
    </Flex>
  );
}