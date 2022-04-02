# Star rating 만들기

## 1. 동적으로 자식 요소 여러개 삽입

```js
const toAdd = document.createDocumentFragment();
for(var i=0; i < 생성할 요소 개수; i++){
   const newDiv = document.createElement('div');
   toAdd.appendChild(newDiv);
}

document.appendChild(toAdd);
```
**Document.createDocumentFragment()**
- 새로운 빈 `DocumentFragment`를 생성한 후 반환. 여기서 `DocumentFragment`란, 부모가 없는 아주 작은 document 객체를 나타냄.
![](https://media.vlpt.us/images/0seo8/post/2c5d2879-2bde-4b92-a4ed-6cb2c272edd5/image.png)


## 2. 자바스크립트로 CSS 링크 동적 추가
- 특정 요소의 재사용성을 높이기 위해 요소에 적용되는 Css파일을 자바스크립트로 동적으로 추가할 수 있다. 
```js
const addLinkCss = () => {
  const LinkNode = document.createElement('link');
  LinkNode.type = "text/css"
  LinkNode.rel = "stylesheet"
  LinkNode.href = "./star-rating/theme.css"
  document.head.appendChild(LinkNode)
}
```

## 3. 커스텀이벤트 생성

### step1. new CustomEvent()
```js
event = new CustomEvent(typeArg, customEventInit);
```

커스텀 이벤트의 경우 두개의 인수를 받는다.

- **typeArg** 
  - 이벤트 이름
  
- **options** 
  - 객체형으로 `detail`라는 프로퍼티를 추가해 커스텀 이벤트 관련 정보를 명시하고, 정보를 이벤트에 전달할 수 있다.
  - `detail`은 readonly 속성으로, 처음 이벤트 생성할 때에만 값을 넣어줄 수 있다.

### step2. addEventListener()

생성한 이벤트가 실행될 수 있도록 `addEventListener()`를 통해 이벤트를 실행시켜준다.

```js
EventTarget.addEventListener(typeArg, listener);
```
    
## stpe3. dispatchEvent

이벤트 생성자를 통해 이벤트 객체를 생성한 이후에는 `dispatchEvent(event)`를 호출함으로써 이벤트를 실행시킬 수 있다.

```js
EventTarget.dispatchEvent(event);
```
