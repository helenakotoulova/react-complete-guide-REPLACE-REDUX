import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => { // tohle je nas custom Hook
  // it will rerender when the useState rerenders, which rerenders when the state changes
  const setState = useState(globalState)[1]; // TADY V TOMTO CUSTOM HOOKU BUDEME SDILET DATA A NE LOGIKU JAKO U TECH JINYCH CUSTMO HOOKU, co jsme delali
  // any file which uses this hook will get this data
  // zajima nas jen setState (proto [1])

  const dispatch = (actionIdentifier,payload) => {
    // actions je objekt plny funkci
    // je to vlastne stejny princip jako u reduceru v reduxu
    const newState = actions[actionIdentifier](globalState,payload); // ta fce bude mit input globalSTate a bude returnovat newState
    globalState = { ...globalState, newState };
    // o te zmene globalSTatu musime informovat listeners
    for (const listener of listeners) {
      // je to array proto of
      listener(globalState); // bude updatovat ten state a proto react bude rerenderovat tu komponentu ktera pouziva ten nas custom hook
    }
  };

  useEffect(() => {
    listeners.push(setState); // pri mountovani pridame do listeners setState
    return () => {
      listeners = listeners.filter((l) => l !== setState); // pri unmountovani je zas oddelame.
    };
  }, [setState]); // probehne jen pri prvnim renderu. protoze setState je state updating funkce ktera se nikdy nemeni. to react garantuje.

  return [globalState, dispatch]; // tohle vraci nas hook. TAKHLE JSME VLASTNE UDELALI VERSION OF BUILT IN FUNCTION USEREDUCER
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, initialState };
  }

  actions = { ...actions, userActions };
};
