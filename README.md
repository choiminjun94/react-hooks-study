# react Hooks 공부 

### :star2: useState :star2:
    함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다. 
    만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook 을 사용하시면 됩니다.

### :star2: useEffect :star2: 
    리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.

### :star2: useEffect  :start2: 
    컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행
    함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다

```javascript
         useEffect(() => {
            console.log("마운트 될 때만 실행됩니다.");
        }, []);
```
### :star2: useEffect  :start2: 
    특정 값이 업데이트 될 때만 실행하고 싶을 때

```javascript
        useEffect(() => {
            console.log(name);
        }, [name]);
```


