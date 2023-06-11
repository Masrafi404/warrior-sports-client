import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Shared/Provider/AuthProvider';
import axios from 'axios';

const useCart = () => {
    const { user } = useContext(AuthContext);

    const token = localStorage.getItem('access-token');

    const { isLoading, refetch, data: cart = [] } = useQuery(['cart', user?.email], async () => {
        try {
            const response = await axios.get(`http://localhost:5000/carts?email=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch cart data');
        }
    });

    return [cart, refetch, isLoading];
};

export default useCart;
