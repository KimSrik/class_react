import './App.css';
import {useState} from 'react';

function Header(){
  return (
    <header className="black-header">
      <h1>React 블로그</h1>
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
          <span id="1" onClick={()=>{props.onMsClick(idx,1)}} style={{cursor:'pointer'}}>👍</span> 
          <span id="2" onClick={()=>{props.onMsClick(idx,2)}} style={{cursor:'pointer'}}>👎</span> 
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
          <button onClick={props.onModalClose}>닫기</button>
        </div>
        <div className="modal-body">
          <div>{props.listTit}</div>
          <div>날짜</div>
          <div>{props.listContent}</div>
        </div>
      </div>
    </section>
  );
}

function App() {
  let [viewIdx, viewIdxChange]=useState(0);
  let [listTit, listTitChange] = useState(['서구청역 숨은 맛집', '연희동 추천 카페', '석남역 7호선 탑승기']);
  let [listContent, listContentChange] = useState([
                                                  '공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.',
                                                  '국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.',
                                                  '제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.'
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
        // 조건문 ? 참일때 : 거짓일때
        modal == true ? <Modal listTit={listTit[viewIdx]} listContent={listContent[viewIdx]} onModalClose={()=>{modalChange(false)}}/> : null
      }
    </div>
  );
}

export default App;
