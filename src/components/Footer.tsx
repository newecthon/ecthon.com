import { Flex, Text } from "@chakra-ui/react";

import { Socials } from "./Socials";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as='footer'
            w='1120px'
            h='60px'
            margin='0 auto'
            align='center'
            justify='space-between'
        >
            <Text color='#83868A'>{currentYear} - Code with ❤️ by <Text as='span' color='#FFF'>Ecthon</Text>.</Text>
            <Socials />
        </Flex>
    )
}