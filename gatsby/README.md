* Root Directory
  * contents : 블로그 포스트 관련 파일들을 저장하기 위한 디렉토리입니다.
  * src 
    * components : React Component를 저장하기 위한 디렉토리입니다.
    * hooks : Custom Hooks을 저장하기 위한 디렉토리입니다.
    * pages : 페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리입니다. 기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안 됩니다.
    * templates : 게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리입니다. Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만들 수 있습니다. pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능합니다.




* 사용하지 않는 것 : 
```
yarn remove gatsby-plugin-manifest gatsby-plugin-gatsby-cloud
```


* 진행도
https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/lecture/76335?tab=curriculum