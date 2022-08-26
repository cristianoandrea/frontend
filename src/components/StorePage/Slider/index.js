import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import React from 'react'
import { Arrow, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper, Container } from './SliderElements';
import { sliderItems } from "../data";
import { Button1 } from "../../ButtonElement";

const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    };
    

  return (
      <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
              <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map((item)=> (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button1 to={""}>{item.button}</Button1>
                        </InfoContainer>
                    </Slide>


                )
            )}
            
          </Wrapper>
          
          <Arrow direction="right" onClick={() => handleClick("right")}>
              <ArrowRightOutlined />
          </Arrow>
      </Container>
  )
}

export default Slider