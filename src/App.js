import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/admin" component={AdminDashboard} />
                </Switch>
                <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />
            </div>
        </Router>
    );
};

export default App;
