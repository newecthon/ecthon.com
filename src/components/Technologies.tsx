import { Flex, Image, Text } from "@chakra-ui/react";

export function Technologies() {
    return (
        <Flex>
            <Flex
                padding='12px 16px'
                background='purple'
                borderRadius='full'
                gap='8px'
                align='center'
            >
                <Image
                    src="https://github.com/ecthon-b.png"
                    w='24px'
                    h='24px'
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