export default class StorageService {
    
  static setItem(key: string, item: Object): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  static getItem(key: string) {
    let data: any = localStorage.getItem(key);

    return JSON.parse(data);
  }
}
