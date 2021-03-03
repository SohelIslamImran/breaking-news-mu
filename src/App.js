import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const [articles, setArticles] = useState([]);

  const classes = useStyles();
  
  useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=810c3dce266a492c8337ae5ea8e21168')
          .then(response => response.json())
          .then(data => setArticles(data.articles))
  }, []);

  return (
    <div>
      <Header></Header>
        <CssBaseline />
        <Container fixed>
          <h1>Top Headlines: {articles.length}</h1>
          <Grid container className={classes.root} spacing={3}>
            {
              articles.map(article => <News article={article}></News>)
            }
        </Grid>
        </Container>
    </div>
  );
}

export default App;
