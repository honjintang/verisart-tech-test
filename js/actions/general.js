export const saveAnswer = (id, value) => ({
    type: 'SAVE_ANSWER',
    payload: value,
    meta: id,
})