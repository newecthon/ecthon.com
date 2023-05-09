import { Flex, Link } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Socials() {
    return (
        <Flex
                gap='16px'
            >
                <Link
                    href='#'
                    padding=' 8px'
                    borderRadius='50px'
                    border='1px solid transparent'
                    color="#83868A"
                    transition='0.2s'
                    _hover={{
                        background: '#1A1A1A',
                        border: '1px solid #282828',
                        color: '#F2F2F2'
                    }}
                >
                    <FaLinkedinIn />
                </Link>
                <Link
                    href='#'
                    padding=' 8px'
                    borderRadius='50px'
                    border='1px solid transparent'
                    color="#83868A"
                    transition='0.2s'
                    _hover={{
                        background: '#1A1A1A',
                        border: '1px solid #282828',
                        color: '#F2F2F2'
                    }}
                >
                    <FaGithub />
                </Link>
                
            </Flex>
    )
}