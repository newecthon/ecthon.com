import { Flex, Image, Text } from "@chakra-ui/react";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


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

const animation = { duration: 70000, easing: (t: number) => t }

export function Technologies() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,

        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })

    return (
        <Flex
            ref={sliderRef}
            maxW='100%'
            margin='0 auto'
            mt='64px'
            mb='64px'
            gap='16px'
            className="mask"
            overflow='hidden'
        >
                {techs.map((item, index) => (
                    <Flex
                        key={index}
                        maxW='200px'
                        padding='12px 16px'
                        background='#282828'
                        borderRadius='full'
                        gap='8px'
                        align='center'
                        className="keen-slider__slide"
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
                            {item.name} - {index}
                        </Text>
                    </Flex>
                ))}
        </Flex>
    )
}