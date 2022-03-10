export const GuardReducer = (state, action) => {
    switch (action.type) {
        case "GET_GUARD_START": 
            return {
                blogs: [],
                isFetching: true,
                error: false
            };
        case "GET_GUARD_SUCCESS":
            return {
                blogs: action.payload,
                isFetching:  false,
                error: false
            }
        case "GET_GUARD_FAILURE":
            return {
                blogs: null,
                isFetching: false,
                error: true
            }
        case "CREATE_GUARD_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        
        case "CREATE_GUARD_SUCCESS":
            return {
                ...state,
                blogs: [...state.guards, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_GUARD_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "DELETE_GUARD_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_GUARD_SUCCESS": 
            return {
                blogs: state.blogs.filter((blog) => blog.id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_GUARD_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: false
            }
        default: {
            return state
        }
    }
}

