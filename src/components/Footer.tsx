import { Flex, Text } from "@chakra-ui/react";

import { Socials } from "./Socials";
import { Divider } from "./Divider";

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
            <Flex
                align='center'
                gap='8px'
            >
                <Text color='#83868A'>{currentYear}</Text>
                <Divider width="4px" height="4px" />
                <Text color='#83868A'>
                    Code with ❤️ by <Text as='span' color='#FFF'>Ecthon</Text>.
                </Text>
            </Flex>
            <Socials />
        </Flex>
    )
}