import {Box, Button, Divider, Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {FaChartLine, FaCreditCard, FaEnvelope, FaMoneyCheckAlt, FaPhoneAlt} from "react-icons/fa";
import React from "react";

const Accueil = () => {
    return (
        <Box>
            <Heading size="xl" textAlign="center" mb={4}>
                Bienvenue sur l'application Crédit Québecois
            </Heading>
            <Box textAlign="center" mb={"2em"}>
                La banque la plus souriante de tout le lac St Jean.
            </Box>
            <Flex align="center" justify="center" mt={4}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    <GridItem>
                        <Image
                            src="https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                            alt="Slide 1"
                            h={200}
                            w="100%"
                            objectFit="cover"
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="https://images.unsplash.com/photo-1439066290691-510066268af5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
                            alt="Slide 2"
                            h={200}
                            w="100%"
                            objectFit="cover"
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                            alt="Slide 3"
                            h={200}
                            w="100%"
                            objectFit="cover"
                        />
                    </GridItem>
                </Grid>
            </Flex>
            <Divider mt={8} mb={8}/>
            <Box textAlign="center">
                <Heading size="md" mb={4}>
                    À propos de nous
                </Heading>
                <Text>
                    Chez Crédit Québécois, nous croyons en la simplicité, la transparence et la satisfaction de nos
                    clients.
                    Nous sommes une banque locale qui offre une gamme complète de services financiers adaptés aux
                    besoins de la population du lac St Jean.
                    Que vous souhaitiez ouvrir un compte d'épargne, obtenir un prêt hypothécaire ou simplement consulter
                    votre solde, nous sommes là pour vous.
                </Text>
            </Box>
            <Divider mt={8} mb={8}/>
            <Box textAlign="center">
                <Heading size="md" mb={4}>
                    Nos services
                </Heading>
                <Text>
                    Chez Crédit Québécois, nous offrons une variété de services bancaires pour répondre à vos besoins
                    financiers :
                </Text>
                <Box mt={4} mb={4}>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <GridItem>
                            <Box p={4} borderWidth="1px" borderRadius="lg">
                                <FaMoneyCheckAlt/>
                                <Heading size="sm" mb={2}>
                                    Comptes bancaires
                                </Heading>
                                <Text>
                                    Ouvrez un compte courant ou un compte d'épargne pour gérer vos finances quotidiennes
                                    et épargner pour l'avenir.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box p={4} borderWidth="1px" borderRadius="lg">
                                <FaCreditCard/>
                                <Heading size="sm" mb={2}>
                                    Cartes de crédit
                                </Heading>
                                <Text>
                                    Profitez de nos cartes de crédit avec des avantages exclusifs et des programmes de
                                    récompenses attrayants.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box p={4} borderWidth="1px" borderRadius="lg">
                                <FaChartLine/>
                                <Heading size="sm" mb={2}>
                                    Investissements
                                </Heading>
                                <Text>
                                    Explorez nos options d'investissement pour faire fructifier votre argent et
                                    atteindre vos objectifs financiers.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
                <Button colorScheme="blue" size="lg">
                    Découvrez tous nos services
                </Button>
                <Divider mt={8} mb={8}/>
                <Box textAlign="center">
                    <Heading size="md" mb={4}>
                        Contactez-nous
                    </Heading>
                    <Text>
                        Vous avez des questions ou des préoccupations ? N'hésitez pas à nous contacter :
                    </Text>
                    <Box mt={4} mb={4}>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <GridItem>
                                <Box p={4} borderWidth="1px" borderRadius="lg">
                                    <FaPhoneAlt/>
                                    <Text>
                                        Téléphone : +1 123 456 7890
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box p={4} borderWidth="1px" borderRadius="lg">
                                    <FaEnvelope/>
                                    <Text>
                                        Email : info@creditquebecois.qc.ca
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <Divider mt={8} mb={8}/>
            </Box>
        </Box>
    )
}

export default Accueil;