// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_conversion_from_to

import { get, IPolygonQuery } from "../transport/request";

export interface IRealTimeConversionQuery extends IPolygonQuery {
  amount: number;
  precision: number;
}
export interface ILastTrade {
  price: number;
  exchange: number;
  timestamp: number;
}
export interface IRealTimeConversion {
  status: string;
  from: string;
  to: string;
  initialAmount: number;
  converted: number;
  lastTrade: ILastTrade;
  symbol?: string;
}

export const realTimeCurrencyConversion = (
  from: string,
  to: string,
  query: IRealTimeConversionQuery
): Promise<IRealTimeConversion> => get(`/v1/conversion/${from}/${to}`, query);
