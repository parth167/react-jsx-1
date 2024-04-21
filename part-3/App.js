function App() {
  return (
    <div>
      <Person name="Parth" age={32} hobbies={['reading', 'cricket']} />
      <Person name="Dhoni" age={42} hobbies={['cricket', 'bike riding']} />
      <Person name="Vihaan" age={1} hobbies={['Playing toy', 'Sleeping']} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));