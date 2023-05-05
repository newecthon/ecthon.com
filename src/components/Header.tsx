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
            >
                <Link href='/' color='#fff' fontSize='40px'>ecthon</Link>

                <Flex as='nav'
                    gap='16px'
                >
                    {pages.map(item => (
                        <Link key={item} href={item} color='#fff'
                            background={item === selectedTab ? "red" : ""}
                            padding='20px'
                            textDecor='none'
                            transition='color 0.3s ease-in-out'
                            onMouseMove={() => setSelectedTab(item)}
                        >
                            {item}
                        </Link>
                    ))}
                    
                </Flex>
            </Flex>
        </Flex>
    )
}