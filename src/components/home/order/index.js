import React, {Component} from "react";
import "./style.sass";

export default class Order extends Component {
  constructor() {
    super();
    this.className="order";
  }

  render() {
    return (
      <section className={this.className}>
        <div class={`columns ${this.className}__steps`}>
          <div class={`${this.className}__step ${this.className}__step--1`}>
            First column
          </div>
          <div class={`${this.className}__step ${this.className}__step--2`}>
            Second column
          </div>
          <div class={`${this.className}__step ${this.className}__step--3`}>
            Third column
          </div>
        </div>
      </section>
    );
  }
}
