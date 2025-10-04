const {useState} = React;

function App() {
  const [collapsed,setCollapsed] = useState(false);
  return (
    <div className="container">
      <div className={`leftPanel ${collapsed?"":"collapsed"}`}>
        <div className="navSections profile">
          <div className="photo"></div>
          <div className="username">Username</div>
        </div>

        <div className="navSections">Home</div>
        <div className="navSections">Projects</div>
        <div className="navSections">People</div>
        <button className="collapser" onClick={()=>{setCollapsed(!collapsed)}}/>
      </div>

      <div className="middlePanel">
        <div className="discussions">
            <div className="chats-left">Message1</div>
            <div className="chats-right">Message2</div>
            <div className="chats-left">Message3</div>
        </div>
        <div className="inputBar">
                <div className="textBox">
                <input id="message" className="textBox" type="text" />
                </div>
            <div className="sendBox"></div>
        </div>
      </div>
    </div>
  );
}
