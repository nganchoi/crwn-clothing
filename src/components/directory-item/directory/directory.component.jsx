import DirectoryItem from "../directory-item.component";
import { DirectoryContainer } from "./directory-item.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
