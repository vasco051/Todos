import {makeAutoObservable} from "mobx";

class FormStore{
    title: string = ''
    body: string = ''
    constructor() {
        makeAutoObservable(this)
    }

    setTitle(){

    }

}

export default new FormStore()