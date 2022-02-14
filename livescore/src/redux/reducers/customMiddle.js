export const myLogger=(store)=>(next)=>(action)=>{
    let news=store.getState().novosti
    console.log(store.getState().novosti)
    next(action)
    console.log(store.getState().novosti)

}