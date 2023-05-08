import { Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useState } from "react";

const projetos = [
    {
        name: 'Name Project',
        type: 'personal',
        stack: 'Front-End',
        url: 'https://framerusercontent.com/images/mS2ifdJRDbVaHbj8DUqxLF76kBo.webp'
    },
    {
        name: 'Name Project',
        type: 'personal',
        stack: 'Front-End',
        url: 'https://framerusercontent.com/images/mS2ifdJRDbVaHbj8DUqxLF76kBo.webp'
    }
]

export function Heading() {
    const [ isSelected, setIsSelected] = useState('');

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
                <Flex
                    w='352px'
                    h='auto'
                    bg='cardbg'
                    borderRadius='10px'
                    direction='column'
                    overflow='hidden'
                    border='1px solid #282828'
                    cursor='pointer'
                >
                    <Flex>
                        <Image
                            h='100%' 
                            src='https://framerusercontent.com/images/mS2ifdJRDbVaHbj8DUqxLF76kBo.webp'
                            _hover={{
                                filter: 'blur(2px)'
                            }}
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
                                Name Project
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
                            <Text fontSize='14px'>Personal</Text>
                            <Flex w='4px' h='1' borderRadius='50px' bg='#83868A'/>
                            <Text fontSize='14px'>Front-End</Text>
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
            </Flex>

        </Flex>
    )
}