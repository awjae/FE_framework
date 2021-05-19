import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// global.css는 _app.js 에서만 접근이 가능하다. 왜냐하면 모든 요소에 영향을 주는 스코프를 가졌기 떄문이다. 