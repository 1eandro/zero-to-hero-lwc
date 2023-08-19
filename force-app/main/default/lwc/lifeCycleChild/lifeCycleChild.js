import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("Child: Constructor Phase");
  }

  connectedCallback() {
    console.log("Child: connectedCallback Phase");
  }

  renderedCallback() {
    console.log("Child: renderedCallback Phase");
    let someDiv = this.template.querySelector(".some-div");
    console.log("Child: Now I can find some div: ", someDiv);
  }
}
