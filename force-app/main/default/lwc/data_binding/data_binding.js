import { LightningElement } from 'lwc';

export default class Data_binding extends LightningElement {
    fullname = "Zero to Hero"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }


}