import React from 'react';
import './App.css';
import ContentBlock from "./Components/ContentBlock/ContentBlock";
import MyHeaderBlock from "./Components/HeaderBlock/MyHeaderBlock";
import FooterBlock from "./Components/FooterBlock/FooterBlock";
import Card from "./Components/Card/CardLesson";
import {wordsList} from "./Components/wordsList";
import {myWords} from "./Components/myWords";
import MyCard from "./Components/MyCard/MyCard";

const App = () => {
  return <div className="appContainer">
    <MyHeaderBlock link="#" decr="Тестовая ссылка" dif="Другая ссылка" col wt/>
    <ContentBlock hOne="Умный заголовок"
                  lor="Моё тестовое решение анимации,не знаю есть ли проще или как-то по другому и как можно футтер к низу прижать"
                  words={wordsList}>
      <div>
        <h2>Слова с урока</h2>
        <div className="cardContainer">
          {wordsList.map(({eng, rus}, index) => <Card key={index} eng={eng} rus={rus}/>)}
        </div>
      </div>
      <div>
        <h2>Слова для домашнего задания</h2>
        <div className="cardContainer">
          {myWords.map(({eng, rus}, index) => <MyCard key={index} eng={eng} rus={rus}/>)}
        </div>
      </div>
    </ContentBlock>
    <FooterBlock cop="&copy; Денис" mrg>
    </FooterBlock>
  </div>
};

export default App;
