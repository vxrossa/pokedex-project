import axios from 'axios';

export default class Data {
  private static _basicURL: string = 'https://pokeapi.co/api/v2/';

  private static async get(url: string): Promise<any> {
    try {
      const res: Response = await axios.get(url);
      const data = res.json();
      return data;
    }
    catch (err) {
      console.log(err);
    }
  }
}