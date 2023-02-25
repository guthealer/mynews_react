import React, { useState } from 'react';
import { useEffect, } from 'react';

import head from  './headlines.json'


import { TextField,Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

import styled from 'styled-components';
import NewsCard from '../components/NewsCard';







function Sport(props) {

        

    const[articles,setArticles]=useState([])

  
    async function fetchData(){
        try{
            const response =await axios.get('https://newsdata.io/api/1/news?apikey=pub_17796c5560834b4ebebba0abe4fa03b1db707&category=spots')
            console.log(response.data.results)

            const articlesItems = response.data.results;
            setArticles(articlesItems)
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
            


   <Box  sx={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:{xs:'center'}}}>{list}</Box>

      


    


        </div>
    );
}

export default Sport;