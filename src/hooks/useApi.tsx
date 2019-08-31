import React, { useState } from 'react';
import { 
  useMutation, 
  useQuery 
} from '@apollo/react-hooks';

interface ApiParams {
  uri?: string;
  data?: any;
  method?: string;
}

const useApi = (params: ApiParams = {}) => {
  const [data, setData] = useState(null);

  params.method === 'GET'
    ? useQuery()
    : useMutation()


  return [data, setData];

}