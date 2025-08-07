// src/mockProducts.js
export const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is a detailed description for Product ${i + 1}. It includes all the features and benefits.`,
  price: Math.floor(Math.random() * 500) + 50,
  image: `https://picsum.photos/200/300?random=${i}`,
  category: ['Electronics', 'Clothing', 'Home', 'Books'][Math.floor(Math.random() * 4)]
}));

export const fetchMockProducts = async (page = 1, itemsPerPage = 10, query = '', category = 'all') => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredProducts = mockProducts;
  
  // Filter by search query
  if (query) {
    filteredProducts = mockProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  
  return {
    products: paginatedProducts,
    totalPages,
    currentPage: page,
    totalItems
  };
};