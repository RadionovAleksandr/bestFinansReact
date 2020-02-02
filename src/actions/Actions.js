export function clickSowModal() {
    return function (dispatch) {
        dispatch({
            type: 'clickSowModal',
            payload: true,
        })

        // dispatch({
        //     type: 'LOGIN_REQUEST',
        // })
        // if (true) {

        //     dispatch({
        //         type: 'LOGIN_SUCCESS',
        //         payload: 'username',
        //     })
        // } else {
        //     dispatch({
        //         type: 'LOGIN_FAIL',
        //         error: true,
        //         payload: new Error('Ошибка авторизации'),
        //     })
        // }
    }
}