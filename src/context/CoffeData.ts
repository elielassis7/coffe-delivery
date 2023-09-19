export interface CardCoffe {
  id: number
  pathImage: string
  tag: string[]
  name: string
  description: string
  value: number
}

export const CoffeData = [
  {
    id: 1,
    pathImage: './src/assets/images/Expresso.svg',
    tag: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 2,
    pathImage: './src/assets/images/Americano.svg',
    tag: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 3,
    pathImage: './src/assets/images/ExpressoCremoso.svg',
    tag: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 4,
    pathImage: './src/assets/images/CafeGelado.svg',
    tag: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: 5,
    pathImage: './src/assets/images/CafeComLeite.svg',
    tag: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: 6,
    pathImage: './src/assets/images/Latte.svg',
    tag: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: 7,
    pathImage: './src/assets/images/Capuccino.svg',
    tag: ['TRADICIONAL', 'COM LEITE'],
    name: ' Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: 8,
    pathImage: './src/assets/images/Macchiato.svg',
    tag: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: 9,
    pathImage: './src/assets/images/Mocaccino.svg',
    tag: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: 10,
    pathImage: './src/assets/images/ChocolateQuente.svg',
    tag: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: 11,
    pathImage: './src/assets/images/Cubano.svg',
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: 12,
    pathImage: './src/assets/images/Havaiano.svg',
    tag: ['ESPECIAL'],
    name: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: 13,
    pathImage: './src/assets/images/Arabe.svg',
    tag: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: 14,
    pathImage: './src/assets/images/Irlandes.svg',
    tag: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]
