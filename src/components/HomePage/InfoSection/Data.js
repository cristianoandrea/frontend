import Cane1 from '../../../images/svg-1.svg'
import Cane2 from '../../../images/svg-2.svg'
import Gatto1 from '../../../images/svg-3.svg'
import Gatto2 from '../../../images/svg-4.svg'

let store= "/store"

export const homeObjOne = { //light
    id: 'about',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'E poi gli dico',
    headline:'Che non me li aspettavo',
    description: 'Tutti questi addii',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Cane2,
    alt: 'cane',
    dark: false,
    primary: false,
    link: 5,
    darkText: true,
    
}

export const homeObjTwo = { //dark
    id: 'store',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Store',
    headline:'Pensavo che ogni cosa che amavo poi rimaneva mia',
    description: 'Però pensavo male',
    buttonLabel: 'Vai allo store',
    imgStart: true,
    img: Cane1,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false,
    link: 0,
}



export const homeObjThree = { //light
    id: 'presenza',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Presenza',
    headline:'Il fatto è che non c è',
    description: 'Una regola o una morale da ricavare',
    buttonLabel: 'Visualizza i servizi in presenza',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    link: 1,
    darkText: true,
    
}

export const homeObjFour = { //dark
    id: 'online',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Prodotti',
    headline:'Sono con lo stesso amico mio',
    description: 'È una sera di alcuni anni dopo, lo stringo vicino',
    buttonLabel: 'Vai ai servizi online',
    imgStart: true,
    img: Gatto2,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false,
    link: 2,
}

export const homeObjFive = { //light
    id: 'community',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'cuccioli',
    headline:'Siamo affacciati da una finestra qualunque, sopra un cortile qualunque',
    description: 'Ma questa notte ci sentiamo vicinissimi al nostro destino',
    buttonLabel: 'Community hub',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    link: 3,
    darkText: true,
    
}

export const homeObjSix = { //dark
    id: 'servizi',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Servizi',
    headline:'Parliamo del male, in generale',
    description: 'Di quello che abbiamo ricevuto E di quello che commettiamo noi',
    buttonLabel: 'Get started',
    imgStart: true,
    img: Gatto2,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false,
    link: 4,
}