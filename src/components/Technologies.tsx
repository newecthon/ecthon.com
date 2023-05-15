import { Flex, Image, Text } from "@chakra-ui/react";

const techs = [
    {name: 'Next.js', img: ''},
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
            mt='64px'
            mb='64px'
            className="mask"
            overflow='hidden'
        >
                {techs.map(item => (
                    <Flex
                        key={item.name}
                        flex='none'
                        padding='12px 16px'
                        background='#282828'
                        borderRadius='full'
                        gap='8px'
                        align='center'
                        className="animation"
                        mr='16px'
                    >
                    <Image
                        src="https://github.com/ecthon-b.png"
                        alt=""
                        w='24px'
                        h='24px'
                        borderRadius='full'
                    />
                    <Text
                        fontWeight='semibold'
                        color='#fff'
                        fontSize='14px'
                        align='center'
                    >
                        {item.name}
                    </Text>
                    </Flex>
                ))}
        </Flex>
    )
}