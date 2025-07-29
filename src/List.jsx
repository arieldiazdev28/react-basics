const List = ({ items, category }) => {
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Sort ALPHABETICALLY
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Sort REVERSE ALPHABETICALLY
  //fruits.sort((a, b) => a.calories - b.calories); //Sort ASCENDENT
  //fruits.sort((a, b) => b.calories - a.calories); //Sort ASCENDENT

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 );
  //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100 );

  const listItems = items.sort();

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">
        {listItems.map((item) => (
          <li key={item.id}>
            {item.name} <b>{item.calories}</b>
          </li>
        ))}
      </ol>
    </>
  );
};

export default List;
