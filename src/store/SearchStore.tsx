import {makeAutoObservable} from "mobx";

class SearchStore{
    selectedSort: string  = ''
    constructor() {
        makeAutoObservable(this)
    }

    setSelectedSort(select: string){
        this.selectedSort = select
    }
}

export default new SearchStore()