import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import ConnexionCompte from "./composants/ConnexionCompte";

const EffectuerTransactions = () => {
    const [idCompte, setIdCompte] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [transactionTitle, setTransactionTitle] = useState("");
    const [connected, setConnected] = useState(false);

    const format = (val: string) => `$` + val;
    const parse = (val: string) => val.replace(/^\$/, '');

    const handleAjouterArgent = () => {
        const transactionData = {
            somme: parseFloat(transactionAmount),
            typeTransaction: transactionType,
            titreTransaction: transactionTitle,
        };

        axios
            .post(`http://localhost:8080/banque/${idCompte}/ajouterArgent`, transactionData)
            .then((res) => {
                console.log("Réponse de la requête d'effectuer des transactions", res.data);
                // Gérer la réponse selon les besoins
            })
            .catch((error) => {
                console.error("Erreur lors de l'effectuation des transactions", error);
            });
    };

    const handleRetirerArgent = () => {
        const transactionData = {
            somme: parseFloat(transactionAmount),
            typeTransaction: transactionType,
            titreTransaction: transactionTitle,
        };

        axios
            .post(`http://localhost:8080/banque/${idCompte}/retirerArgent`, transactionData)
            .then((res) => {
                console.log("Réponse de la requête d'effectuer des transactions", res.data);
                // Gérer la réponse selon les besoins
            })
            .catch((error) => {
                console.error("Erreur lors de l'effectuation des transactions", error);
            });
    };

    const handleSeConnecter = (idCompte: React.SetStateAction<string>) => {
        setIdCompte(idCompte);
        setConnected(true);
    };

    const renderAjouterArgent = () => {
        return (
            <Box>
                <Heading size="xl" textAlign="center" mb={4}>
                    Ajouter de l'argent
                </Heading>
                <Divider mb={"1.5em"} />
                <Flex direction="column" align="center" justify="center" mb={4}>
                    <NumberInput
                        placeholder="Entrer la somme"
                        value={format(transactionAmount)}
                        onChange={(value) => setTransactionAmount(parse(value))}
                        variant="filled"
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Type" />
                        <Select
                            placeholder="Sélectionner le type de transaction"
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value="Chèque en votre faveur">Chèque en votre faveur</option>
                            <option value="Virement en votre faveur">Virement en votre faveur</option>
                            {/* Ajouter plus d'options au besoin */}
                        </Select>
                    </InputGroup>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Titre" />
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Entrer le titre de la transaction"
                            value={transactionTitle}
                            onChange={(e) => setTransactionTitle(e.target.value)}
                        />
                    </InputGroup>
                    <Button onClick={handleAjouterArgent}>
                        Ajouter de l'argent
                    </Button>
                </Flex>
            </Box>
        );
    };

    const renderRetirerArgent = () => {
        return (
            <Box>
                <Heading size="xl" textAlign="center" mb={4}>
                    Retirer de l'argent
                </Heading>
                <Divider mb={"1.5em"} />
                <Flex direction="column" align="center" justify="center" mb={4}>
                    <NumberInput
                        placeholder="Entrer la somme"
                        value={format(transactionAmount)}
                        onChange={(value) => setTransactionAmount(parse(value))}
                        variant="filled"
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Type" />
                        <Select
                            placeholder="Sélectionner le type de transaction"
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value="Prélèvement">Prélèvement</option>
                            <option value="Chèque émis">Virement émis</option>
                            <option value="Frais">Frais</option>
                            <option value="Paiement par carte">Paiement par carte</option>
                            <option value="Retrait au distributeur">Retrait au distributeur</option>
                            <option value="Virement émis">Virement émis</option>
                            {/* Ajouter plus d'options au besoin */}
                        </Select>
                    </InputGroup>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Titre" />
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Entrer le titre de la transaction"
                            value={transactionTitle}
                            onChange={(e) => setTransactionTitle(e.target.value)}
                        />
                    </InputGroup>
                    <Button onClick={handleRetirerArgent}>
                        Retirer de l'argent
                    </Button>
                </Flex>
            </Box>
        );
    };

    return (
        <Box>
            {connected ? (
                <>
                    {renderAjouterArgent()}
                    {renderRetirerArgent()}
                </>
            ) : (<ConnexionCompte handleSeConnecter={handleSeConnecter} />)}
        </Box>
    );
};

export default EffectuerTransactions;
