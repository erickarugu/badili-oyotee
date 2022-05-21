import React, { useEffect, useState } from "react";
import { fetchProducts, filterProducts, IFilterProducts } from "../../api";
import { IProduct } from "../../api/data";
import Navbar from "../../components/navbar";
import { ImageCarousel, ImageList } from "../../components/shop";
import SideBar from "../../components/sidebar";
import { ContentWrapper, MainWrapper, ShopWrapper } from "./__styled__";

const Shop = () => {
  const [filters, setFilters] = useState<IFilterProducts>({});
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<number[]>([]);
  const [favs, setFavs] = useState<number[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      setTimeout(() => {
        const prods = fetchProducts();
        setProducts(prods);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  useEffect(() => {
    !activeProduct && setActiveProduct(products[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      setTimeout(() => {
        let prods: IProduct[];
        Object.values(filters).length
          ? (prods = filterProducts(filters))
          : (prods = fetchProducts());
        setProducts(prods);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, [filters]);

  const updateValues = (input: any) => {
    setFilters((prevState) => ({ ...prevState, ...input }));
  };

  return (
    <ShopWrapper>
      <Navbar cart={cart} favs={favs} />
      <MainWrapper className="d-flex">
        <SideBar filters={filters} updateValues={updateValues} />
        <ContentWrapper className="d-flex">
          <ImageList
            loading={loading}
            products={products}
            setActiveProduct={setActiveProduct}
            activeProduct={activeProduct}
            setCart={setCart}
            setFavs={setFavs}
            cart={cart}
            favs={favs}
          />
          <ImageCarousel
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
          />
        </ContentWrapper>
      </MainWrapper>
    </ShopWrapper>
  );
};

export { Shop };
