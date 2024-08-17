const useState = <T>(initialState?: T) => {
    let state: T | undefined = initialState;

    const getState = () => state;

    const setState = (newState: T) => {
        state = newState;
    };

    return [getState, setState] as [() => T | undefined, (newState: T) => void];
};


const [state, setNumberState] = useState(5);
console.log(state());
setNumberState(450);
console.log(state());
