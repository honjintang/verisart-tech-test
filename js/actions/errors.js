export const updateError = error => ({
    type: 'UPDATE_ERROR',
    payload: error,
})

export const clearError = () => ({
    type: 'CLEAR_ERROR',
})