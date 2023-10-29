import './style.css';

export type ItemType = {
  imdbID: number;
  Title: string;
  Type: string;
  Year: number;
  Poster: string;
};

interface ItemProps {
  item: ItemType;
}

const Item = ({ item }: ItemProps) => {
  const { Title, Year, Poster } = item;
  return (
    <div className="searcher-results-item">
      <img
        src={Poster !== 'N/A' ? Poster : '/images/no-image.png'}
        alt={Title}
        loading="lazy"
      />
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  );
};

export default Item;
