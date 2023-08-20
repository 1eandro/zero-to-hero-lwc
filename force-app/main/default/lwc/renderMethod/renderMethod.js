import { LightningElement } from "lwc";
import signInTemplate from "./signInTemplate.html";
import signUpTemplate from "./signUpTemplate.html";
import renderTemplate from "./renderMethod.html";

export default class RenderMethod extends LightningElement {
  selectedButton = "";

  // Here is a good idea how render() can be used
  // There are two different forms, which could get really big if
  // it was just a single file. With render() you can load them dynamically
  render() {
    if (this.selectedButton == "Sign Up") return signUpTemplate;
    if (this.selectedButton == "Sign In") return signInTemplate;
    return renderTemplate;
  }

  handleClick(event) {
    this.selectedButton = event.target.label;
    console.log("handleClick: this.selectedButton", this.selectedButton);
  }

  handleSubmit(event) {
    console.log(`You have ${event.target.label} with success!`);
  }
}
