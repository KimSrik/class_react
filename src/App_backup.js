import './App.css';
// Header component 생성
function Header(props){
  return <header>
          <h1>
            <a href="#"> { props.title } </a>
          </h1>
        </header>
}
// Nav component 생성
function Nav(props){
  let navList = new Array();
  for(let idx=0; idx<props.topics.length; idx++){
    // navList.push(<li key={ idx }><a href="#">{ props.topics[idx].title }</a></li>);
    navList[idx] = <li key={ idx }><a href="#">{ props.topics[idx].title }</a></li>;
  }
  navList.forEach(ele, idx, arr){
    arr[idx] = <li key={ idx }><a href="#">{ props.topics[idx].title }</a></li>;
  }
  return <nav>
          <ul>
            { navList }
          </ul>
        </nav>
}
// Article component 생성
function Article(props){
  return <article>
          <h2>{ props.title }</h2>
          <p>{ props.content + props.io } </p>
        </article>
}

function App() {
  let topic = [
    {title:'HTML'},
    {title:'CSS'},
    {title:'javaScript'} 
  ]
  return (
    <div className="App">
      <section className="wrap">
        <Header title="WEB"/>
        <Nav topics = { topic } />
        <Article title="WEB" content="webwebwebwebwebwebwebwebweb" io="집에가자" />
        
      </section>
    </div>
  );
}

export default App;
