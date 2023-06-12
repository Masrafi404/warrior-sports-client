import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Shared/Provider/AuthProvider';
const useClass = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: allClass = [] } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/classes')
            return response.json()
            // console.log(response.json())
        },
    })
    return [allClass, refetch]

}

export default useClass;
