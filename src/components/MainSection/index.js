import React , {useState} from 'react'
import {Button} from '../ButtonElement'
import {
    HeroContainer,
    HeroBG,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
    } from './MainElements'

const MainSection = () => {
    const[hover,setHover] = useState(false)

    const onHover= () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroContent>
            <HeroH1>
                Mio padre è un pollacchione
            </HeroH1>
            <HeroP>
                idee tanto poche, realizzazione tanto svogliata
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup'
                onMouseEnter={onHover}
                onMouseLeave={onHover} 
                primary="true"
                dark="true">
                    Entra in questo bluff {hover ? <ArrowForward/> : <ArrowRight/>}

                </Button>
            </HeroBtnWrapper>
        </HeroContent>

        

    </HeroContainer>
  )
}

export default MainSection