import { useState } from 'react'
import Card from './Card'
import Masonry from 'react-masonry-css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [cards, setCards] = useState([]);

  const addCard = () => {
    if (imageUrl.trim() !== '') {
      setCards([
        ...cards,
        { imageUrl, title: 'Title', description: 'Description' },
      ]);
      setImageUrl('');
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="flex flex-col items-center p-6 w-full min-h-[45rem] bg-zinc-900 ">
      <div className="flex space-x-2 mb-8">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
          className="px-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button onClick={addCard} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add Card</button>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </Masonry>
    </div>
  );

}

export default App
