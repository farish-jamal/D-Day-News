import React, {useState, useEffect} from 'react'
import './App.css';
import NavInshorts from './components/NavInshorts'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [progress, setProgress] = useState(10)

  const updateNews = async () =>{
    setProgress(10)
       let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
       let data = await fetch(url);
       setProgress(40)
       let parsedData = await data.json();
       setProgress(70)
       setArticles(parsedData.articles)
       setProgress(100)
  }
  
  useEffect(() => {
    updateNews()
    // console.log(articles);
    // eslint-disable-next-line
  }, [category]);
  return (
    <div className="app">
       <NavInshorts setCategory={setCategory}/>
       <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
       <News articles={articles}/>
    </div>
  );
}

export default App;
