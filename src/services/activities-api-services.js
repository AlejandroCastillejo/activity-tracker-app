import fetchFunction from "./use-fetch";
import { activities } from "./activities";

const devTest = true;
// const devTest = false;

const URL = "http://127.0.0.1:8000/";
const TOKEN = null;

export class ActivitiesAPI {
  static async getItemsList() {
    if (devTest) {
      let promise = new Promise((resolve, error) => {
        console.log("loading...");
        setTimeout(() => {
          resolve(activities);
        }, 1000); // simulates API loading time
      });
      return promise;
    } else {
      return fetchFunction(URL, "GET", TOKEN).then((resp) => resp.json());
    }
  }

  static async updateItem(id, body) {
    if (devTest) {
      return body;
    } else {
      return await fetchFunction(URL + "/" + id, "PUT", TOKEN, body);
    }
  }
}
