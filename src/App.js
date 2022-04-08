import './App.css';
import {useState} from 'react';


function Modal(props){
  return(
    <div>
      <hr/>
    <h2>{ props.title }</h2>  
      <p>
        { props.content }
      </p>
    </div>
  );
}


function App(){
  let [LinkNum, LinkNumChange] = useState(0);
  let [Title, TitleChange] = useState(['WEB', 'HTML', 'CSS', 'javaScript']);
  let [Content, ContentChange] = useState(['홈 화면인 WEB화면입니다.','이것은 문서의 기본 HTML입니다.', '이것은 스타일을 설정하는 CSS입니다.', '이것은 동적인 부분을 담당하는 자바스크립트입니다.']);
  return (
    <div className="App" > 
      <section>
        <h1><a href="/" onClick={(event)=>{
                event.preventDefault();
                LinkNumChange(0);
              }}>WEB</a></h1>
        
        <nav>
          <ol>
            <li>
              <a href="/" onClick={(event)=>{
                event.preventDefault();
                LinkNumChange(0);
              }}>HTML</a>
            </li>
            <li>
              <a href="/" onClick={(event)=>{
                event.preventDefault();
                LinkNumChange(1);
              }}>CSS</a>
            </li>
            <li>
              <a href="/" onClick={(event)=>{
                event.preventDefault();
                LinkNumChange(2);
              }}>javaScript</a>
            </li>
          </ol>
        </nav>
        <Modal title={Title[LinkNum]} content={Content[LinkNum]}></Modal>
      </section>
    </div>
  );
}
export default App;