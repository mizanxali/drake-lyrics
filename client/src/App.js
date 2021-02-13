import { getLyrics } from 'genius-lyrics-api'
import React, { useEffect, useRef, useState } from 'react'
import Spinner from './Spinner'
import axios from 'axios'

const App = () => {

  const bar0Ref = useRef('')
  const bar1Ref = useRef('')
  const bar2Ref = useRef('')
  const bar3Ref = useRef('')

  const [state, setState] = useState({bars: [], randomSong: '', loading: true, theLyrics: ''})

  useEffect(() => {
	  fetchLyrics()
  }, [])

  const fetchLyrics = () => {
    setState({loading: true})
    axios.get('api/lyrics')
    .then(res => {
      console.log(res.data)
      setState({
        bars: res.data.bars,
        randomSong: res.data.randomSong,
        loading: false,
        theLyrics: res.data.bars[0] + ", " + res.data.bars[1] + ", " + res.data.bars[2] + ", " + res.data.bars[3]
      })
    })
  }
  
  const copyLyrics = () => {
	let e = document.createElement("textarea")
  document.body.appendChild(e)
	e.value = state.theLyrics
	e.select()
	document.execCommand("copy")
	document.body.removeChild(e)
	alert("Copied lyrics!")
  }

  return (
    <div className="App">
      <div className="content">
      <h1>DRAKE LYRICS</h1>
      <div className="lyrics">
	      {state.loading ? <Spinner /> : <>
        <i className="fas fa-quote-left"></i>
        <div className="bars">
          <br />
		  <p ref={bar0Ref} id='bar0'>{state.bars[0]}</p>
		  <p ref={bar1Ref} id='bar0'>{state.bars[1]}</p>
		  <p ref={bar2Ref} id='bar0'>{state.bars[2]}</p>
		  <p ref={bar3Ref} id='bar0'>{state.bars[3]}</p>
        </div>
        <i className="fas fa-quote-right"></i>
        <br />
        <h5>{state.randomSong.title}</h5></>}
      </div>
      <br />
      {!state.loading && <iframe src={'https://open.spotify.com/embed/track/' + state.randomSong.spotifyURI} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />}
      <br />
	  <br />
      {!state.loading && <button className="btn btn-outline-light btn-lg shadow-none" type="button" onClick={copyLyrics}><i className="fas fa-clipboard"></i>  COPY</button>}
      {!state.loading && <a href={'https://twitter.com/intent/tweet?text="' + state.theLyrics} className="btn btn-outline-light btn-lg shadow-none twitter-share-button"><i className="fab fa-twitter"></i>  TWEET</a>}
      <br />
      <br />
      {!state.loading && <button className="btn btn-light btn-lg shadow-none" type="button" onClick={fetchLyrics}><i className="fas fa-rocket"></i>  GENERATE</button>}
      <br />
      <br />
    </div>
    <div className="footer">
      <div className="footer-text">lyrics via <a href="https://genius.com/">genius</a> · background via <a href="https://giphy.com/">giphy</a> · developed by mizanxali </div>
      <div className="links">
        <a className="btn btn-outline-light shadow-none" href="https://github.com/mizanxali">
          <i className="fab fa-github"></i>
        </a>
        <a className="btn btn-outline-light shadow-none" href="https://twitter.com/mizanxali">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default App
