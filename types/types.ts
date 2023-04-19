export type cardInfoType = {
  url: string;
  urlalt: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
};

export type TripList = Trip[];
export type Trip = {
  id: number;
  price: number;
  start_address: string;
  end_address: string;
  driver: { name: string; avatar: string };
  passenger: any[];
};
export type TripDetails = {
  id: number;
  price: number;
  startAddress: string;
  endAddress: string;
  date: Date;
  passenger: any[];
  driver: { name: string; avatar: string };
};

export type cardInfo2Type = {
  text: string;
  icon: string;
};

export type IUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  tel: string;
  tokens: ITokens;
};

export type ITokens = {
  accessToken: string;
  refreshToken: string;
  expireAt?: number;
};
