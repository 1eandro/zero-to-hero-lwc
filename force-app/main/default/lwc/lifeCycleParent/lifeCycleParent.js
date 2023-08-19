import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  constructor() {
    super();
    console.log("Parent: Constructor Phase");
  }

  connectedCallback() {
    console.log("Parent: connectedCallback Phase");
  }

  renderedCallback() {
    console.log("Parent: renderedCallback Phase");
    let someDiv = this.template.querySelector(".some-div");
    console.log("Parent: Now I can find some div: ", someDiv);
  }
}
