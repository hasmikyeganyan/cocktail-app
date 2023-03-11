import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMenuCocktailById } from "../services/menu";
import { MenuCocktail } from "../models/menu/cocktail";
import { MenuCocktailCard } from "../components/menu/MenuCocktailCard";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";

export const MenuCocktailPage = () => {
  const params = useParams();
  const [data, setData] = useState<MenuCocktail>();

  useEffect(() => {
    if (!params.id) return;
    fetchMenuCocktailById(params.id).then((data) => setData(data));
  }, [params]);

  return (
    <div className="container text-center mt-4">
      <Link to="/">
        <PrimaryButton label=" Back to Menu" />
      </Link>
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col-12 col-lg-4">
          {data && <MenuCocktailCard item={data} />}
          <hr />
          {data?.recipe}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
