import { Flex, Image, Text } from "@chakra-ui/react";

export function Technologies() {
    return (
        <Flex>
            <Flex
                padding='6px 8px'
                background='purple'
                borderRadius='full'
                gap='8px'
                align='center'
            >
                <Image
                    src="https://github.com/ecthon-b.png"
                    w='32px'
                    h='32px'
                    borderRadius='full'
                />
                <Text
                    fontWeight='semibold'
                    color='#fff'
                >
                    Ecthon
                </Text>
            </Flex>
        </Flex>
    )
}