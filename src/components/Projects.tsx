import { Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { color } from "framer-motion";
import { useState } from "react";

const projetos = [
    {
        name: 'Name One',
        type: 'Rocket',
        stack: 'UI Design',
        url: 'https://framerusercontent.com/images/mS2ifdJRDbVaHbj8DUqxLF76kBo.webp'
    },
    {
        name: 'Name Tow',
        type: 'Personal',
        stack: 'Front-End',
        url: 'https://framerusercontent.com/images/eHiRi6YTJ3lMGpQgXUYbrCPuFJM.webp'
    },
    {
        name: 'Name Tow',
        type: 'Personal',
        stack: 'Front-End',
        url: 'https://framerusercontent.com/images/eHiRi6YTJ3lMGpQgXUYbrCPuFJM.webp'
    }
]

export function Projects() {
    const [ isSelected, setIsSelected] = useState(false)

    function handleEffect() {
        setIsSelected(!isSelected)
    }

    return (
        <Flex
            maxW='1120px'
            margin='0 auto'
            direction='column'
        >
            <Text
                fontSize='24px'
                color='#fff'
                mb='32px'
            >
                PROJETOS
            </Text>
            
            <Flex
                w='100%'
                h='auto'
                flexWrap='wrap'
                gap='32px'
            >
                {/* CARD */}
                {projetos.map((projet, index) => (
                    <Flex
                        key={index}
                        w='352px'
                        h='382px'
                        bg='cardbg'
                        justifyContent='space-between'
                        borderRadius='10px'
                        direction='column'
                        overflow='hidden'
                        border='1px solid #282828'
                        cursor='pointer'
                        onMouseMove={handleEffect}
                    >
                        <Flex>
                            <Image
                                h='100%' 
                                src={projet.url}
                                />
                        </Flex>
                        <Flex
                            h='auto'
                            p='20px'
                            direction='column'
                            bg='#161616'
                        >
                            <Flex
                                justify='space-between'
                            >
                                <Text
                                    color='#fff'
                                    fontWeight='600'
                                    mb='4px'
                                >
                                    {projet.name}
                                </Text>
                                <Link
                                    display='flex'
                                    color='#83868A'
                                    gap='4px'
                                    transition='0.2s'
                                    _hover={{
                                        color: '#FFF'
                                    }}
                                >
                                    <ArrowSquareOut size={24} />
                                </Link>
                            </Flex>

                            <Flex
                                align='center'
                                gap='8px'
                                color="#83868A"
                            >
                                <Text fontSize='14px'>{projet.type}</Text>
                                <Flex w='4px' h='1' borderRadius='50px' bg='#83868A'/>
                                <Text fontSize='14px'>{projet.stack}</Text>
                            </Flex>

                            <Flex
                                justify='space-between'
                                gap='16px'
                                mt='16px'
                            >
                                    <Link
                                        textAlign='center'
                                        textDecor='none'
                                        width='100%'
                                        padding='4px 16px'
                                        border='1px solid transparent'
                                        borderRadius='8px'
                                        mt='8px'
                                        color='#83868A'
                                        transition='0.2s'
                                        _hover={{
                                            textDecor: 'none',
                                            color: '#FFF',
                                            border: '1px solid #282828',
                                            background: '#1C1C1C'
                                        }}
                                    >
                                        Detalhes
                                    </Link>
                                    <Link
                                        textAlign='center'
                                        textDecor='none'
                                        width='100%'
                                        padding='4px 16px'
                                        border='1px solid transparent'
                                        borderRadius='8px'
                                        mt='8px'
                                        color='#83868A'
                                        transition='0.2s'
                                        _hover={{
                                            textDecor: 'none',
                                            color: '#FFF',
                                            border: '1px solid #282828',
                                            background: '#1C1C1C'
                                        }}
                                    >
                                        Online ⚡
                                    </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>

        </Flex>
    )
}