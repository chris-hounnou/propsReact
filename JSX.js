const FirstComponent = () => {
    return <div>
        <h1>My Very First Component</h1>
        <Name name="Christopher" species="Human" />


        <Tweet
            name='Chris Paul'
            username='pc3'
            date={new Date().toDateString()}
            message="I cant belive I got traded to the Warriors" />
        <Tweet
            name='Brandon Jerm'
            username='Jbking'
            date={new Date().toDateString()}
            message="I am the king! Joffery said before he died lol" />
        <Tweet
            name='sandra'
            username='sandyyyyy'
            date={new Date().toDateString()}
            message=" Vioala Davis is one of the Greatest!" />
            
        <Person
            name="Brenda"
            age={38}
            hobbies={("hunting", "fishing")}
        />

        <Person
            name="Max"
            age={32}
            hobbies={("reading", "writing")}
        />

        <Person
            name="Freeman"
            age={8}
            hobbies={("playing", "swimming")}
        />














    </div>
}
ReactDOM.render(<FirstComponent />, document.getElementById('root'));

