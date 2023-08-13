import { LightningElement } from "lwc";

export default class ConditionalRendering extends LightningElement {
  isVisible = false;
  name;

  handleClick(event) {
    this.isVisible = true;
  }

  changeHandler(event) {
    this.name = event.target.value;
  }

  get hasTypedHello() {
    return this.name === "hello";
  }
}
