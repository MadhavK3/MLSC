const {useState} = React;

function App() {
  const [collapsed,setCollapsed] = useState(false);
  const [arrow,setArrow] = useState('<');

  const [messages,setMessages] = useState(["Message1","Message2"]);
  const [message,setMessage] = useState("");

  const addMessage = ()=>{
    console.log('Hello')
    if(message.trim()==="") return;
    setMessages([...messages,message]);
    setMessage("");
  }

  return (
    <div className="container">
      <div className={`leftPanel ${collapsed?"collapsed":""}`}>
        <div className="navSections profile">
          <div className="photo"></div>
          <div className="username">Username</div>
        </div>

        <div className="navSections">Home</div>
        <div className="navSections">Projects</div>
        <div className="navSections">People</div>
        <div className="collapser" onClick={()=>{
          setCollapsed(!collapsed)
          setArrow((arrow==='>')?'<':'>')
          }}>{arrow}</div>
      </div>

      <div className="middlePanel">
        <div className="discussions">
          {
            messages.map((msg,i)=>{return <div key={i} className="chats">{msg}</div>})
          }
        </div>
        <div className="inputBar">
                <div className="textBox">
                  <input id="message" className="textBox" type="text"
                    value={message}
                    onChange={(e)=>{
                      setMessage(e.target.value)
                    }}
                    placeholder="Type Something"
                  />
                </div>
            <div className="sendBox" onClick={addMessage}>→</div>
        </div>
      </div>
    </div>
  );
}
