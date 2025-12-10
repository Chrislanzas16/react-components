export const ProductCard = ({ title, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
};
