import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
  carList = [
    "Ford",
    "Audi",
    "Ferrari",
    "Mercedes",
    "Honda",
    "Subaru",
    "Toyota",
  ];

  ceoList = [
    {
      id: 1,
      company: "Tesla",
      name: "Elon Musk",
    },
    {
      id: 2,
      company: "Microsoft",
      name: "Bill Gater",
    },
    {
      id: 3,
      company: "Amazon",
      name: "Jeff Bezos",
    },
    {
      id: 4,
      company: "Apple",
      name: "Tim Cook",
    }
  ];
}
