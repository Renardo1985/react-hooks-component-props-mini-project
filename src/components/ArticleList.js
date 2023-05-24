import React from "react";
import Article from "./Article";


function ArticleList({posts}) {      
    const post = posts.map((element) => {return <Article key={element.id} title={element.title} date={element.date} preview={element.preview} minutes={element.minutes}/>  
      })
    
      return (<main>{post}</main>)
}

export default ArticleList