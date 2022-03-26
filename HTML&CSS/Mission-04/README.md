## 로그인바 영역 순서 배치(flex order 속성)
### item에 적용 가능한 속성 order
- flex또는 grid 컨테이너 안에서 현재 아이템의 순서를 결정짓습니다.
- html을 이용하지 않고 css만으로도 itme의 정렬순서를 변경할 수 있도록 돕습니다.
- 정렬순서는 오름차순으로 정렬되며, 같은 값이 있는 경우 소스 코드의 순서대로 정렬됩니다
- **접근성 순서와는 상관 없이 화면에 보이는 순서에만 영향을 줍니다**
- item속성에 order을 주고 싶은 경우 item의 container에 display: flex가 설정되어 있어야 합니다.

## a태그 target="_blank" 사용 시 보안
 [▶target="_blank" 취약점 보완](https://velog.io/@0seo8/HTML-targetblank-%EC%B7%A8%EC%95%BD%EC%A0%90-%EB%B3%B4%EC%99%84)

- target="_blank"의 보얀취약점을 보완하기 위해서 `rel="noopener noreferrer"`속성을 사용하는 것을 권장합니다.

## 네이밍컨벤션 BEM
 [▶네이밍컨벤션](https://velog.io/@0seo8/%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-BEM-aann5jg7)
 
 - BEM은 CSS에서 가장 범용적으로 사용되는 네이밍컨벤션으로 block-element-modifier로 구분.
 - **block**: 사용가능한 컴포넌트의 최상위 단위로 기능이나 목적으로 작명
 - **element**: 블록의 하위(자식)요소를 __를 이용해 표시
 - **modifier** 컴포넌트의 스타일을 변경할 때 사용할 단위로 --를 이용해표기

## select태그 커스텀마이징
[▶select 태그 화살표 커스터마이징](https://velog.io/@0seo8/htmlcss-select%ED%83%9C%EA%B7%B8-%ED%99%94%EC%82%B4%ED%91%9C-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95)

### 1. 기본 화살표 없애기
```
/*익스플로러 기본 화살표 없애기*/
select::-ms-expand {
  display: none;
}
/*화살표 기본 css 없애기*/
select {
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

### 2. svg화살표 위치시키기
```css
fieldset {
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  border: 0;
  width: 135px;
}

.icon--arrow {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  padding: 0;
}
```

### 3. select태그 영역 넓히기 + cursor: pointer
```css
.form--selectArea select {
  z-index: 2;
  position: relative;
  background-color: transparent;
  border-color: none;
  border: none;
  box-shadow: none;
  width: 135px;
  height: 40px;
  cursor: pointer;
  outline: none;
}
```
## 웹접근성을 고려해 텍스트 숨기기
[▶웹접근성을 고려해 텍스트 숨기기](https://velog.io/@sklove96/%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%98%EC%97%AC-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%88%A8%EA%B8%B0%EA%B8%B0)

```css
.hidden{
  overflow: hidden;
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  display: inline-block;
}
```

## input type search 
- 검색 필드는 텍스트 필드와 기능적으로는 완전히 똑같지만, 브라우저에 의해 다르게 표현될 수 있습니다.
-검색 필드에는 반드시 name 속성을 설정해야 하며, name 속성이 설정되어 있지 않으면 서버로 제출되지 않을 것입니다.
(가장 자주 사용되는 대표적인 name 속성값은 ‘q’입니다.)

## div ul li를 이용한 select 박스 구현
https://daisy-mansion.tistory.com/94