import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    // global styles
    styles: {
        global: {
            body: {
                bg: 'bggray',
            }
        }
    },
    // colors
    colors: {
        bggray: '#161616'
    },
    // external fonts
    fonts: {
        heading: ``,
        body: `'Bai Jamjuree', sans-serif`,
    },
})

export default theme