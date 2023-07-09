const App = () => (
    <div>
        <FirstComp first="My very first component" />
        <NamedComp name="Daniel" />

    </div>
  );
  
  ReactDOM.render(<App />, 
    document.getElementById("root"));