
const initialState = {
    isAuthenticated: false
}


export default function (state = { initialState }, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload,isAuthenticated:true }
        case 'GET_DASHBOARD_USERS':
            return { ...state, dashboardusers: action.payload }
        case 'DELETE_DASHBOARD_USERS':
            return {
                ...state, canEdit: !state.canEdit
                , deletedashboardusers: action.payload
            }
        case 'UPDATE_DASHBOARD_USERS':
            return { ...state, updatedashboardusers: action.payload }
            
            case 'ADD_DASHBOARD_USERS':
            return { ...state, addusers: action.payload }

        default:
            return state
    }
}