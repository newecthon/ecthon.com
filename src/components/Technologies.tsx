import { Flex, Image, Text } from "@chakra-ui/react";
import { useKeenSlider } from 'keen-slider/react'


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

const animation = { duration: 5000, easing: (t: number) => t }

export function Technologies() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation )
        }
    })

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