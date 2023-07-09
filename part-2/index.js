const App = () => (
    <div>
        <Tweet username="@ngarcar" name="Daniel" date="07/08/23" message="Almost done with the bootcamp" />
        <Tweet username="@ngarcar" name="Daniel" date="07/07/23" message="React isn't too bad" />
        <Tweet username="@ngarcar" name="Daniel" date="07/06/23" message="I like coding" />
    </div>
  );
  
  ReactDOM.render(<App />, 
    document.getElementById("root"));