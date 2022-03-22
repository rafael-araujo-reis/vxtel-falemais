type Plans = {
  id: string;
  description: string;
  minutes: number;
  price: number;
};

export const plans: Plans[] = [
  {
    id: "fale30",
    description: "Fale+ 30",
    minutes: 30,
    price: 30,
  },
  {
    id: "fale60",
    description: "Fale+ 60",
    minutes: 60,
    price: 60,
  },
  {
    id: "fale120",
    description: "Fale+ 120",
    minutes: 120,
    price: 120,
  }
];