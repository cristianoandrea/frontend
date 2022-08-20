import React, {useEffect, useState} from 'react'
import {Button} from '../../ButtonElement'

import{
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'

//let link="store"


const InfoSection = ({ 
    lightBg,
    id,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    description, 
    darkText, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,
    link
 }) => {

    const [link1, setLink1] = useState('/store')

    const setLink = () =>{
        if(link==0)  setLink1('/store');
        else if (link==1)  setLink1('/presenza');
        else if (link==2)  setLink1('/online');
        else if (link==3)  setLink1('/community');
        else if (link==4)  setLink1('/servizi');
        else if (link==5)  setLink1('/signin');
    }

    useEffect(()=> {
        setLink()
    }, []);
  return (
    <>

    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText} >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    <BtnWrap>
                        <Button to={link1}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}

                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>


    </>
  )
}

export default InfoSection