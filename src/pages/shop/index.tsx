import React, { useEffect, useState } from "react";
import { fetchProducts, IFilterProducts } from "../../api";
import { IProduct } from "../../api/data";
import Navbar from "../../components/navbar";
import { ImageCarousel, ImageList } from "../../components/shop";
import SideBar from "../../components/sidebar";
import { ContentWrapper, MainWrapper, ShopWrapper } from "./__styled__";

const Shop = () => {
  const [filters, setFilters] = useState<IFilterProducts>({});
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
  }, [products]);

  const updateValues = (input: any) => {
    setFilters((prevState) => ({ ...prevState, ...input }));
  };

  return (
    <ShopWrapper>
      <Navbar />
      <MainWrapper className="d-flex">
        <SideBar filters={filters} updateValues={updateValues} />
        <ContentWrapper className="d-flex">
          <ImageList
            loading={loading}
            products={products}
            setActiveProduct={setActiveProduct}
            activeProduct={activeProduct}
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
