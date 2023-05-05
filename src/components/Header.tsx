import { Link } from "@chakra-ui/next-js";
import { Flex, LinkBox } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
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
                <Link href='/'>E</Link>

                <Flex as='nav'
                    gap='16px'
                >
                    {pages.map(item => (
                        <Link href={item} color='#fff'
                            background={item === selectedTab ? "red" : ""}
                            padding='20px'
                            textDecor='none'
                            transition='color 0.3s ease-in-out'
                            _hover={{
                                color: 'red'
                            }}
                            _after={{
                                content: '""',
                                background: '#00f3f4',
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                            onMouseMove={() => setSelectedTab(item)}
                        >
                            {item}
                            {item === selectedTab ? (
                                <motion.div style={{ background: 'blue' }} layoutId="underline"/>
                            ) : null}
                        </Link>
                    ))}
                    
                </Flex>
            </Flex>
            <AnimatePresence>
                <motion.div
                    layoutId="nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 0.3 }}
                >
                </motion.div>
            </AnimatePresence>
        </Flex>
    )
}