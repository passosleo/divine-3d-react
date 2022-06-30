const products = [
  {
    id: 1,
    name: "Suporte Extrair Suco Frutas para Garrafa Pet",
    price: "39,99",
    discount: "29,99",
    description:
      "Basta rosquear em uma garrafa pet e você poderá espremer frutas como laranja ou limão, fazendo com que o suco se acumule dentro da garrafa.",
    image1: "./utilidades/suporte-extrair-suco-frutas-para-garrafa-pet1.jpg",
    image2:
      "./utilidades/suporte-extrair-suco-frutas-para-garrafa-pet_black.jpg",
    image3:
      "./utilidades/suporte-extrair-suco-frutas-para-garrafa-pet_white.jpg",
    category: "utilidades",
    altura: "6,5cm",
    largura: "9cm",
    profundida: "9cm",
  },
  {
    id: 2,
    name: "Porta Guardanapo Monte Fuji",
    price: "29,99",
    discount: "19,99",
    description: "Compatível com guardanapo tamanho aproximado 20x20cm",
    image1: "./utilidades/porta-guardanapo2.jpg",
    image2: "./utilidades/porta-guardanapo1.jpg",
    category: "utilidades",
    altura: "6cm",
    largura: "17,5cm",
    profundida: "4,5cm",
  },
  {
    id: 3,
    name: "Porta Guardanapo Modelo Diamante",
    price: "29,99",
    discount: "19,99",
    description: "Compatível com guardanapo tamanho aproximado 20x20cm",
    image1: "./utilidades/porta-guardanapo-modelo-diamante.jpg",
    category: "utilidades",
    altura: "6.5cm",
    largura: "12,5cm",
    profundida: "3,5cm",
  },
  {
    id: 4,
    name: "Suporte Smartphone Universal",
    price: "49,99",
    discount: "39,99",
    description:
      "Além de melhorar a organização de sua mesa, permite ter as mãos livres para assistir lives ou vídeos, fazer vídeo-chamadas entre outras atividades comuns do nosso dia. Também pode ser utilizado com carregador conectado.",
    image1: "./utilidades/suporte-smartphone-universal_0.jpg",
    image2: "./utilidades/suporte-smartphone-universal_1.jpg",
    category: "utilidades",
    altura: "7cm",
    largura: "8,5cm",
    profundida: "8,5cm",
  },
  {
    id: 5,
    name: "Suporte de Mesa Headphone",
    price: "99,99",
    discount: "89,99",
    description:
      "Perfeito para organizar melhor sua mesa além de cuidar bem do seu headphone. O suporte tem 20 cm de altura, por isso sugerimos que verifique se o seu headphone tem no máximo esta altura para que ele fique perfeitamente suspenso.",
    image1: "./utilidades/suporte-de-mesa-headphone_white.jpg",
    image2: "./utilidades/suporte-de-mesa-headphone_white2.jpg",
    category: "utilidades",
    altura: "20cm",
    largura: "18cm",
    profundida: "14cm",
  },
  {
    id: 6,
    name: "Porta Canetas Lápis Skull",
    price: "49,99",
    discount: "29,99",
    description: "Porta Canetas decorativo com design moderno vazado.",
    image1: "./utilidades/porta-canetas-lapis.jpg",
    image2: "./utilidades/porta-canetas-lapis2.jpg",
    category: "utilidades",
    altura: "6cm",
    largura: "9cm",
    profundida: "7,7cm",
  },
  {
    id: 7,
    name: "Organizador de Fone de Ouvido",
    price: "49,99",
    discount: "29,99",
    description:
      "Esta é a solução definitiva para você evitar que seus fones se enrolem e tomem seu tempo para desfazer aquela confusão toda vez que deseja utiliza-los.",
    image1: "./utilidades/organizador-com-fone-de-ouvido.jpg",
    category: "utilidades",
    dimensions:
      "Possuí 7,5cm de largura por 1,5 cm de profundidade e 7,5 cm de altura",
    altura: "7,5cm",
    largura: "7,5cm",
    profundida: "1,5cm",
  },
  {
    id: 8,
    name: "Homenzinho Suporte Garrafa Vinho",
    price: "49,99",
    discount: "29,99",
    description: "Homenzinho Suporte Garrafa Vinho ",
    image1: "./utilidades/homenzinho-suporte-garrafa-vinho.jpg",
    category: "utilidades",
    altura: "9cm",
    largura: "6cm",
    profundida: "1cm",
  },
  {
    id: 9,
    name: "Porta Incenso Flor de Lótus",
    price: "49,99",
    discount: "29,99",
    description: "Porta Incenso Flor de Lótus",
    image1: "./utilidades/porta-incenso-flor-de-lotus_0.jpg",
    image2: "./utilidades/porta-incenso-flor-de-lotus_2.jpg",
    image3: "./utilidades/porta-incenso-flor-de-lotus_5.jpg",
    category: "utilidades",
    dimensions:
      "Possuí 10cm de largura por 10cm de profundidade e 2,5 cm de altura",
    material:
      "O material é o PLA (poliácido láctico), derivado da cana de açúcar ou amido de milho, diferente dos plásticos tradicionais, que são derivados do petróleo. É 100% biodegradável e não tóxico.",
  },
  {
    id: 10,
    name: "Vaso Modelo Voronoi",
    price: "49,99",
    discount: "29,99",
    description: "Pode ser utilizado com ou sem plantas.",
    image1: "./vasos/3.jpg",
    image2: "./vasos/2.jpg",
    category: "vasos",
    altura: "17,5cm",
    largura: "8cm",
    profundida: "8cm",
  },
  {
    id: 11,
    name: "Vaso Rob Plant de Boa",
    price: "79,99",
    discount: "69,99",
    description:
      "Vaso ideal para mini-suculentas e mini-cactos (naturais ou artificiais) ou mesmo vazio para decoração.",
    image1: "./vasos/vaso-rob-plant-de-boa.jpg",
    category: "vasos",
    altura: "10cm",
    largura: "7,5cm",
    profundida: "8cm",
  },
  {
    id: 12,
    name: "Vaso Rob Plant Deitado",
    price: "79,99",
    discount: "69,99",
    description:
      "Vaso ideal para mini-suculentas e mini-cactos (naturais ou artificiais) ou mesmo vazio para decoração.",
    image1: "./vasos/Vaso_Rob_Plant_Deitado.jpg",
    category: "vasos",
    altura: "7,5cm",
    largura: "7,5cm",
    profundida: "8cm",
  },
  {
    id: 13,
    name: "Vaso Rob Plant Ioga",
    price: "79,99",
    discount: "69,99",
    description:
      "Vaso ideal para mini-suculentas e mini-cactos (naturais ou artificiais) ou mesmo vazio para decoração.",
    image1: "./vasos/vaso-rob-plant-ioga_0.jpg",
    category: "vasos",
    altura: "10cm",
    largura: "7,5cm",
    profundida: "8cm",
  },
  {
    id: 14,
    name: "Vaso Rob Plant Sentado",
    price: "79,99",
    discount: "69,99",
    description:
      "Vaso ideal para mini-suculentas e mini-cactos (naturais ou artificiais) ou mesmo vazio para decoração.",
    image1: "./vasos/vaso-rob-plant-sentado_0.jpg",
    category: "vasos",
    altura: "10cm",
    largura: "7,5cm",
    profundida: "8cm",
  },
  {
    id: 15,
    name: "Vaso Minimalista Lua Crescente",
    price: "79,99",
    discount: "69,99",
    description: "Vaso Minimalista Lua Crescente",
    image1: "./vasos/vaso-minimalista-lua-crescente_0.jpg",
    category: "vasos",
    altura: "13,5cm",
    largura: "13,5cm",
    profundida: "5cm",
  },
  {
    id: 16,
    name: "Spitz Geométrico",
    price: "79,99",
    discount: "69,99",
    description: "Vaso Minimalista Lua Crescente",
    image1: "./decorações/SpitzGeometricoDecorativo.jpg",
    altura: "13,5cm",
    largura: "13,5cm",
    profundida: "5cm",
  },
  {
    id: 17,
    name: "Coliseu de Roma",
    price: "169,99",
    discount: "149,99",
    description:
      "Coliseu, também conhecido como Anfiteatro Flaviano, é um anfiteatro oval localizado no centro da cidade de Roma. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.",
    image1: "./decorações/coliseu-de-roma-decorativo_1.jpg",
    altura: "4cm",
    largura: "14cm",
    profundida: "11,5cm",
  },
  {
    id: 18,
    name: "Escultura Mãe e Filha ",
    price: "169,99",
    discount: "149,99",
    description:
      "Escultura Decorativa Mãe e Filha. Criada em homenagem a todas as mães..",
    image1: "./decorações/escultura-decorativa-mae-e-filha.jpg",
    altura: "12cm",
    largura: "5cm",
    profundida: "5cm",
  },
  {
    id: 19,
    name: "Estátua Buda Buddha",
    price: "169,99",
    discount: "149,99",
    description:
      "Sidarta Gautama, é popularmente chamado simplesmente de Buda ou Buddha, foi um príncipe de uma região no sul do atual Nepal que, tendo renunciado ao trono, se dedicou à busca da erradicação das causas do sofrimento humano e de todos os seres, e desta forma encontrou um caminho até ao despertar ou iluminação.",
    image1: "./decorações/estatua-buda-buddha_0.jpg",
    altura: "12cm",
    largura: "5cm",
    profundida: "5cm",
  },
  {
    id: 20,
    name: "Escultura Menino e seu Cachorro",
    price: "169,99",
    discount: "149,99",
    description: "Escultura Decorativa Menino e seu Cachorro",
    image1: "./decorações/dog.jpg",
    altura: "11,5cm",
    largura: "15cm",
    profundida: "2cm",
  },
  {
    id: 21,
    name: "Escultura Menina e sua Calopsita",
    price: "169,99",
    discount: "149,99",
    description: "Escultura Decorativa Menina e sua Calopsita",
    image1: "./decorações/calopsita.jpg",
    altura: "12cm",
    largura: "15cm",
    profundida: "2,7cm",
  },
  {
    id: 22,
    name: "Escultura Menina e sua Calopsita",
    price: "169,99",
    discount: "149,99",
    description: "Escultura Decorativa Menina e sua Calopsita",
    image1: "./decorações/calopsita.jpg",
    altura: "12cm",
    largura: "15cm",
    profundida: "2,7cm",
  },
  {
    id: 23,
    name: "Polvo Rock and Roll",
    price: "99,99",
    discount: "89,99",
    description: "Polvo Rock and Roll",
    image1: "./decorações/polvo-rock-and-roll_0.jpg",
    altura: "4cm",
    largura: "12cm",
    profundida: "12cm",
  },
  {
    id: 24,
    name: "Escultura Menina e seu Salsicha",
    price: "99,99",
    discount: "89,99",
    description: "Escultura Decorativa Menina e seu Dachshund (Salsicha)",
    image1: "./decorações/polvo-rock-and-roll_0.jpg",
    altura: "12cm",
    largura: "22cm",
    profundida: "2,7cm",
  },
  {
    id: 25,
    name: "Escultura Menina e seu Salsicha",
    price: "99,99",
    discount: "89,99",
    description: "Escultura Decorativa Menina e seu Dachshund (Salsicha)",
    image1: "./decorações/menina.jpg",
    altura: "12cm",
    largura: "22cm",
    profundida: "2,7cm",
  },
  {
    id: 26,
    name: "Homenzinhos Escalando",
    price: "99,99",
    discount: "89,99",
    description: "Homenzinhos Escalando. Contém 3 homenzinhos.",
    image1: "./decorações/homenzinhos-escalando.jpg",
    altura: "12cm",
    largura: "6cm",
    profundida: "1cm",
  },
  {
    id: 27,
    name: "Beagle Geométrico Decorativo",
    price: "99,99",
    discount: "89,99",
    description: "Homenzinhos Escalando. Contém 3 homenzinhos.",
    image1: "./decorações/beagle.jpg",
    altura: "16,5cm",
    largura: "5,5cm",
    profundida: "18,5cm",
  },
];
