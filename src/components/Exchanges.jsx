import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchExchanges() {

        setLoading(true);
        try {
            const { data } = await axios.get(`${server}/exchanges`);
            setExchanges(data);
        }
        catch (error) {
            setError(true);
            setLoading(false);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchExchanges();
    }, [])

    if (error) {
        return <ErrorComponent message={"Error while fetch"}></ErrorComponent>
    }

    return (
        <Container maxW={"container.xl"} >
            {
                loading ? (<Loader></Loader>) : (
                    <>
                        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                            {
                                exchanges.map((i) => (
                                    <ExchangeCard key={i.id} name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url}></ExchangeCard>
                                ))
                            }

                        </HStack>
                    </>
                )
            }
        </Container>
    );
};

export default Exchanges