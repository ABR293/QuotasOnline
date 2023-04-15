import { makeAutoObservable } from "mobx";
import { Alert } from "react-native";
import moment from "moment";

interface IQuote {
  baseVolume: string;
  high24hr: string;
  highestBid: string;
  id: number;
  isFrozen: string;
  last: string;
  low24hr: string;
  lowestAsk: string;
  percentChange: string;
  postOnly: string;
  quoteVolume: string;
}

class Quotes {
  data: IQuote[] = [];
  loading = false;
  lastUpdate = "";
  error: null | Error = null;

  constructor() {
    makeAutoObservable(this);
  }

  setNewData(data) {
    this.data = data;
  }
  ClearData() {
    this.data = [];
  }
  setStopLoading() {
    this.loading = false;
  }
  setStartLoading() {
    this.loading = false;
  }

  async fetchData(withPreloader = false) {
    withPreloader ? this.setStartLoading() : null;
    try {
      const data = await fetch(
        "https://poloniex.com/public?command=returnTicker"
      ).then((res) => res.json());
      this.data = data;
      this.lastUpdate = moment().format("hh:mm:ss");
      this.error = null;
      this.loading && this.setStopLoading();
    } catch (err) {
      Alert.alert(err);
      console.log(err);
      this.loading && this.setStopLoading();
    }
  }
}

export default new Quotes();
