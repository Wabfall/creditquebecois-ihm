import React, { useState } from 'react';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Button,
    Input,
    Checkbox,
    ChakraProvider,
    ColorModeScript,
    Select,
} from '@chakra-ui/react';
import {RequeteSalon, Salon} from "../generated/creation-salon-API";

const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const [maxPlayers, setMaxPlayers] = useState('');
    const [isClassicMode, setIsClassicMode] = useState(false);
    const [isFastMode, setIsFastMode] = useState(false);

    const handleCreateRoom = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Créez l'objet de données à envoyer à l'API
        const data : RequeteSalon = {
            salonName: generateHexId(),
            maxJoueurs: parseInt(maxPlayers),
            gameMode: isClassicMode ? 'classique' : isFastMode ? 'rapide' : ''
        }

        // Effectuez la requête de création de salon
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8080/jeu/salon', requestOptions)
            .then(response => response.json())
            .then(result => {
                // Traitez la réponse de l'API ici
                console.log(result);
            })
            .catch(error => {
                // Gérez les erreurs de requête ici
                console.error(error);
            });
    };

    const handleJoinRoom = () => {
        console.log(`Rejoindre le salon avec le code : ${roomCode}`);
    };

    const generateHexId = () => {
        const array = new Uint8Array(12);
        window.crypto.getRandomValues(array);

        let hexString = '';
        for (let i = 0; i < array.length; i++) {
            const hex = array[i].toString(16).padStart(2, '0');
            hexString += hex;
        }

        return hexString;
    };

    return (
        <Box>
            <Flex bg="purple.500" p={4} align="center" justify="space-between">
                <Heading size="md" color="white">
                    MemeBattle
                </Heading>
            </Flex>
            <Box p={8}>
                <Heading size="xl" textAlign="center" mb={4}>
                    Bienvenue sur l'application MemeBattle
                </Heading>
                <Box textAlign="center" mb={2}>
                    Créez un salon ou rejoignez-en un en utilisant un code.
                </Box>
                <Grid templateColumns="repeat(2, 2fr)" gap={6} alignItems="center">
                    <GridItem>
                        <Box>
                            <Heading size="md" mb={2}>
                                Créer un salon
                            </Heading>
                            <Flex align="center">
                                <Select
                                    placeholder="Nombre de joueurs maximum"
                                    value={maxPlayers}
                                    onChange={(e) => setMaxPlayers(e.target.value)}
                                    w="200px"
                                    mr={4}
                                >
                                    <option value="4">4 joueurs</option>
                                    <option value="6">6 joueurs</option>
                                    <option value="8">8 joueurs</option>
                                </Select>
                                <Button colorScheme="blue" onClick={handleCreateRoom}>
                                    Créer un salon
                                </Button>
                            </Flex>
                            <Box mt={4}>
                                <Checkbox
                                    isChecked={isClassicMode}
                                    onChange={(e) => setIsClassicMode(e.target.checked)}
                                    mb={2}
                                >
                                    Mode de jeu classique
                                </Checkbox>
                                <Checkbox
                                    isChecked={isFastMode}
                                    onChange={(e) => setIsFastMode(e.target.checked)}
                                >
                                    Mode de jeu rapide
                                </Checkbox>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Heading size="md" mb={2}>
                                Rejoindre un salon
                            </Heading>
                            <Flex align="center">
                                <Input
                                    placeholder="Entrez le code du salon"
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    w="200px"
                                    mr={4}
                                />
                                <Button colorScheme="red" onClick={handleJoinRoom}>
                                    Rejoindre
                                </Button>
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};

const App = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode="light" />
            <HomePage />
        </ChakraProvider>
    );
};

export default App;
