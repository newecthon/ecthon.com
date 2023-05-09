import { Flex, Text } from "@chakra-ui/react";
import { TagUser } from "iconsax-react";

export function Heading() {
    return (
        <Flex
            w='1120px'
            h='300px'
            direction='column'
            margin='0 auto'
            align='center'
            justify='center'
        >
            <TagUser size="32" color='#83868A' variant="TwoTone"/>
            <Text
                fontSize='40'
                color='#fff'
                mt='4px'
            >
                Ecthon Almeida
            </Text>
            <Text
                color='#83868A'
            >
                Front-end & UI Designer
            </Text>
        </Flex>
    )
}