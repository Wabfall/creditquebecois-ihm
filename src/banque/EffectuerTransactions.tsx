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
    Select,
    Text
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ConnexionCompte from "./composants/ConnexionCompte";
import {FaCheck} from "react-icons/fa";

const EffectuerTransactions = () => {
    const [idCompte, setIdCompte] = useState("");

    const [transactionTypeAjout, setTransactionTypeAjout] = useState("");
    const [transactionAmountAjout, setTransactionAmountAjout] = useState("");
    const [transactionTitleAjout, setTransactionTitleAjout] = useState("");

    const [transactionTypeRetirer, setTransactionTypeRetirer] = useState("");
    const [transactionAmountRetirer, setTransactionAmountRetirer] = useState("");
    const [transactionTitleRetirer, setTransactionTitleRetirer] = useState("");

    const [connected, setConnected] = useState(false);
    const [transactionAjoutSuccess, setTransactionAjoutSuccess] = useState(false);
    const [transactionRetirerSuccess, setTransactionRetirerSuccess] = useState(false);

    const format = (val: string) => `$` + val;
    const parse = (val: string) => val.replace(/^\$/, '');

    useEffect(() => {
        if (transactionAjoutSuccess || transactionRetirerSuccess) {
            const timer = setTimeout(() => {
                setTransactionAjoutSuccess(false);
                setTransactionRetirerSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [transactionAjoutSuccess, transactionRetirerSuccess]);

    const handleAjouterArgent = () => {
        const transactionData = {
            somme: parseFloat(transactionAmountAjout),
            typeTransaction: transactionTypeAjout,
            titreTransaction: transactionTitleAjout,
        };

        axios
            .post(`http://localhost:8080/banque/${idCompte}/ajouterArgent`, transactionData)
            .then((res) => {
                console.log("Réponse de la requête d'effectuer des transactions", res.data);
                setTransactionAjoutSuccess(true);
            })
            .catch((error) => {
                console.error("Erreur lors de l'effectuation des transactions", error);
            });
    };

    const handleRetirerArgent = () => {
        const transactionData = {
            somme: parseFloat(transactionAmountRetirer),
            typeTransaction: transactionTypeRetirer,
            titreTransaction: transactionTitleRetirer,
        };

        axios
            .post(`http://localhost:8080/banque/${idCompte}/retirerArgent`, transactionData)
            .then((res) => {
                console.log("Réponse de la requête d'effectuer des transactions", res.data);
                setTransactionRetirerSuccess(true);
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
                <Divider mb={"1.5em"}/>
                <Flex direction="column" align="center" justify="center" mb={4}>
                    <NumberInput
                        placeholder="Entrer la somme"
                        value={format(transactionAmountAjout)}
                        onChange={(value) => setTransactionAmountAjout(parse(value))}
                        variant="filled"
                        mb={4}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Type"/>
                        <Select
                            placeholder="Sélectionner le type de transaction"
                            value={transactionTypeAjout}
                            onChange={(e) => setTransactionTypeAjout(e.target.value)}
                        >
                            <option value="Chèque en votre faveur">Chèque en votre faveur</option>
                            <option value="Virement en votre faveur">Virement en votre faveur</option>
                            {/* Ajouter plus d'options au besoin */}
                        </Select>
                    </InputGroup>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Titre"/>
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Entrer le titre de la transaction"
                            value={transactionTitleAjout}
                            onChange={(e) => setTransactionTitleAjout(e.target.value)}
                        />
                    </InputGroup>
                    <Button onClick={handleAjouterArgent}>
                        Ajouter de l'argent
                    </Button>
                    {transactionAjoutSuccess && (
                        <Flex align="center" mt={4}>
                            <FaCheck color="green"/>
                            <Text> La transaction a été effectuée avec succès.</Text>
                        </Flex>
                    )}
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
                <Divider mb={"1.5em"}/>
                <Flex direction="column" align="center" justify="center" mb={4}>
                    <NumberInput
                        placeholder="Entrer la somme"
                        value={format(transactionAmountRetirer)}
                        onChange={(value) => setTransactionAmountRetirer(parse(value))}
                        variant="filled"
                        mb={4}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                    <InputGroup mb={4}>
                        <InputLeftAddon children="Type"/>
                        <Select
                            placeholder="Sélectionner le type de transaction"
                            value={transactionTypeRetirer}
                            onChange={(e) => setTransactionTypeRetirer(e.target.value)}
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
                        <InputLeftAddon children="Titre"/>
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Entrer le titre de la transaction"
                            value={transactionTitleRetirer}
                            onChange={(e) => setTransactionTitleRetirer(e.target.value)}
                        />
                    </InputGroup>
                    <Button onClick={handleRetirerArgent}>
                        Retirer de l'argent
                    </Button>
                    {transactionRetirerSuccess && (
                        <Flex align="center" mt={4}>
                            <FaCheck color="green"/>
                            <Text> La transaction a été effectuée avec succès.</Text>
                        </Flex>
                    )}
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
            ) : (<ConnexionCompte handleSeConnecter={handleSeConnecter}/>)}
        </Box>
    );
};

export default EffectuerTransactions;
