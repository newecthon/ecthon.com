import { Link } from "@chakra-ui/next-js";
import { Flex, LinkBox } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
    const pages = [
        "Home",
        "About",
        "Contato"
    ]
    const [selectedTab, setSelectedTab] = useState(pages[0])

    return (
        <Flex
            w='100%'
            h='80px'
            align='center'
            justify='center'
            background='#1C1C1C'
        >
            <Flex as='header'
                minW='1120px'
                justifyContent='space-between'
                align='center'
            >
                <Link href='/' color='#fff' fontSize='40px'>ecthon</Link>

                <Flex as='nav'
                    gap='16px'
                >
                    {pages.map(item => (
                        <Link
                            key={item}
                            href={item}
                            padding=' 8px 16px'
                            borderRadius='10px'
                            border='1px solid transparent'
                            color="#83868A"
                            transition='0.2s'
                            _hover={{
                                textDecor: 'none',
                                background: '#1A1A1A',
                                border: '1px solid #282828',
                                color: '#F2F2F2'
                            }}
                        >
                        {item}
                    </Link>
                    ))}
                    
                </Flex>
            </Flex>
        </Flex>
    )
}