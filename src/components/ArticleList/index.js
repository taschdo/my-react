import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
    const articleElements = articles.map(
        (acticle, index) => <li key = {acticle.id} className="article-list__li"><Article article = {acticle} defaultOpen={index===0} /></li>
    );
    return (
        <ul>
            {articleElements}
        </ul>
    )
}