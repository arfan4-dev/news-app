import React from 'react'
import Images from './Images'
import Content from './Content'
import { useQuery } from 'react-query';
import { API_URL, DEFAULT_HEADER } from '@/lib/contants';
import axios from 'axios';
import Loader from '../Loader';

const MainContent = () => {
  const { data, isLoading, isError, error } = useQuery("all-news", async () => {
    const res = await axios.get(`${API_URL}/api/zimomeet_app/all-news`, {
      headers: DEFAULT_HEADER,
    });
    return res.data.data.slice(1, 2);
  });

  const { data:contentData, isLoading:contentLoading, isError:contentError } = useQuery("category-id", async () => {
    const res = await axios.get(`${API_URL}/api/zimomeet_app/category-wise-news?category_id=2`, {
      headers: DEFAULT_HEADER,
    });
    return res.data.data;
  });

  return (
    <div className='mt-7'>
      {
        !isLoading && !isError ? <div className=' lg:flex lg:justify-center lg:space-x-12 xl:space-x-16'>
          <Images data={data} isLoading={isLoading}/>
        <Content contentData={contentData} contentLoading={contentLoading}/>
        </div> :
        (<Loader/>)
      }
    
        
    </div>
  )
}

export default MainContent