import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

export function Header() {
    return (
        <Flex
            w='100%'
            h='80px'
            align='center'
            justify='center'
            background='#1C1C1C'
        >
            <Flex as='header'
                minW='1120px'
                justifyContent='space-between'
            >
                <Link href='/'>E</Link>

                <Flex as='nav'
                    gap='16px'
                >
                    <NavItem path="/" label="Home"/>
                    <NavItem path="/" label="Stack"/>
                    <NavItem path="/" label="Portfolio"/>
                    <NavItem path="/" label="Contato"/>
                </Flex>

            </Flex>
            
        </Flex>
    )
}