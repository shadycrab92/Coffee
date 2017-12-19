import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Team extends Component {
  constructor() {
    super();
    this.className="team";
  }

  render() {
    const items = [
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512637075637",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512636995258",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512637084736",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      }
    ];


    return (
      <section className={`${this.className}`}>
        <div className="columns">
          <div className="column is-12">
            <h1 className={`${this.className}__title`}>О нас</h1>
            <h3 className={`${this.className}__subtitle`}>
              Наша компания специализируется в области гражданского, семейного, налогового, трудового, земельног, административного права, в вопросах защиты прав потребителей и других сферах юриспруденции.
            </h3>
          </div>

        </div>
        <div className={`columns ${this.className}__items`}>
            {
              items.map((el, i) =>{
                return  (
                  <div key={i} className="column is-4">
                    <Item  name={el.name} phone={el.phone} image={el.image} text={el.text}/>
                  </div>
                );
              })
            }
        </div>
      </section>
    );
  }
}
