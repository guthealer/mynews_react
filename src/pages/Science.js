import React, { useState } from 'react';
import { useEffect, } from 'react';

import head from  './headlines.json'


import { TextField,Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

import styled from 'styled-components';
import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';







function Science(props) {

        

    const[articles,setArticles]=useState([])

    const [loader,setloader]=useState(false)
  
    async function fetchData(){
        
        setloader(true)
        try{
            const response =await axios.get('https://newsdata.io/api/1/news?apikey=pub_17796c5560834b4ebebba0abe4fa03b1db707&category=science')
            console.log(response.data.results)

            const articlesItems = response.data.results;
            setArticles(articlesItems)
            
          setloader(false)
        }
        catch(error){
           console.log(error)
        }
    }

    useEffect(
        ()=>{
            fetchData()
        }
        
    ,[])


  
const list = articles.map((item) =>
  <NewsCard item = {item}></NewsCard>
);


console.log()
    return (
        <div>
             {loader?<Loader />:undefined}

   <Box  sx={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:{xs:'center'}}}>{list}</Box>

      


    


        </div>
    );
}

export default Science;