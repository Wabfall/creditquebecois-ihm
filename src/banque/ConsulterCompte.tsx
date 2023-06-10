import React, { useState } from "react";
import axios from "axios";
import { Box, Divider, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import ConnexionCompte from "./composants/ConnexionCompte";

interface CompteData {
    nomDeCompte: string;
    soldeCompte: number;
    listeTransactions: {
        id: string;
        estNegatif: boolean;
        montantTransaction: number;
        typeTransaction: string;
        titreTransaction: string;
        dateOperation: string;
    }[];
}

const formatDate = (isoDate: string): string => {
    const date = parseISO(isoDate);
    const formattedDate = format(date, "EEEE d MMMM", { locale: fr });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

const ConsulterCompte = () => {
    const [compteData, setCompteData] = useState<CompteData | null>(null);

    const handleConsulterCompte = (idCompte: string) => {
        axios
            .get(`http://localhost:8080/banque/${idCompte}/consulterCompte`, {
                headers: {
                    Accept: "application/json"
                }
            })
            .then((res) => {
                console.log("Réponse de la requête de consultation de compte", res.data);
                setCompteData(res.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la consultation du compte", error);
            });
    };

    return (
        <Box>
            {compteData ? (
                <Box>
                    <Heading size="xl" textAlign="center" mb={4}>
                        Consulter compte
                    </Heading>
                    <Divider mb={"1.5em"} />
                    <Box textAlign="center">
                        <Heading size="xl" mb={4}>
                            {compteData.nomDeCompte}
                        </Heading>
                        <Heading size="2xl" mb={4}>
                            {compteData.soldeCompte} $ CA
                        </Heading>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Type</Th>
                                    <Th>Titre</Th>
                                    <Th>Montant</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {compteData.listeTransactions?.map((transaction) => (
                                    <Tr key={transaction.id}>
                                        <Td>{formatDate(transaction.dateOperation)}</Td>
                                        <Td>{transaction.typeTransaction}</Td>
                                        <Td>{transaction.titreTransaction}</Td>
                                        {transaction.estNegatif ? (
                                            <Td> -{transaction.montantTransaction} $ CA</Td>
                                        ) : (
                                            <Td
                                                backgroundColor="black"
                                                color="green.500"
                                                borderRadius="xl"
                                                p={2}
                                            >
                                                + {transaction.montantTransaction} $ CA
                                            </Td>
                                        )}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            ) : (
                <ConnexionCompte handleSeConnecter={handleConsulterCompte} />
            )}
        </Box>
    );
};

export default ConsulterCompte;
