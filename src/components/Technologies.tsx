import { Flex, Image, Text } from "@chakra-ui/react";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { double } from "./techs";

const animation = { duration: 50000, easing: (t: number) => t }

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
            maxW='1120px'
            margin='0 auto'
            mt='64px'
            mb='64px'
            gap='16px'
            className="mask"
            overflow='hidden'
        >
                {double.map((item, index) => (
                    <Flex
                        key={index}
                        // maxW='200px'
                        // padding='12px 16px'
                        background='#282828'
                        // borderRadius='full'
                        gap='8px'
                        // align='center'
                        className="myclass keen-slider__slide"
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