export const initialState = {
    user: {
        password: 'root',
        login: 'radionov.an1993@gmail.com',
    },

    company: {
        adress: 'г. Горно-Алтайск, Россия, Республика Алтай, Горно-Алтайск, улица Улагашева 13, офис 210',
        director: 'Зоммер Светлана Николаевна',
        email: 'zommer.svetlana@mail.ru',
        phone: '+7 999  450 3535',
        linkPhone: 'tel:+7 999  450 3535'
    },
    error: '',
    showModal: false,
    isLogin: false,
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'clickSowModal':
            return {...state, showModal: action.payload }
        case 'closeModal':
            return {...state, showModal: action.payload }
        case 'LOGIN_REQUEST':
            if (state.isLogin) {
                return {...state, isLogin: true }
            }

        default:
            return state
    }
}