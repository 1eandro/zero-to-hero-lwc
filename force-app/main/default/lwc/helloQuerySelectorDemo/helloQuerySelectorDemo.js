import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  userNames = ["Leandro", "Guga", "Junior", "Geilson"];

  fetchDetailHandler() {
    // Query Selector
    const elem = this.template.querySelector("h1");
    elem.style.border = "1px solid red";
    console.log("elem.innerText:", elem.innerText);

    // Query Selector All
    const userElements = this.template.querySelectorAll(".friend-name");
    Array.from(userElements).forEach((item) => {
      console.log("item.innerText", item.innerText);
      // adding the name of each of the friend as a title property
      item.setAttribute("title", item.innerText);
    });

    // lwc:dom="manual" demo
    const childElement = this.template.querySelector(".child");
    childElement.innerHTML = "<p> Hey, I am a child element </p>";
  }
}
