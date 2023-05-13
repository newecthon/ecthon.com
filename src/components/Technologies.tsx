import { Flex, Image, Text } from "@chakra-ui/react";

const techs = [
    {name: 'Next.hs', img: ''},
    {name: 'TypeScript', img: ''},
    {name: 'React.js', img: ''},
    {name: 'Vercel', img: ''},
    {name: 'Chakra UI', img: ''},
    {name: 'Sass', img: ''},
    {name: 'Styled Component', img: ''},
    {name: 'HTML5', img: ''},
    {name: 'CSS3', img: ''},
    {name: 'Git', img: ''},
    {name: 'Figma', img: ''},
]

export function Technologies() {
    return (
        <Flex
            w='1120px'
            margin='0 auto'
            gap='10px'
            mb='64px'
        >
            <Flex
                padding='12px 16px'
                background='#282828'
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
                    fontSize='14px'
                >
                    Next.js
                </Text>
            </Flex>
        </Flex>
    )
}