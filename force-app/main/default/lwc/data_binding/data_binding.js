import { LightningElement, track } from "lwc";

export default class Data_binding extends LightningElement {
  fullname = "Zero to Hero";
  title = "aura";

  changeHandler(event) {
    this.title = event.target.value;
  }

  /**
   * Here we've seen that LWC tracks automatically only
   * primitives.
   * Track is used to track js objects and js arrays
   *
   * by 'track' understand that as a two-way data bindings
   */
  @track address = {
    city: "Breda",
    postcode: 3008,
    country: "Netherlands",
  };

  trackHandler(event) {
    this.address.city = event.target.value;
  }

  /**
   * Another way to do that, also more advisable, is to pass
   * a copy of the object to itself. Like this, you don't need to use the @track
   */

  spreadAddress = {
    city: "Breda",
    postcode: 7823,
    country: "Netherlands",
  };

  trackHandlerWithSpread(event) {
    this.spreadAddress = { ...this.address, city: event.target.value };
  }

  // Getters

  users = ["Batman", "Iron Man", "Robin"];
  num1 = 10;
  num2 = 23;

  get firstUser() {
    return this.users[0];
  }

  get multiply() {
    return this.num1 * this.num2;
  }
}
