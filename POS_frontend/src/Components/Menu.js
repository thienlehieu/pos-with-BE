import React from "react";

const Menu = ({ items, onAdd}) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, des, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header> 
                <h4>{title}</h4>
                <h4 className="price">{price}đ</h4>
              </header>
              <p className="item-text">{des}</p>
            </div>
            <button className="addToCart" onClick={() => onAdd(item)}>Chọn mua</button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
