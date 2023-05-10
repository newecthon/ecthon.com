import { Flex } from "@chakra-ui/react";
import { FlexProps } from "@chakra-ui/react";

interface IDivider extends FlexProps{
    width: string,
    height: string
}

export function Divider({width, height}: IDivider) {
    return (
        <Flex w={width} h={height} borderRadius='50px' bg='#83868A'/>
    )
}