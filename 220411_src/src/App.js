import './App.css';
import {useState} from 'react';

function Header(){
  return (
    <header className="black-header">
      <h1>React λΈλ‘κ·Έ</h1>
    </header>
  );
}

function Section(props){
  let listItem = [];
  for(let idx=0; idx < props.listContent.length; idx++){
    listItem.push(
      <div key={idx} className="list-item">
        <h2>
          <span id={idx} onClick={()=>{props.onModalOpen(); props.onSetID()}}>{ props.listTit[idx] }</span>
          <span id="1" onClick={()=>{props.onMsClick(idx,1)}} style={{cursor:'pointer'}}>π</span> 
          <span id="2" onClick={()=>{props.onMsClick(idx,2)}} style={{cursor:'pointer'}}>π</span> 
          <span>{props.best[idx]}</span>
        </h2>
        <p>2022-03-29</p>
        <p>{ props.listContent[idx] }</p>
      </div>
    );
  }
  return(
    <section className="list">
      { listItem }   
    </section>
  );
}

function Modal(props){

  return(
    <section className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={props.onModalClose}>λ«κΈ°</button>
        </div>
        <div className="modal-body">
          <div>{props.listTit}</div>
          <div>λ μ§</div>
          <div>{props.listContent}</div>
        </div>
      </div>
    </section>
  );
}

function App() {
  let [viewIdx, viewIdxChange]=useState(0);
  let [listTit, listTitChange] = useState(['μκ΅¬μ²­μ­ μ¨μ λ§μ§', 'μ°ν¬λ μΆμ² μΉ΄ν', 'μλ¨μ­ 7νΈμ  νμΉκΈ°']);
  let [listContent, listContentChange] = useState([
                                                  'κ³΅κ³΅νμμ μν μ¬μ°κΆμ μμ©Β·μ¬μ© λλ μ ν λ° κ·Έμ λν λ³΄μμ λ²λ₯ λ‘μ¨ νλ, μ λΉν λ³΄μμ μ§κΈνμ¬μΌ νλ€. λν΅λ Ήμ κ΅­κ°μ λλ¦½Β·μν μ λ³΄μ Β·κ΅­κ°μ κ³μμ±κ³Ό νλ²μ μνΈν  μ±λ¬΄λ₯Ό μ§λ€.μ λΉμ λ²λ₯ μ΄ μ νλ λ°μ μνμ¬ κ΅­κ°μ λ³΄νΈλ₯Ό λ°μΌλ©°, κ΅­κ°λ λ²λ₯ μ΄ μ νλ λ°μ μνμ¬ μ λΉμ΄μμ νμν μκΈμ λ³΄μ‘°ν  μ μλ€. νΌμΈκ³Ό κ°μ‘±μνμ κ°μΈμ μ‘΄μκ³Ό μμ±μ νλ±μ κΈ°μ΄λ‘ μ±λ¦½λκ³  μ μ§λμ΄μΌ νλ©°, κ΅­κ°λ μ΄λ₯Ό λ³΄μ₯νλ€.',
                                                  'κ΅­κ°λ μ¬ν΄λ₯Ό μλ°©νκ³  κ·Έ μνμΌλ‘λΆν° κ΅­λ―Όμ λ³΄νΈνκΈ° μνμ¬ λΈλ ₯νμ¬μΌ νλ€. μ 3ν­μ μΉμΈμ μ»μ§ λͺ»ν λμλ κ·Έ μ²λΆ λλ λͺλ Ήμ κ·ΈλλΆν° ν¨λ ₯μ μμ€νλ€. μ΄ κ²½μ° κ·Έ λͺλ Ήμ μνμ¬ κ°μ  λλ νμ§λμλ λ²λ₯ μ κ·Έ λͺλ Ήμ΄ μΉμΈμ μ»μ§ λͺ»ν λλΆν° λΉμ°ν ν¨λ ₯μ νλ³΅νλ€. μ λΉμ κ·Έ λͺ©μ Β·μ‘°μ§κ³Ό νλμ΄ λ―Όμ£Όμ μ΄μ΄μΌ νλ©°, κ΅­λ―Όμ μ μΉμ  μμ¬νμ±μ μ°Έμ¬νλλ° νμν μ‘°μ§μ κ°μ ΈμΌ νλ€.',
                                                  'μ 1ν­μ μ§μλ₯Ό λ°μ λΉν΄ νμ κΈ°κ΄μ μ΄μ μνμ¬μΌ νλ€. νλ²μ¬νμμμ λ²λ₯ μ μνκ²°μ , νν΅μ κ²°μ , μ λΉν΄μ°μ κ²°μ  λλ νλ²μμμ κ΄ν μΈμ©κ²°μ μ ν  λμλ μ¬νκ΄ 6μΈ μ΄μμ μ°¬μ±μ΄ μμ΄μΌ νλ€. κ΅­νλ κ΅­μ μ κ°μ¬νκ±°λ νΉμ ν κ΅­μ μ¬μμ λνμ¬ μ‘°μ¬ν  μ μμΌλ©°, μ΄μ νμν μλ₯μ μ μΆ λλ μ¦μΈμ μΆμκ³Ό μ¦μΈμ΄λ μκ²¬μ μ§μ μ μκ΅¬ν  μ μλ€.'
                                                  ]);
  let [best, bestChange] = useState([0, 0, 0]);
  let newBest = [...best];
  
  function bestValue(idx, para){
    if(para == '1'){
      ++newBest[idx];
      bestChange(newBest);
    }else if(para == '2' && newBest[idx] > 0){
      --newBest[idx]
      bestChange(newBest);
    }
  }

  let [modal, modalChange] = useState(false);
  

  

  return (
    <div className="App">
      <Header/>
      <Section listTit={listTit} best={best} listContent={listContent} onMsClick={bestValue} onModalOpen={()=>{modalChange(true)}} onSetID = {(event)=>{ viewIdxChange(event.target.id)} }/>
      {
        // μ‘°κ±΄λ¬Έ ? μ°ΈμΌλ : κ±°μ§μΌλ
        modal == true ? <Modal listTit={listTit[viewIdx]} listContent={listContent[viewIdx]} onModalClose={()=>{modalChange(false)}}/> : null
      }
    </div>
  );
}

export default App;
