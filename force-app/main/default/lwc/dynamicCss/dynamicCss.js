import { LightningElement } from "lwc";

export default class DynamicCss extends LightningElement {
  percent = 0;
  sliderValue;

  changeHandler(event) {
    this.percent = event.target.value;
  }

  handleSlider(event) {
    this.percent = event.detail.value;
  }

  get percentage() {
    return `width: ${this.percent}%`;
  }

  get invertedPercentage() {
    let invertedPercentage = 100 - this.percent;
    return `width: ${invertedPercentage}%`;
  }
}
