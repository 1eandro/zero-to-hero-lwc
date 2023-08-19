import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("Child: Constructor Phase");
  }

  connectedCallback() {
    console.log("Child: connectedCallback Phase");
    window.addEventListener("click", this.handleClick);
  }

  renderedCallback() {
    console.log("Child: renderedCallback Phase");
    let someDiv = this.template.querySelector(".some-div");
    console.log("Child: Now I can find some div: ", someDiv);
  }

  disconnectedCallback() {
    alert("about to be removed");
    window.removeEventListener("click", this.handleClick);
  }

  handleClick() {
    console.log("Child: handleClick was fired");
  }
}
