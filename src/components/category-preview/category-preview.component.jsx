import {
  CategoryPreviewContainer,
  TitlePreview,
  Preview,
} from "./category-preview.styles.jsx";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitlePreview to={title}>{title.toUpperCase()}</TitlePreview>
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </h2>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
