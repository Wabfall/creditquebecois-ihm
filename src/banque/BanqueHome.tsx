import React, {useEffect, useState} from 'react';
import {Box, Button, ChakraProvider, ColorModeScript, Flex, Heading, Image,} from '@chakra-ui/react';
import ConsulterCompte from './ConsulterCompte';
import CreerCompte from './CreerCompte';
import EffectuerTransactions from './EffectuerTransactions';
import Footer from './composants/Footer';
import Accueil from './Accueil';

const BanqueHome = () => {
    const [selectedTab, setSelectedTab] = useState('accueil');
    const [idCompte, setIdCompte] = useState(localStorage.getItem('idCompte') || '');

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setSelectedTab(tab);
    };

    const handleDeconnexion = () => {
        localStorage.removeItem('idCompte');
        setIdCompte('');
    };

    return (
        <Box>
            <Flex bg="blue.700" p={4} align="center" justify="space-between">
                <Heading size="md" color="white">
                    <Image width={'15em'} src="https://cdn.discordapp.com/attachments/1024302627292459008/1117959731244437514/credit-quebecois.png" alt="Logo Crédit Québecois"></Image>
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
                        mr={2}
                    >
                        Effectuer des transactions
                    </Button>
                    {idCompte != '' && (
                        <Button onClick={handleDeconnexion}>Se Déconnecter</Button>
                    )}
                </Flex>
            </Flex>
            <Box p={8}>
                {selectedTab === 'accueil' && <Accueil/>}
                {selectedTab === 'createAccount' && <CreerCompte/>}
                {selectedTab === 'viewAccount' && <ConsulterCompte/>}
                {selectedTab === 'performTransaction' && <EffectuerTransactions/>}
            </Box>
            <Footer/>
        </Box>
    );
};

const App = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark"/>
            <BanqueHome/>
        </ChakraProvider>
    );
};

export default App;
