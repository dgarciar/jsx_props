const App = () => (
    <div>
    <Person info="Learn some information about this person" name="daniel" age={28} hobbies={["basketball", "football", "soccer"]} />
    </div>
)

ReactDOM.render(<App />,
document.getElementById("root"));