import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <>
      <Header />
        <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">
            {categoryName.toUpperCase()} SECTION    
        </h2>
            <p>Showing all products for {categoryName.toUpperCase()}.</p>
        </div>
    </>
  );
};

export default CategoryPage;
