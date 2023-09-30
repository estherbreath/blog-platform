import React from 'react'
import Card from './Card';

const Cards = () => {
    const cards = [
        {
          title: 'Card 1',
          description:  'Card 1 Here.',
          imageSrc: 'https://via.placeholder.com/500',
        },
        {
          title: 'Card 2',
          description: 'Card 2 Here.',
          imageSrc: 'https://via.placeholder.com/500',
        },
        {
            title: 'Card 3',
            description:  'Card 3 Here.',
            imageSrc: 'https://via.placeholder.com/500',
          },
        
        // Add more cards as needed
      ];
  return (
    <>
      <div className="flex justify-center gap-x-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </>
  )
}

export default Cards