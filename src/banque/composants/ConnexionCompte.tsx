import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

interface ConnexionCompteProps {
    handleSeConnecter: (idCompte: string) => void;
}

const ConnexionCompte: React.FC<ConnexionCompteProps> = ({
                                                             handleSeConnecter
                                                         }) => {
    const [idCompte, setIdCompte] = useState("");

    const handleClick = () => {
        handleSeConnecter(idCompte);
    };

    return (
        <Box>
            <Heading size="xl" textAlign="center" mb={4}>
                Se connecter
            </Heading>
            <Divider mb={"1.5em"} />
            <Flex align="center" justify="center" mb={"1.5em"}>
                <Flex direction="column">
                    <InputGroup>
                        <InputLeftAddon children="ID" />
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Entrer l'ID du compte"
                            value={idCompte}
                            onChange={(e) => setIdCompte(e.target.value)}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
            <Flex align="center" justify="center" mb={4}>
                <Button onClick={handleClick}>Se connecter</Button>
            </Flex>
        </Box>
    );
};

export default ConnexionCompte;
