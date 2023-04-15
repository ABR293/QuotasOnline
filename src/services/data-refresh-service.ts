import { Alert } from "react-native";
import moment from "moment";
import quotes from "../store/quotes";

export default class DataRefreshService {
  DataRefresherTimerID = null;

  updateData = () => {
    quotes.fetchData();
  };

  enableDataRefresher = () => {
    try {
      let ID = setInterval(this.updateData, 1000 * 5);

      this.DataRefresherTimerID = ID;
    } catch (err) {
      Alert.alert(JSON.stringify(err));
    }
  };

  disableDataRefresher = () => {
    if (this.DataRefresherTimerID !== null) {
      clearInterval(this.DataRefresherTimerID);
      this.DataRefresherTimerID = null;
    }
  };
}
