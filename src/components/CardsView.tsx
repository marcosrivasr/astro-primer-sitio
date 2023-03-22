import { useState } from "react";
import { CardItem } from "../types/types";
import "./cardsView.css";

interface CardsViewProps {
  cards: CardItem[];
}

export default function CardsView({ cards }: CardsViewProps) {
  return (
    <div>
      <div className="cardsView">
        {cards.map((card, index) => {
          return index < 3 ? <CardView key={index} {...card} /> : null;
        })}
      </div>
    </div>
  );
}

function CardView({ title, description, image }: CardItem) {
  return (
    <div className="card">
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <img src="/assets/game-info-frame-a.webp" alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
