export const getGuardStart = () => ({
    type: "GET_GUARD_START"
});

export const getGuardSuccess = (blogs) => ({
    type: "GET_GUARD_SUCCESS",
    payload: blogs,
});

export const getGuardFailure = () => ({
    type: "GET_GUARD_FAILURE"
})

// Create Staff
export const createGuardStart = () => ({
    type: "CREATE_GUARD_START"
})

export const createGuardSuccess = (guard) => ({
    type: "CREATE_GUARD_SUCCESS",
    payload: guard
})

export const createGuardFailure = () => ({
    type: "CREATE_GUARD_FAILURE"
})

// Delete Guard
export const deleteGuardStart = () => ({
    type: "DELETE_STAFF_START"
})

export const deleteGuardSuccess = (id) => ({
    type: "DELETE_GUARD_SUCCESS",
    payload: id
})

export const deleteGuardFailure = () => ({
    type: "DELETE_GUARD_FAILURE"
})
