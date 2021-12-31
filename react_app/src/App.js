import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

class App extends Component {
  render(){
    return <div>
      <h1 className="bg-primary text-white display-4">syuuki0927のページ</h1>
      <div className="container">
        <p className="subtitle">自己紹介</p>
          <ul>
            <li>群馬工業高等専門学校　電子情報工学科　卒業</li>
            <li>豊橋技術科学大学　情報・知能工学課程　B3　在学中</li>
            
          </ul>
        <p className="subtitle">することがないのだ</p>
        <p>Github pagesなるものの存在を知り，積んでたreactの本を読んでなにかしようと思ったが特にやりたいことがなかった．
          紹介するような自己がないのも問題．とりあえず本を読み終わるまで放置．
          Under Construction
        </p>
        <Rect x="200" y="500" w="200" h="200" c="#6992" r="25" />
      </div>
    </div>
  }
}

export default App;
