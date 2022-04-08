import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { FaVest } from "react-icons/fa";
import { GiArmoredPants, GiMonclerJacket,GiShirt, GiNinjaArmor } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";

export default function Products() {
  const products = [
    { name: "vest", price: 42, icon: <FaVest/>},
    { name: "jacket", price: 10, icon: <GiMonclerJacket/>},
    { name: "sweater", price: 31, icon:  <GiShirt/>},
    { name: "tshirt", price: 60, icon: <IoShirt/>},
    { name: "pants", price: 34, icon: <GiArmoredPants/>},
    { name: "jumper", price: 42, icon: <GiNinjaArmor/>},
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={uuid()} name={product.name} price={product.price} icon={product.icon} />
        
      ))}
    </div>
  );
}
