# react Hooks 공부 

### :star2: useState :star2:
    함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다. 
    만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook 을 사용하시면 됩니다.

### :star2: useEffect :star2: 
    리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.

### :star2: useEffect :star2: 
    컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행
    함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다
```javascript

     useEffect(() => {
        console.log("렌더링이 완려 되었습니다.");
        console.log({
            name,
            nickname,
        });
    });
```

```javascript

         useEffect(() => {
            console.log("마운트 될 때만 실행됩니다.");
        }, []);

```
### :star2: useEffect :star2: 
    특정 값이 업데이트 될 때만 실행하고 싶을 때

```javascript

        useEffect(() => {
            console.log(name);
        }, [name]);

```

### useReducer 
    컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook
    리듀서는 현재 상태와, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달 받아 새로운 상태를 반환하는 함수입니다. 
    리듀서 함수에서 새로운 상태를 만들 때는 꼭 불변성을 지켜주어야 합니다.

```javascript

      const [state, dispatch] = useReducer(reducer, { value: 0 });

```
    useReducer 의 첫번째 파라미터는 리듀서 함수, 그리고 두번째 파라미터는 해당 리듀서의 기본 값을 넣어줍니다. 
    이 Hook 을 사용 했을 때에는 state 값과 dispatch 함수를 받아오게 되는데요, 여기서 state 는 현재 가르키고 있는 상태고, dispatch 는 액션을 발생시키는 함수입니다.

    useReducer 을 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점 입니다

### useReducer - 인풋 상태 관리
    기존에는 인풋이 여러 개여서 useState 를 여러번 사용했다.
    useReducer 를 사용한다면 우리가 기존에 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고 e.target.name 을 참조하여 setState 를 해준 것과 유사한 방식으로 작업을 처리 할 수 있습니다

```javascript
    function reducer(state, action) {
        return {
            ...state,
            [action.name]: action.value
        };
    }

    const Info = () => {
        const [state, dispatch] = useReducer(reducer, {
            name: '',
            nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

```
    useReducer 에서의 액션은 그 어떤 값이 되어도 됩니다. 
    그래서 이번에 우리는 이벤트 객체가 지니고있는 e.target 값 자체를 액션 값으로 사용하였습니다.

