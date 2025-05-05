import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { ProductProps } from "../home";
import { CartContext } from "../../context/cartContext";
import { BsCartPlus } from "react-icons/bs";

export function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const { addItemCart } = useContext(CartContext);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products/${id}`);
      let prod: ProductProps = await response.data;
      setProduct(prod);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    addItemCart(product);
  }

  return (
    <div className="flex w-full gap-4 justify-around p-4">
      <img
        src={product.cover}
        alt={product.title}
        className="w-[700px] h-[600px] transition-transform duration-300 hover:scale-103"
      />
      <div className="mt-15">
        <h1 className="font-bold text-2xl text-">{product.title}</h1>
        <p>{product.description}</p>
        <div className="flex gap-3">
          <span>
            {product.price?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "brl",
            })}
          </span>
          <button
            onClick={() => handleAddCartItem(product)}
            className="bg-zinc-900 p-1 rounded cursor-pointer"
          >
            <BsCartPlus size={20} color="#FFF" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
