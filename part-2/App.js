function App() {
  return (
    <div>
      <Tweet
        name="Parth"
        username="p123"
        date={new Date().toDateString()}
        message="Hello every one!!"
      />
      <Tweet
        name="Ms Dhoni"
        username="Dhoni07"
        date={new Date().toDateString()}
        message="I will be retired soon"
      />
      <Tweet
        name="Xyz"
        username="X0"
        date={new Date().toDateString()}
        message="hello"
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));