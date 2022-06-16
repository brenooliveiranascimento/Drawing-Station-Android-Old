import React, { useState, createContext } from "react";
export const ExerContext = createContext()
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore'

export default function ExercicioProvider({children}){

    const [marca, setMarca] = useState('fabber');


const [degradeVermelho,setDegradeVermelho] = useState([
    {
    id:1,    
    cor:'preto',
        descricao:`Primeira cor que utilizaremos será o preto.
        como é a primeira camada de lápis, é normal que fique vários pontinhos
        brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(17).png?alt=media&token=ee9d66b9-a728-483e-b00d-880ecbac614d',
    },
    {
    id:2,    
    cor:'cinza escuro',
        descricao:`Próxima cor que utilizaremos será o cinza escuro, aplicaremospor toda a aré onde aplicamos o lápis preto
        com a mesma idéia de aplicar mais força na aréa de sombra e ir soltando mais a mão
        conforme se aproxima da aréa de luz`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(18).png?alt=media&token=8d361afe-c672-49e3-8cc2-37f28386b7d2'
    },
    {
    id:3,    
    cor:'Vermelho escuro',
        descricao:`Próxima cor que aplicaremos será o vermelho escuro, podemos aplicar bem mais pressão
        nas aréas onde nos aplicamos o preto e o marrom para já irmos finalizando
        a aréa de sombra, e soltamos mais a mão conforme nos aproximamos da aréa de luz`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(19).png?alt=media&token=5fc56c30-a2b7-4c98-a827-09d70a99b206'
    },
    {
    id:4,    
    cor:'preto',
        descricao:`Retornamos com o Preto para escurecer mais a area de sombra apertando um pouco mais a mão,
        mas não tanto pois ainda aplicaremos outras camadas a seguir`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(20).png?alt=media&token=8a618c37-2fa5-42d2-9e72-2e84fb6e4d7b'
    },
    {
        id:5,    
        cor:'cinza escuro',
        descricao:`Novamente voltamos com o cinza escuro para preencher mais os poros brancos do papel`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(21).png?alt=media&token=a69e5e57-ffd1-463f-a412-649d6d1d5c80'
    },
    {
    id:6,    
    cor:'vermelho escuro',
        descricao:`Voltamos agora com o vermelho escuro, agora apertando bem a mão para já finalizarmos essa aréa de sombra do desenho, e preenchendo mais ainda o quadrado preparando terreno para a próxima cor`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(22).png?alt=media&token=9e355dd6-8499-4bf0-adff-80285bdd807e'
    },
    {
    id:7,    
    cor:'Vermelho',
        descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(23).png?alt=media&token=63d3721c-85a6-448e-99e4-caa586f768b0'
    },
    {
    id:8,    
    cor:'Rosa Claro',
        descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(24).png?alt=media&token=ac8c597a-ff77-4131-93f9-0fc04fd6222d'
    },
    {
    id:9,    
    cor:'branco',
        descricao:`por fim utilizaremos o branco apenas na aréa extrema de luz onde falta finalizar o rosa claro`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(25).png?alt=media&token=01d20a2e-c3a2-4c2c-9a55-bbf2146c0c50'
    },
    ]);

    const [degradeVerde, setDegradeVerde] = useState([
    {cor:'preto',
    key:1,
    descricao:`Primeira cor que utilizaremos será o preto.
        como é a primeira camada de lápis, é normal que fique vários pontinhos
        brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(26).png?alt=media&token=6d9af340-35d1-46df-a75e-40bcc758ad20',
    },
    {cor:'cinza escuro',
    key:2,
    descricao:`Próxima cor que utilizaremos será o cinza escuro, aplicaremospor toda a aré onde aplicamos o lápis preto
        com a mesma idéia de aplicar mais força na aréa de sombra e ir soltando mais a mão
        conforme se aproxima da aréa de luz`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(27).png?alt=media&token=52afa48d-f05a-4471-9443-7014628920e9'
    },
    {cor:'verde',
    key:3,
        descricao:`Próxima cor que aplicaremos será o verde, podemos aplicar bem mais pressão
        nas aréas onde nos aplicamos o preto e o marrom para já irmos finalizando
        a aréa de sombra, e soltamos mais a mão conforme nos aproximamos da aréa de luz`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(28).png?alt=media&token=9a102f26-3d33-4213-bcb3-1cff69e8fa29'
    },
    {cor:'preto',
    key:4,
        descricao:`Retornamos com o Preto para escurecer mais a area de sombra apertando um pouco mais a mão,
        mas não tanto pois ainda aplicaremos outras camadas a seguir`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(29).png?alt=media&token=4f5d7034-957d-4e16-bd82-5cda59c1a27d'
    },
    {cor:'cinza escuro',
    key:5,        
        descricao:`Novamente voltamos com o cinza escuro para preencher mais os poros brancos do papel`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(30).png?alt=media&token=9f5dab87-daa4-42e0-b492-59481b4e4625'
    },
    {cor:'Verde',
    key:6,
        descricao:`Voltamos agora com o Verde, agora apertando bem a mão para já finalizarmos essa aréa de sombra do desenho, e preenchendo mais ainda o quadrado preparando terreno para a próxima cor`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(31).png?alt=media&token=6281b4c5-bca7-4a14-9007-8ab412838db7'
    },
    {cor:'Verde folha',
    key:7,
        descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(32).png?alt=media&token=3c3188ca-acf9-4d2d-b6fc-54e191df19a6'
    },
    {cor:'Verde Claro',
    key:8,
        descricao:`Agora é o verde claro, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(33).png?alt=media&token=1269128b-bf72-4726-bb79-4da879d6bccf'
    },
    {cor:'branco',
    key:9,
        descricao:`por fim utilizaremos o branco apenas na aréa extrema de luz onde falta finalizar o rosa claro`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(34).png?alt=media&token=12a2c304-493a-473a-aa5e-0ec44b27f32e'
    },
    ]);

    const [bola, setBola] = useState([
    {
        id:1,    
        cor:'preto',
        descricao:`bem, aqui o conceito da pintura será a mesma do quadradinho, com a mudança de que aqui nos
        vamos introduzir um pouco na questão de profundidade, vamos começar com o preto pintando a aréa 
        de combra, vale lembrar que a aréa de sombra segue um pouco a circonferencia do circulo
        entaõ analisem bem a referencia, olhem o formado da sombra, onde ela inicia e termina.
        pertando um pouco mais na aréa onde a somrbra é mais intensa e soltamos a mão conforme nos
        aproximamos da aréa de luz. `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F1.png?alt=media&token=a6da4449-2ea2-4020-aaa9-0265262ddf10',
    },
    {
    id:2,    
    cor:'cinza escuro',
        descricao:`proxima cor que utilizaremos será o cinza escuro.
        nos passaremos o cinza escuro po toda a parte pnde aplicamos o preto.
        seguindo o mesmo conceito de apretar mais na aréa de sombra intensa e soltando a mão conforme
        nos aproximamos da aréa de luz. lembrando de sempre preencher mais o desenho conforme nos aplicamos as proxímas camadas
        de lápis e fazendo a finalizaçaõ dela o mais suave possivel para que não fique marcado.
        lembrando sempre de fazer sempre pequenos movimentos circulares.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F2.png?alt=media&token=53749af4-8a75-4081-8d79-ede245b1bdb8'
    },
    {cor:'Marrom',
    id:3,    
    descricao:`próxima cor que aplicaremos é o marrom, vamos aplicar por toda aré onde aplicamos as cores anteriores
        preenchendo cada vez mais o desenho e fazendo a finalização sempre bem suzave.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F3.png?alt=media&token=a4822a25-672c-48d5-a807-699ffd568064'
    },
    {cor:'Vermelho escuro',
    id:4,    
    descricao:`próxima será o vermelho escuro, seguindo sempre o mesmo conceito de aplicar por cima das cores anteriores e prenchendo cada vez
        mais o desenoho! Lembrando que ainda não é a hora de aplicarmos muita força pois nos ainda vamos voltar com outa cor
        para deixar essa aréa um pouco mais escura`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F4.png?alt=media&token=34b0d4cf-2836-47b2-85cc-762935fb978a'
    },
    {cor:'cinza escuro',
    id:5,    
    descricao:`agora volltamos com o cinza escuro passando com um pouco mais de força para deixarmos 
        essa aréa mais escura, dessa vez passamos o cinza escuro somente na aréa de sombra mais intensa`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F5.png?alt=media&token=aa77dfe8-6a7f-404a-a997-90a41de12688'
    },
    {cor:'Vermelho escuro',
    id:6,    
    descricao:`agora sim voltamos com o vermelho escuro aplicando com bastante força na aréa de sombra para
        já irmos finalizando a aréa de sombra, lembrando de deixar sempre o láis bem afida quando
        se vai finalizar alguma parte da pintura, pois como já se tem bastante pigmento de lápis nessa aréas o que acaba
        deixando mais dificil de misturar  os lápis nessa aréas`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F6.png?alt=media&token=ac7ac7a4-2186-439d-b904-aefe4ce1e0ba'
    },
    {cor:'Vermelho',
    id:7,    
    descricao:`agora vamos utilizar o vermelho pasando por toda aréa onde aplicamos o vermelho escuro`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F7.png?alt=media&token=9b6cec99-f939-4323-80d8-7f021188b661'
    },
    {cor:'Vermelho escuro',
    id:8,    
    descricao:`aqui eu vi a necessidade  de escurecer um pouco mais então resolvi voltar com o vermelho escuro
        passando nessas aréas onde via necessidade. isso vai acontecer as vezes, voltar com uma tonalidade mais escura para dar
        um acabamento melhor na pintura.`,
        url:'ing-station.appspot.com/o/Bola%2F8.png?alt=media&token=885dc1fc-a14c-4a37-8072-a9c1b96d6ee7'
    },
    {cor:'vermelho',
    id:9,    
    descricao:`agora voltamos com o vermelho aplicando na aréa do vermelho escuro, vale lembrar que não aplicamos o vermelho na a´rea de somrbra 
        por já termos ifinalizado ela. e nunca é bom passar uma cor mais clara nas aréas de combra posi
        acaba perdendo a saturação e o contraste com o resto do desenho`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F9.png?alt=media&token=84575b20-d5c3-486e-b3d4-0faa33bea257'
    },
    {cor:'Rosa claro',
    id:10,    
    descricao:`agra pasamos o rosa claro somente nas aréas de luz `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F10.png?alt=media&token=09d886a9-20ce-4c13-8bc3-164751c98430'
    },
    {cor:'Branco',
    id:11,    
    descricao:`e por fim passamos o branco nas aréas de luz mais intensa`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Bola%2F11.png?alt=media&token=c517d42f-4234-4c49-a4cd-2119526111dd'
    },

    ]);


    const [petalas, setPetalas] = useState([
    {cor:'preto',
    id:1,    
    descricao:`primeira cor que utilizaremos será o preto.
        como é a primeira camada de lápis, é normal que fique vários pontinhos
        brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F1.jpg?alt=media&token=46b4cfc1-8dd4-4e02-931f-25e3dd7d8d42',
    },
    {cor:'cinza escuro',
    id:2,    
    descricao:` segundo lápis que iremos utilizar será o  cinza escuro.
        aplicaremos por toda aré onde passamos o preto.
        aplicamos um pouco mais de força nas aréas de sombra e soltamos a mão 
        conforme nos aproxmamos das areas de luz.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F2.jpg?alt=media&token=e83f2e69-2ade-4743-b4ad-11f6521b7fe4'
    },
    {cor:'Vermelho escuro',
    id:3,    
    descricao:`próxima cor que utilizaremos será o vermelho escuro, aplicaremos por toda aréasonde aplicamos o 
        cinza escuro, colocamos um pouco mais de pressão nas aréas mais escuras
        e sotamos a mão conforme nos apróximamos das aréas de luz.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F3.jpg?alt=media&token=b0b8b399-0700-488e-b798-4e6b2387eb44'
    },
    {cor:'Preto',
    id:4,    
    descricao:`próxima cor que utilizaremos será o Preto.
        utilizaremos ele para escurecer algumas aréas do desenho.
        lembrando de deixar sempre a ponta do lápis sempre bem afiada..`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F4.jpg?alt=media&token=15aa95f2-43ad-4145-a694-23875551991c'
    },
    {cor:'Vermelho escuro',
    id:5,    
    descricao:`retornamos com o lápis vermelho escuro.
        podemos colocar mais pressão nas aréas mais escuras para irmos finalizando a pintura nessas aréas.
        e soltamos a mão conforme nos apróximamos da aréa de luz.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F5.jpg?alt=media&token=5f6f21cf-cd44-4828-8667-5d9c43e33913'
    },
    {cor:'Carmim',
    id:6,    
    descricao:`agora vamos utilizar o carmim, aplicando com pouquissima força
        apenas para tonalizar as aréas mais claras.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F6.jpg?alt=media&token=44a9a88e-a073-44e5-929d-213a0ee6d0f7'
    },
    {cor:'Vermelho',
    id:7,    
    descricao:`agora utilizaremos o lápis vermelho, podemos utilizar um pouco mais de pressão nas aréas mais
        claras para já irmos finalizando, deixando apenas um leve degrade ali nas dobrinhas das pétals para finalizaros
        com o lápis rosa claro.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F7.jpg?alt=media&token=ae045e50-02d2-46bf-ab2e-3001a9130d9a'
    },

    {cor:'Rosa claro',
    id:8,    
    descricao:`e por fim utilizadmos o lápis rosa claro nas partes mais mlaras
    onde falta deixar a pintura homogenea.`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/petalas%2F8.jpg?alt=media&token=37487f96-cadb-43ae-a40d-88319a0cbf3b'
    }

    ]);



    const [degradeAzul, setDegradeAzul] = useState([
    {cor:'preto',
    id:1,    
    descricao:`Primeira cor que utilizaremos será o preto.
        como é a primeira camada de lápis, é normal que fique vários pontinhos
        brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(37).png?alt=media&token=4645518f-df68-45a5-91d0-9496b0cd2bae',
    },
    {cor:'cinza escuro',
    id:2,    
    descricao:`Próxima cor que utilizaremos será o cinza escuro, aplicaremospor toda a aré onde aplicamos o lápis preto
    com a mesma idéia de aplicar mais força na aréa de sombra e ir soltando mais a mão
    conforme se aproxima da aréa de luz`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(38).png?alt=media&token=b8f5a35e-de5c-49ce-9c41-a21bb89f0bad'
    },
    {cor:'Azul turquesa',
    id:3,    
    descricao:`Próxima cor que aplicaremos será o azul turquesa, podemos aplicar bem mais pressão
    nas aréas onde nos aplicamos o preto e o marrom para já irmos finalizando
    a aréa de sombra, e soltamos mais a mão conforme nos aproximamos da aréa de luz`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(39).png?alt=media&token=2d60ca26-bda3-4e88-92fa-ef871d74ff05'
    },
    {cor:'Preto',
    id:4,    
    descricao:`Retornamos com o Preto para escurecer mais a area de sombra apertando um pouco mais a mão,
    mas não tanto pois ainda aplicaremos outras camadas a seguir`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(40).png?alt=media&token=68ffba0b-8192-4236-aa96-3c713a7ee881'
    },
    {cor:'Cinza escuro',
    id:5,    
    descricao:`Novamente voltamos com o cinza escuro para preencher mais os poros brancos do papel`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(41).png?alt=media&token=131ea3d5-c775-42be-95c2-d93c8bc0b9c2'
    },
    {cor:'Azul real',
    id:6,    
    descricao:`Voltamos agora com o azul real, agora apertando bem a mão para já finalizarmos essa aréa de sombra do desenho, e preenchendo mais ainda o quadrado preparando terreno para a próxima cor`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(42).png?alt=media&token=fd8b8349-8b77-433c-98ca-63c192d834b2'
    },
    {cor:'Azul',
    id:7,    
    descricao:`Agora é o azul, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(44).png?alt=media&token=33864e3c-0a50-47a8-8920-916e7f73ad25'
    },
    {cor:'Branco',
    id:8,    
    descricao:`por fim utilizaremos o branco apenas na aréa extrema de luz onde falta finalizar o Azul`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeAzul%2FCaptura%20de%20Tela%20(45).png?alt=media&token=84a4a00e-e7df-441d-9998-ac290b550645'
    },
    ])

    const [Rosa, setRosa] = useState([
    {cor:'preto',
    id:1,    
    descricao:`iniciamos com o preto passando nas aréas de sombra mais intensas com a mão mais forte nas aréas de sombra
        e deixando a mão mais leve conforme se aproxima das aréas de luz.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F1.png?alt=media&token=4b2a77ff-7aa9-412f-8f08-79d29840cb2a',
    },
    {cor:'cinza escuro',
    id:2,    
    descricao:` sProxíma cor que aplicaremos será o cinza escuro por toda a parte onde aplicamos o preto Já preenchendo 
        um pouco mais o desenho deixando a finalização mais suave
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F2.png?alt=media&token=6a08888a-ad6a-435e-82c9-22ed53909053'
    },
    {cor:'Vermelho escuro',
    id:3,    
    descricao:`Proxima cor que aplicamos será o vermelho escuro pór toda a aréa onde aplicamos as cores anteriores, lembrando
        de deixae a mão mais pesada nas aréas de sombra e mais leve nas aréas de luz.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F3.png?alt=media&token=00ee0d62-adca-40cc-aa4f-82b95d7ad807'
    },
    {cor:'Vermelho',
    id:4,    
    descricao:`Agora aplicaremos o vermelho na pétala da esquerda com a mão não tão forte pois iremos voltar com uma tonalidade
        um pouco mais escura..`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F4.png?alt=media&token=d21fa8d7-b7e7-40b6-a37d-f03d6f5b4492'
    },
    {cor:'Vermelho escuro ',
    id:5,    
    descricao:`Agora iremos aplicar o vermelho escuro por toda a aréa da pétala fazendo um degrade para o centro deixando a mão mais leve`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F5.png?alt=media&token=1f5c4cd8-f083-4ae4-a04c-5298432ee55f'
    },
    {cor:'Vermelho',
    id:6,    
    descricao:`Agora finalizamos essa pétala com o vermelho`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F6.png?alt=media&token=8fb5901c-14b5-4f2a-a7e0-54fa3a4653d8'
    },
    {cor:'Vermelho escuro',
    id:7,    
    descricao:`Proxima cor é o vermelho escuro que aplicaremos na aréa central e na pétala da direita com mais pressã nas a aréas
        de sombra e soltamos  mão conforme nos apróximamos da aréa de luz`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F7.png?alt=media&token=8fa19581-50b8-49d2-b6eb-433936d51d7c'
    },

    {cor:'Vermelho',
    id:8,    
    descricao:`Agora finalizamos essa aréa com o vermelho e com um pouco de rosa claro nas aréas mais claras`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F8.png?alt=media&token=3aac7a55-8124-498e-a3e3-df9d0275eeff'
    },

    {cor:'Vermelho escuro',
    id:9,    
    descricao:`Agora aplicaremos o vermelho escuro na pétala central deixando a mão mais leve conforme se aproxima
    do centro
    `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F10.png?alt=media&token=fb31e62d-507b-4509-8611-5a40ee1f4d6c'
    },

    {cor:'Vermelho',
    id:10,    
    descricao:`Agora finalizamos a pétala central com o vermelho`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F12.png?alt=media&token=588b6e12-a0e4-4569-833e-54955ae0871d'
    },

    {cor:'Vermelho escuro',
    id:11,    
    descricao:`Agora finalizamos essa aréa de cima com os mesmos lápis que estamos aplicando antes.
    passamos o vermelho escuro nas aréas mais escuras e depois passamos o vermelho nas aréas claras`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F15.png?alt=media&token=e48c12cf-95c4-4f6c-91cf-52b36930fb7c'
    },

    {cor:'Vermelho',
    id:12,    
    descricao:`Aplicamos o vermelho nessas pequenas aréas de cima`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F16.png?alt=media&token=b84fa114-67af-476a-b066-f6e2e5ac0ca4'
    },

    {cor:'Rosa claro',
    id:13,    
    descricao:`agora finalizamos essa aréa com o rosa claro`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F19.png?alt=media&token=b351f8a8-595b-4e41-8f1d-ea9918aa179b'
    },

    {cor:'Preto',
    id:14,    
    descricao:`começamos o caule com o preto seguindo o mesmo conceito, mais escuro nas aréas de sombra e mais leve nas
    aréas de luz.`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F20.png?alt=media&token=c3c082ea-e28e-45ee-b792-bf9b5e0f306b'
    },

    {cor:'Cinza escuro',
    id:15,    
    descricao:`proxíma cor é o cinza escuro, passando por toda aréa onde passamos o preto`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F212.png?alt=media&token=803718d5-cc3d-446e-9015-c0d0b0064d8d'
    },

    {cor:'Verde escuro',
    id:16,    
    descricao:`Agora usamos o verde escuro por toda aréa onde passamos as cores anteriores e já vamos preenchendo mais o desenho`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F213.png?alt=media&token=720f540b-a3e2-4f24-bd17-52b32a320b38'
    },

    {cor:'Verde pinho',
    id:16,    
    descricao:`Agora vamos utilizar o verde pinho em toda aréa que passamos as cores anteriores já apertando mais a mão nas
    aréas de sombra para irmos finalizando, e já vamos preenchendo cada vez mais o desenho
    `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F21.png?alt=media&token=25663778-36fa-4740-b016-00d15b020c3b'
    },

    {cor:'Verde claro e Branco',
    id:17,    
    descricao:`Agora finalizamos essa parte com o verde claro e branco passando apenas nas aréas mais claras`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F22.png?alt=media&token=5f944214-193d-4180-9eb9-a461c18a2e1e'
    },

    {cor:'Preto e cinza escuro',
    id:18,    
    descricao:`por fim vamos pintando a folha usando as mesmas cores que utilizamos antes.
    começamos com o preto e o cinza escuro`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F25.png?alt=media&token=cb5694a4-1d65-412f-bf18-eb193e9a6249'
    },

    {cor:'Verde escuro',
    id:19,    
    descricao:`depois aplicamos o verde escuro`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F26.png?alt=media&token=81873296-da00-4507-aa4e-4c0100c5ade9'
    },

    {cor:'Verde pinho',
    id:20,    
    descricao:`agoa o verede pinho `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F27.png?alt=media&token=c6354af0-1b93-4a33-9984-47ce892bb443'
    },

    {cor:'Verde claro',
    id:21,    
    descricao:`verde claro finalizando as aréas de sombra
    `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F28.png?alt=media&token=d70654fd-35a1-4684-808a-885399592f09'
    }
    ,

    {cor:'Branco',
    id:22,    
    descricao:`E por fim fionalizamos essa aréa passando o branco nas aréas de luz.
    lembrando para não aplicar o branco nas aréas de sombra para não perder a saturação
    `,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosa%2F29.png?alt=media&token=028d2f27-8175-4e6b-91d7-0b166a54e70e'
    }      
    ]);

    const [maca, setMaca] = useState([
    {cor:'Preto',
    id:1,    
    descricao:`Primeira cor que iremos utilizar será o preto.
        lembrando que diferente dos desenho anteriores, nos não vamos utilizar a movimentação de bolinha
        e sim de linhas seguindo o formato do desenho tentando deixar a parte central das linhas mais escuro
        e as pontas mais claras, lemrando para não apertar muito a mão para conseguirmos aplicar
        as próximas camas de lápis `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca1.png?alt=media&token=27d7535d-392b-499e-9a7e-87c9a10fd7c7',
    },
    {cor:'Marrom',
    id:2,    
        descricao:`próxima cor que utilizaremos será o marrom.
        aplicaremos por toda aréa onde aplicamos a cor anterior seguindo o mesmo padrão de movimentos.
        linhas com as extremidades mais finas e o meio mais grosso e lembrando de sempre preencher mais o desenho conforme
        se aplica novas cores.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca2.png?alt=media&token=9729dd38-1b15-4318-96cd-5024e074c069'
    },
    {cor:'Vermelho escuro',
    id:3,    
    descricao:`Próxima cor que utilizaremos será o vermelho escuro, aplicaremos por toda aréa onde aplicamos as cores anteriores
        seguindo o mesmo padrão de movimentação e preenchendo cada vez mais o deseno         
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca3.png?alt=media&token=de0f4117-0b18-4c57-84a1-57395109f5ab'
    },
    {cor:'Preto',
    id:4,    
    descricao:`Agora voltamos com o preto passando nas aréas mais mais escuras para dar uma preenchida e uma escurecida nas aréas de
        sombra, dessa vez nos aplicaremos o preto somente nas aréas mais escuras`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca4.png?alt=media&token=4ff257f6-1dd6-40ee-92d2-96a57182ccb4'
    },
    {cor:'Vermelho escuro',
    id:5,    
    descricao:`Agora voltamos com o vermelho escuro passando por toda aréa onde aplicamos as cores anteriores e já apertadno um pouco
        mais as aréas de sombra
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca5.png?alt=media&token=4ffdf8ef-26af-41d9-85df-618108d4b7c6'
    },
    {cor:'Vinho',
    id:6,    
    descricao:`Próxima cor que iremos utilizar será o vinho, aplicaremos somente em algumas aréas especificas do desenho como na 
        parte inferior esquerda e um pouco na parte superior esquerda.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca6.png?alt=media&token=e09f0cb3-4c7e-4fc1-acc9-0b4541156516'
    },
    {cor:'Vermelho escuro',
    id:7,    
    descricao:`voltamos aplicando o vermelho escuro nas aréas de sombra e preenchendo aos poucos o desenho.
        não opreenchemo de vez para temos um controle melho da pintura.
        `,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca8.png?alt=media&token=5c510327-a852-4e90-81b4-2e165835cf40'
    },
    {cor:'Vermelho',
    id:8,    
    descricao:`Agora vamnos passar o vermelho, preenchendo aos poucos o desenho mantendo sempre o mesmo padrão de movimentos.`,
        url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca9.png?alt=media&token=dce86b9c-7e3c-4259-9099-154a544f49fe'
    },
    {cor:'Vinho',
    id:9,    
    descricao:`agora passamos mais um pouco de vinho no canto inferior esquero para dar uma tonalizada`,
        url:'hhttps://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca10.png?alt=media&token=e7cc0ecf-5ac3-4b8c-8f14-6e30e4d6625b'
    },
    {cor:'Vermelho escuro',
    id:10,    
    descricao:`Agora passamos o vermelho escuro nas aréas de combra para preencher mais e fazer alguns detalhes de textura
    que ainda não fizemos e agora já passamos com a mão mais forte nas aréas mais escuras para finalizarmos as
    aréas de sombra.`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca11.png?alt=media&token=3be79a7a-79c0-4688-8a6d-75e10dcb3da4'
    },
    {cor:'Vermelho',
    id:11,    
    descricao:`Agora vamos utilizar o vermelho para preencher mais o desenho respeitando sempre as aréas de luz passando
    o mais leve possivel`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca13.png?alt=media&token=85628b1c-d42f-4163-b29b-42817f9c6891'
    },
    {cor:'Branco',
    id:12,    
    descricao:`passaremos o branco ali no canto inferior esquerdo na aréa de luz para finalizarmos aquela aréa.`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca14.png?alt=media&token=8ce174d3-2d11-4dbc-b295-0f248f87c94b'
    },
    {cor:'Vermelho e rosa claro',
    id:13,    
    descricao:`Utilizaremos o vermelho para dar uns retoques e o rosa claro para finalizarmos algumas aréas de luz`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca16.png?alt=media&token=4c052264-e307-4faa-80fd-e43534d7618c'
    },
    {cor:'branco',
    id:14,    
    descricao:`E por Fim utilizaremos o Branco nas aréas de luz extrema para finalizarmos.
    o Caule e a folha deixarei de desafio para voces hahahaha, mas se voces fizeram a lição de casa voces vão tirar
    de letra!`,
    url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/maca%2Fmaca17.png?alt=media&token=cec7ce09-98d8-474e-8086-d965d528cdd6'
    },
    ]);

    
    async function handleBD(){
        degradeVerde.map( n =>{
            firestore().collection('degradeVerde').add(n)
        } )
    }
    

    return(
        <ExerContext.Provider
        value={{
            degradeVermelho,
            degradeVerde,
            degradeAzul,
            bola,
            petalas,
            Rosa,
            maca,
            handleBD
        }}
        >
            {children}
        </ExerContext.Provider>
    )
}