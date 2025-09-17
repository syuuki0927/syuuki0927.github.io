import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">syuuki0927のページ</h1>
        <div className="container">
          <p className="subtitle">自己紹介</p>
          <ul>
            <li>群馬工業高等専門学校　電子情報工学科　卒業</li>
            <li>豊橋技術科学大学　情報・知能工学課程　卒業</li>
            <li>豊橋技術科学大学大学院　情報・知能工学専攻　卒業</li>
          </ul>
          <p className="subtitle">
            とりあえずテキストをアップデート。TypeScriptにしたいしNextにしたいし内容も追加したい。
          </p>
        </div>
      </div>
    );
  }
}

export default App;
