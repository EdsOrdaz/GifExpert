import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])

  const onAddCategory = ( newCategory ) => {

    if( categories.find(category => category.toUpperCase() === newCategory.toUpperCase()) ) return;
    
    setCategories([
      newCategory, 
      ...categories
    ]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Buscador de Gifs</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={ event => onAddCategory( event )}
      />

      { categories.map( (category) => (
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        )
      )}

    </>
  )
}
