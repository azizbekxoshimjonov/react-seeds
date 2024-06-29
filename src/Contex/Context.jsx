import React, { createContext, useEffect, useState } from "react";
import { products as initialProducts } from '../Components/Product/Data';

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('All');
    const [localData, setLocalData] = useState([]);
    const [localData2, setLocalData2] = useState([]);
    const [heartModalOpen, setHeartModalOpen] = useState(false);
    const [heartModalOpen2, setHeartModalOpen2] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    const handleSearch = (value) => {
        setInputValue(value);
        const searchResult = initialProducts.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredProducts(searchResult);
    };
    

    const filterProducts = (category) => {
        if (category === 'All') {
            setFilteredProducts(initialProducts.filter(product => product.category === 'All'));
        } else {
            const filtered = initialProducts.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
        setCategory(category);
    };

    useEffect(() => {
        filterProducts('All');
        loadLocalData();
        loadLocalData2();
    }, []);
    
    const handleCart = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const fnClearCartItems = () => {
        localStorage.removeItem('cartItems');
        setLocalData([]);
    };

    const handleLove = (product) => {
        let updatedLocalData = [...localData];
        if (updatedLocalData.find((item) => item.id === product.id)) {
            updatedLocalData = updatedLocalData.filter((item) => item.id !== product.id);
        } else {
            updatedLocalData.push(product);
        }
        localStorage.setItem('localData', JSON.stringify(updatedLocalData));
        setLocalData(updatedLocalData);
    };

    const clearLocalData = () => {
        localStorage.removeItem('localData');
        setLocalData([]);
    };

    const handleLove2 = (product) => {
        let updatedLocalData2 = [...localData2];
        if (updatedLocalData2.find((item) => item.id === product.id)) {
            updatedLocalData2 = updatedLocalData2.filter((item) => item.id !== product.id);
        } else {
            updatedLocalData2.push(product);
        }
        localStorage.setItem('localData2', JSON.stringify(updatedLocalData2));
        setLocalData2(updatedLocalData2);
    };
    
    const loadLocalData = () => {
        const storedData = JSON.parse(localStorage.getItem('localData')) || [];
        setLocalData(storedData);
    };

    const loadLocalData2 = () => {
        const storedData2 = JSON.parse(localStorage.getItem('localData2')) || [];
        setLocalData2(storedData2);
    };
    
    const clearLocalData2 = () => {
        localStorage.removeItem('localData2');
        setLocalData2([]);
    };

    return (
        <Context.Provider value={{
            filteredProducts,
            handleCart,
            fnClearCartItems,
            clearLocalData,
            handleLove,
            localData,
            localData2,
            heartModalOpen,
            heartModalOpen2,
            setHeartModalOpen,
            handleLove2,
            loadLocalData2,
            clearLocalData2,
            handleSearch,
            filterProducts
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
