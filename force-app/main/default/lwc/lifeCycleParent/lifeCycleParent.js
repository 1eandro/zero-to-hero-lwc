import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  isChildVisible = false;

  constructor() {
    super();
    console.log("Parent: Constructor Phase");
  }

  connectedCallback() {
    console.log("Parent: connectedCallback Phase");
  }

  // It is called whenever something property (like name) is updated
  renderedCallback() {
    console.log("Parent: renderedCallback Phase");
    let someDiv = this.template.querySelector(".some-div");
    console.log("Parent: Now I can find some div: ", someDiv);
  }

  name;

  changeHandler(event) {
    this.name = event.target.value;
  }

  handleShow() {
    this.isChildVisible = true;
  }

  handleHide() {
    this.isChildVisible = false;
  }
}
