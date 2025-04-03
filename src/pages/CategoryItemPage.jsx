import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../layouts/Header";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/products?category=${categoryName}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 flex">
        {/* Sidebar with reduced width */}
        <aside className="w-1/5 p-4 bg-white border-r shadow-md h-screen sticky top-0 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Refine By</h3>

          {/* Gender Filter */}
          <div className="mb-4">
            <h4 className="font-medium">Gender</h4>
            <br></br>
            <ul className="space-y-2">
              {["Men", "Women", "Boys", "Girls", "Infants"].map((gender) => (
                <li key={gender}>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-blue-500" />
                    <span>{gender}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="font-medium">Category</h4>
            <br></br>
            <ul className="space-y-2">
              {["T-Shirts", "Track Pants", "Hoodies"].map((category) => (
                <li key={category}>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-blue-500" />
                    <span>{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Listing Section */}
        <main className="w-4/5 p-4">
          <h2 className="text-2xl font-bold">{categoryName.toUpperCase()} SECTION</h2>
          <p>Showing all products for {categoryName.toUpperCase()}.</p>

          {loading ? (
            <p className="text-center mt-4">Loading products...</p>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-100 border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                >
                  <div className="w-full h-[300px] flex justify-center items-center">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 font-medium">₹{product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-4">No products found for this category.</p>
          )}
        </main>
      </div>
    </>
  );
};

export default CategoryPage;
