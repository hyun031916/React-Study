import React, { useState, useEffect, useCallback } from "react"
import ReactDOM from "react-dom"

const NewsItem = (props) => {
    const {title, description, url} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <p>{description}</p>
        </div>
    )
}

const Search = (props) => {

    const [keyword, setKeyword] = useState('')

    return(
        <div>
            <input type='text' value={keyword} placeholder='검색어 입력'
                   onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={() =>props.click(keyword)}>검색</button>
        </div>
    )
}
const WikiSearchApp = (props) => {

    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState('java')
    const handleSubmit = (keyword) => {
// ...
    }
    useEffect(() => {
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${searchData}`)
            .then(res => res.json())
            .then(data => {
                // 데이터 설정 및 로딩 상태 갱신
                setData(data)
            })
    }, [searchData])

    let content = <h1>no search result</h1>
    if(searchData !== null) {
        console.log(data)
        content = (
            <div>
                {/* 내용 구현 */}<ul>
                {
                    data.map((article, idx,) => {
                        return(<li key={idx}>
                            <NewsItem article={article} />
                        </li>)
                    })
                }
            </ul>
                {data}
            </div>
        )
    }
    return (
        <div>
            <Search click = {setSearchData} />
            {content}

        </div>
    )
}
ReactDOM.render(<WikiSearchApp />, document.getElementById("root"))