function Header(props) {
  return (
    <header>
      <div className="container">
        <h1>{ props.name1 } { props.name2() }</h1>
      </div>
    </header>
  );
}

function Section(props) {
  return (
    <section>
      <div className="container">
        <p>
          { props.setContent }
        </p>
      </div>
    </section>
  );
}

  function Footer(props) {
    return (
      <footer>
        <div className={ props.setClass.name }>
          <address>
            인천광역시 서구 연희동 1-1
            { props.setClass.consolePrint() }
          </address>
        </div>
      </footer>
    );
  }

export {Header, Section, Footer};