import './App.css';
import {useState} from 'react';
import srcData from './srcData';
import {Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function SecContainer(props){
  return (
    <div className="container">
      {
        props.wear.map((item, idx)=>{
          return (
            <div className="card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          );
        })
      }
    </div>  
  );
}

function Footer(props) {
  return (
    <footer onClick={props.onClick}>
      푸터
    </footer>
  );
}

function Input(props){
  return (
    <input type="text" onChange={(event)=>{
      props.onChange(event);
    }}/>
  );
}




function App() {
  let [wear, wearChange] = useState(srcData);
  return (    
    <div className="App">
      <Router>
        <Link to="/">홈으로</Link>
        <Link to="/sec1">sec1으로</Link>
        <Link to="/sec2">sec2으로</Link>

        <Switch>
          <Route path="/sec1">
            <section>
              <Input onChange={(t)=>{console.log(t.target.value)}}/>
              <button>클릭</button>
              <SecContainer wear={wear} wearChange={wearChange}/>
            </section>  
          </Route>

          <Route path="/sec2">
            <section>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </section>
          </Route>

          <Route path="/">
            <header>
              <h1>쇼핑몰</h1>
            </header>
          </Route>
        </Switch>
      </Router>

      <Footer onClick={()=>{
      console.log('푸터')
    }}/>   
    </div>
  );
}


export default App;

