import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMockProducts } from './MockData';
import './ProductSearch.css'
import LeftArrow from '../assets/search_page/right-vector.png'
import ProductList from './ProductList'
import ProductGrid from './ProductGrid'
import Pagination from './Pagination' 
import GridVector from '../assets/search_page/grid-vector.png'
import ListVector from '../assets/search_page/list-vector.png'


function ProductSearch({ onAddToCart }) {
      const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
    totalItems: 0
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Parse URL query parameters
  const parseQueryParams = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'all';
    
    setSearchQuery(query);
    setSelectedCategory(category);
    return { query, category };
  }, [location.search]);

  const fetchProducts = useCallback(async (page = 1, query = '', category = 'all') => {
    try {
      setLoading(true);
      setError(null);
      
      // Update URL without causing navigation
      navigate(`?q=${encodeURIComponent(query)}&category=${category}`, { replace: true });
      
      const data = await fetchMockProducts(
        page, 
        pagination.itemsPerPage, 
        query,
        category
      );
      
      setProducts(data.products);
      setPagination(prev => ({
        ...prev,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalItems: data.totalItems
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [pagination.itemsPerPage, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(1, searchQuery, selectedCategory);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    fetchProducts(1, '', 'all');
  };

  const handlePageChange = (page) => {
    fetchProducts(page, searchQuery, selectedCategory);
  };

  // const handleViewModeToggle = () => {
  //   setViewMode(viewMode === 'list' ? 'grid' : 'list');
  // };
  const handleGridMode=()=>{
    setViewMode('grid')
  }
  const handleListMode =() =>{
     setViewMode('list')
  }

  // Load products when component mounts or URL changes
  useEffect(() => {
    const { query, category } = parseQueryParams();
    fetchProducts(1, query, category);
  }, [fetchProducts, parseQueryParams]);

  return (
    <div className="product-search-page">
      <ul className="bread-crumb">
        
          <li>Home <img src={LeftArrow} alt="" /></li>
          <li>Clothings <img src={LeftArrow} alt="" /></li>
          <li>Men's wear <img src={LeftArrow} alt="" /></li>
          <li>Summer Clothing </li>
      </ul>
      <div className="product-page-container">
            <div className="left-pan">
                <ul className="sidebar-options">
                  <li className="heading">Category</li>
                  <li>Mobile accessory</li>
                  <li>Electronics</li>
                  <li>Smartphones</li>
                  <li>Modern tech</li>
                  <li className="see-all">See all</li>
                </ul>
                <ul className="sidebar-options">
                  <li className="heading">Brands</li>
                  <li><input type="checkbox" name="" id="" /> Samsung</li>
                  <li><input type="checkbox" name="" id="" /> Huawei</li>
                  <li><input type="checkbox" name="" id="" /> Apple</li>
                  <li><input type="checkbox" name="" id="" /> Pocco</li>
                  <li className="see-all">See all</li>
                </ul>
                <ul className="sidebar-options">
                  <li className="heading">Features</li>
                  <li><input type="checkbox" name="" id="" /> Metallic</li>
                  <li><input type="checkbox" name="" id="" /> Placstic cover</li>
                  <li><input type="checkbox" name="" id="" /> 8GB ram</li>
                  <li><input type="checkbox" name="" id="" /> Super Power</li>
                  <li><input type="checkbox" name="" id="" /> Large memory</li>
                  <li className="see-all">See all</li>
                </ul>
                <div className="sidebar-options">
                  <p className="heading">Price range</p>
                  
                </div>
            </div>
      <div className="right-pan">
            <div className="controls">
              <div className="results-count">
                Showing {(pagination.currentPage - 1) * pagination.itemsPerPage + 1}-
                {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} products
             </div>    
            <div className="view-mode-toggle">
                  <button className={viewMode=='list' ? 'active':''} onClick={handleListMode}>
                    <img src={ListVector} alt=""  />
                  </button>
                  <button className={viewMode=='grid' ? 'active':''} onClick={handleGridMode}>
                    <img src={GridVector} alt="" />
                  </button>
                </div>
        
        
      </div>
      
      {loading && <div className="loading">Loading products...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {viewMode === 'list' ? (
        <ProductList products={products} onAddToCart={onAddToCart}/>
      ) : (
        <ProductGrid products={products} onAddToCart={onAddToCart} />
      )}
      
      {pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
      </div>
      </div>

    </div>
  );
};

export default ProductSearch