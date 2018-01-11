import React, {Component} from "react";
import { Link } from "react-router-dom";
import OrderItem from "./item.js"
import "./style.sass";

export default class Order extends Component {
  constructor() {
    super();
    this.className="order";
  }

  render() {
    return (
      <section className={this.className}>
        <div className={`columns ${this.className}__steps`}>
          <div className={`${this.className}__step ${this.className}__step--1`}>
            <div className={`${this.className}__section`}>
              <Link className={`${this.className}__logo`} to="/">UpCup</Link>
              <a className={`button is-primary is-inverted is-outlined is-pulled-right ${this.className}__login`}>Войти</a>
            </div>

            <div className={`${this.className}__section`}>
              <div className="field has-addons">
                <div className="control has-icons-left is-expanded">
                  <input className="input" type="email" placeholder="Адрес"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-map-marker-alt"/>
                  </span>
                </div>
                <div className="control">
                  <a className="button is-info">
                    Найти
                  </a>
                </div>
              </div>
            </div>

            <div className={`${this.className}__section`}>
              <p className={`${this.className}__title`}>
                Кофе
              </p>

              <OrderItem name={"Cappuccino"} text={"Классический крепкий кофе"}/>
              <OrderItem name={"Cappuccino"} text={"Классический крепкий кофе"}/>
              <OrderItem name={"Cappuccino"} text={"Классический крепкий кофе"}/>
              <OrderItem name={"Cappuccino"} text={"Классический крепкий кофе"}/>
            </div>
          </div>

          <div className={`${this.className}__step ${this.className}__step--2`}>
            Second column
          </div>
          <div className={`${this.className}__step ${this.className}__step--3`}>
            Third column
          </div>
        </div>
      </section>
    );
  }
}
