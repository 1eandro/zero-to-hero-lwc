import { LightningElement, api } from "lwc";

export default class P2cSliderComponent extends LightningElement {
  val = 20;

  changeHandler(event) {
    this.val = event.target.value;
    console.log("val is:", this.val);
  }

  // this is the method that is going to be called from the parent
  // make sure it's also exposed via "@api" decoration
  @api resetSlider() {
    this.val = 50;
  }
}
