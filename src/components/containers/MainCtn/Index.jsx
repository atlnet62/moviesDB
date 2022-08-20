import Trending from "../Pages/Trending/Index"
import SearchBar from '../SearchBar/Index'
import Home from '../Pages/Home/Index';
import {Routes, Route} from 'react-router-dom'; 
import { useState } from "react";


function MainCtn() {

	const [keyword, setKeyword] = useState('');

	return (
		<main>
				<SearchBar keyword={keyword} setKeyword={setKeyword} />

				<Routes>
					<Route path="/" element={
						(keyword === '') ? <Home /> : null} />    
					<Route path="/trending" element={
						(keyword === '') ? <Trending /> : null} />
				</Routes> 
		</main>
	)
}

export default MainCtn