import axios from 'axios';

export default class Data {
  private static _basicURL: string = 'https://pokeapi.co/api/v2/';

  public static async get(url: string, withUrl: boolean): Promise<any> {
    try {
      const getURL = withUrl ? Data._basicURL + url : url;
      const result: any = await axios.get(getURL);
      return result.data;
    }
    catch (err) {
      console.log(err);
    }
  }
}