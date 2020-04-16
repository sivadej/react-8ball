import React, { useState } from 'react';
import './EightBall.css';

// start with black ball displaying initial message
// click on ball, should change ball from props containing msg and color

const EightBall = (props) => {
  const baseProps = {msg:'Think of a Question', color: 'black'};
  const [msg, setMsg] = useState(baseProps.msg);
  const [color, setColor] = useState(baseProps.black);
  const changeBall = () => {
    const rand = Math.floor(Math.random() * props.msgs.length)
    setMsg(props.msgs[rand].msg);
    setColor(props.msgs[rand].color);
  }
  const reset = () => {
    setMsg(baseProps.msg);
    setColor(baseProps.color);
  }

  return (
    <div>
      <div className="EightBall" style={{backgroundColor: color}} onClick={changeBall} >
        <p className="message">{msg}</p>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// set default props: [{ msg, color }]
EightBall.defaultProps = {msgs : [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]};

export default EightBall;