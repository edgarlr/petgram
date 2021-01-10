import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await window.fetch(
          "https://edgarlr-petgram-api.vercel.app/categories"
        );
        let res = await response.json();
        setCategories(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();

  const renderList = () => (
    <List>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return <Fragment>{renderList()}</Fragment>;
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
