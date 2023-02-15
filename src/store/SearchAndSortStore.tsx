import {makeAutoObservable} from "mobx";

class SearchAndSortStore {
  searchValue: string = ''
  selectSort: string = 'time'

  constructor() {
    makeAutoObservable(this)
  }

  setSelectSort(select: string) {
    this.selectSort = select
  }

  setSearchValue(value: string) {
    this.searchValue = value
  }
}

export default new SearchAndSortStore()