import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

const Header = () => {
    return (
        <HStack p={"4"} shadow={"base"} bgGradient='linear(to-r, blue.700, purple.600)'>

            <Button variant={"unstyled"} color={"white"} fontWeight={'bold'}
                css={css`
               &:hover {
                  color: black;
                }
            `}
            >
                <Link to="/"> Home</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} fontWeight={'bold'}
                css={css`
            &:hover {
               color: black;
             }
         `}
            >
                <Link to="/exchanges"> Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} fontWeight={'bold'}
                css={css`
            &:hover {
               color: black;
             }
         `}
            >
                <Link to="/coins"> Coins</Link>
            </Button>

        </HStack>
    )
}

export default Header