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
            // className="animation"
            overflow='hidden'
            transform='0, 0, 0'
            bg='red'
        >
                {techs.map(item => (
                    <Flex
                    key={item.name}
                    minW='100px'
                    // padding='12px 16px'
                    background='#282828'
                    borderRadius='full'
                    gap='8px'
                    align='center'
                    justifyContent='center'
                    // className="animation"
                >
                    <Image
                        src="https://github.com/ecthon-b.png"
                        alt=""
                        w='24px'
                        h='24px'
                        borderRadius='full'
                    />
                    <Text
                        w='auto'
                        fontWeight='semibold'
                        color='#fff'
                        fontSize='14px'
                    >
                        {item.name}
                    </Text>
                </Flex>
                ))}
        </Flex>
    )
}