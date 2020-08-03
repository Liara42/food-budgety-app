import uniqid from 'uniqid';

export default class List {
  constructor() {
    this.items = [];
  }

  addItem(count, unit, ingredient) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ingredient,
    };
    this.items.push(item);
    this.persistDataList();
    return item;
  }
  deleteItem(id) {
    const index = this.items.findIndex((el) => el.id === id);
    this.items.splice(index, 1);
    this.persistDataList();
  }
  updateCount(id, newCount) {
    this.items.find((el) => el.id === id).count === newCount;
  }
  persistDataList() {
    localStorage.setItem('list', JSON.stringify(this.items));
  }

  readStorageList() {
    const storage = JSON.parse(localStorage.getItem('list'));

    //Restoring likes from localStorage
    if (storage) this.list = storage;
  }
}
