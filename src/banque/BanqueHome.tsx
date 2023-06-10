import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Button,
    Input,
    Checkbox,
    Text,
    ChakraProvider,
    ColorModeScript,
    Select,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    InputLeftAddon,
    Divider,
    NumberInput,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberInputField,
    NumberIncrementStepper,
    Image,
} from '@chakra-ui/react';
import {FaChartLine, FaCreditCard, FaEnvelope, FaMoneyCheckAlt, FaPhoneAlt} from "react-icons/fa";
import ConsulterCompte from "./ConsulterCompte";
import CreerCompte from "./CreerCompte";
import EffectuerTransactions from "./EffectuerTransactions";
import Footer from "./composants/Footer";
import Accueil from "./Accueil";

const BanqueHome = () => {
    const [selectedTab, setSelectedTab] = useState('accueil');
    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setSelectedTab(tab);
    };

    return (
        <Box>
            <Flex bg="blue.700" p={4} align="center" justify="space-between">
                <Heading size="md" color="white">
                    <Image
                        width={"15em"}
                        src="/credit-quebecois.png"
                        alt='Logo Crédit Québecois'></Image>
                </Heading>
                <Flex align="center">
                    <Button
                        variant={selectedTab === 'accueil' ? 'solid' : 'outline'}
                        onClick={() => handleTabChange('accueil')}
                        mr={2}
                    >
                        Accueil
                    </Button>
                    <Button
                        variant={selectedTab === 'createAccount' ? 'solid' : 'outline'}
                        onClick={() => handleTabChange('createAccount')}
                        mr={2}
                    >
                        Créer un compte
                    </Button>
                    <Button
                        variant={selectedTab === 'viewAccount' ? 'solid' : 'outline'}
                        onClick={() => handleTabChange('viewAccount')}
                        mr={2}
                    >
                        Consulter compte
                    </Button>
                    <Button
                        variant={selectedTab === 'performTransaction' ? 'solid' : 'outline'}
                        onClick={() => handleTabChange('performTransaction')}
                    >
                        Effectuer des transactions
                    </Button>
                </Flex>
            </Flex>
            <Box p={8}>
                {selectedTab === 'accueil' && (
                    <Accueil/>
                )}
                {selectedTab === 'createAccount' && (
                    <CreerCompte/>
                )}
                {selectedTab === 'viewAccount' && (
                    <ConsulterCompte/>
                )}
                {selectedTab === 'performTransaction' && (
                    <EffectuerTransactions/>
                )}
            </Box>
            <Footer/>
        </Box>
    );
};

const App = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode="light" />
            <BanqueHome />
        </ChakraProvider>
    );
};

export default App;
