import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Button, Container, HStack, Radio, Heading, RadioGroup, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinsCard';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    async function fetchCoins() {

        setLoading(true);
        try {
            const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            // console.log(data);
            setCoins(data);
        }
        catch (error) {
            setError(true);
            setLoading(false);
        }

        setLoading(false);
    }

    function changePage(page) {
        setPage(page);
        setLoading(true);
    }

    // function setCurrency(event) {
    //     currency = event.target.value;
    // }

    const btns = new Array(132).fill(1)

    useEffect(() => {
        fetchCoins();
    }, [currency, page])

    if (error) {
        return <ErrorComponent></ErrorComponent>
    }

    return (
        <Container maxW={"container.xl"}>
            {
                loading ? (<Loader></Loader>) : (
                    <>
                        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                            <HStack spacing={"4"}>
                                <Radio value={"inr"}>INR</Radio>
                                <Radio value={"usd"}>USD</Radio>
                                <Radio value={"eur"}>EUR</Radio>
                            </HStack>
                        </RadioGroup>
                        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                            {
                                coins.map((i) => (
                                    <CoinsCard
                                        key={i.id}
                                        id={i.id}
                                        name={i.name}
                                        price={i.current_price}
                                        image={i.image}
                                        symbol={i.symbol}
                                        currencySymbol={currencySymbol}
                                    ></CoinsCard>
                                ))
                            }

                        </HStack>
                        <HStack w={"full"} overflowX={"auto"} p={"8"}>
                            {
                                btns.map((item, index) => (
                                    <Button key={index} bgGradient='linear(to-r, blue.700, purple.600)'
                                        color={"black"}
                                        onClick={() => changePage(index + 1)}>
                                        {index + 1}
                                    </Button>
                                ))
                            }
                        </HStack>
                    </>
                )
            }
        </Container>
    );
};

export default Coins;