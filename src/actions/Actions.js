export function clickSowModal() {
    return function (dispatch) {
        dispatch({
            type: 'clickSowModal',
            payload: true,
        })
    }
}

export function closeModal() {
    return function (dispatch) {
        dispatch({
            type: 'closeModal',
            payload: false,
        })
    }
}
export function handleLogin(isLogin) {
    return function (dispatch) {
        dispatch({
            type: 'LOGIN_REQUEST',
        })
        if (isLogin) {

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: true,
            })
        } else {
            dispatch({
                type: 'LOGIN_FAIL',
                error: true,
                payload: new Error('Ошибка авторизации'),
            })
        }
    }
}