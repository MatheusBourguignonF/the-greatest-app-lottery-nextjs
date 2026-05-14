interface IGame{
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  "max-number": number;
  "min-cart-value": number;
}

interface IGameResponse{
  types: IGame[];
}

interface IProps{
  games: IGameResponse;
}