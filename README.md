# Create-Movie-Web 🍿

> #### ReactJS로 영화 웹 서비스 만들기
>
> https://widrns15.github.io/create-movie-web/

</br>

## 1. 제작 기간

- 2022/03/10 ~ 2022/04/06

</br>

## 2. 사용 기술

<p>
<img src="https://img.shields.io/badge/React-05122A?style=flat&logo=React&logoColor=React"/>

<img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5"/>
  
<img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6"/>
  
<img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=JavaScript"/>
 </p>
</br>

## 3. 프로젝트 목표

- 앱 클론 코딩을 통한 React 기초 학습
- Props, React-Router-dom 학습
- 이전에 배웠던 HTML, CSS, SASS 복습
- 외부 API 활용

</br>

## 4. 주요 기능

#### 1. 랜덤 영화 추천 (Home.js)

- 외부 영화 API를 fecth와 json으로 활용
- Math.random 기능을 사용하여 랜덤으로 영화를 가져오게 설정
- useState와 useEffect로 내부 코드 실시간 업데이트
- 삼항연산자와 map 함수로 파라미터 값 활용
- 모든 오브젝트 최대한 컴포넌트화시켜 코드 깔끔하게 리팩토링

#### 2. 영화 상세 페이지 구현 (Detail.js)

- useParams로 홈페이지와 연동
- 받아온 API 값으로 배경화면 및 내용 구성
- styled-components 사용으로 즉각적인 반영이 보이도록 함
- 내비게이션 바, 뒤로가기 버튼 지원
