import {
    Box, Button,
    Divider,
    Flex,
    Heading,
    Input, NumberDecrementStepper, NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from "@chakra-ui/react";
import React, {useState} from "react";
import axios from "axios";

const CreerCompte = () => {
    const [nomDeCompte, setNomDeCompte] = useState('');

    // Ajoutez un nouveau hook useState pour gérer l'état de la réponse de la requête
    const [creationStatus, setCreationStatus] = useState('');

    const format = (val: string) => `$` + val;
    const parse = (val: string) => val.replace(/^\$/, '');

    const [sommeInitiale, setSommeInitiale] = useState('1200.00');

    const [idCompte, setIdCompte] = useState('');

    const handleCreateAccount = () => {
        const requestBody = {
            nomDeCompte: nomDeCompte,
            sommeInitiale: parseFloat(sommeInitiale),
        };

        axios.post('http://localhost:8080/banque/creerCompte', requestBody)
            .then((res) => {
                console.log('Compte créé avec succès');
                setCreationStatus('success');
                // Gérer la réponse de la requête ici
                setIdCompte(res.data);
            })
            .catch((error: any) => {
                setCreationStatus('error');
                console.error('Erreur lors de la création du compte', error);
                // Gérer l'erreur de la requête ici
            });
    };

    return (
        <Box>
            <Heading size="xl" textAlign="center" mb={4}>
                Créer un compte
            </Heading>
            <Divider mb={'1.5em'} />
            <Flex align="center" justify="center" mb={4}>
                <Flex direction="column">
                    <Text mb="8px">Nom du compte :</Text>
                    <Input
                        placeholder="Entrer le nom de compte"
                        value={nomDeCompte}
                        onChange={(e) => setNomDeCompte(e.target.value)}
                        mb={2}
                        variant="filled"
                    />
                    <Text mb="8px">Somme initiale (en $ CA) :</Text>
                    <NumberInput
                        onChange={(valueString) => setSommeInitiale(parse(valueString))}
                        value={format(sommeInitiale)}
                        variant="filled"
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Flex>
            </Flex>
            <Flex align="center" justify="center" mb={4}>
                <Button onClick={handleCreateAccount}>Créer le compte</Button>
            </Flex>
            {creationStatus === 'success' && (
                <Box textAlign="center" mt={4}>
                    <Text fontWeight="bold">Le numéro du compte est :</Text>
                    <Text>{idCompte}</Text>
                </Box>
            )}
        </Box>
    )
}

export default CreerCompte;