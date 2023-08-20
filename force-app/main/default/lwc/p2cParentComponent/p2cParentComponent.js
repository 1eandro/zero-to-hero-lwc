import { LightningElement } from "lwc";

export default class P2cParentComponent extends LightningElement {
  carouselData = [
    {
      src: "https://picsum.photos/300",
      header: "First",
      description: "First description.",
    },
    {
      src: "https://picsum.photos/301",
      header: "Second",
      description: "Second description.",
    },
    {
      src: "https://picsum.photos/302",
      header: "Third",
      description: "Third description.",
    },
    {
      src: "https://picsum.photos/303",
      header: "Fourth",
      description: "Fourth description.",
    },
  ];
}
