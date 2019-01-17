export const SPEAKERS_LOAD = 'SPEAKERS_LOAD';
export const SPEAKERS_LOAD_SUCCESS = 'SPEAKERS_LOAD_SUCCESS';
export const SPEAKERS_LOAD_FAIL = 'SPEAKERS_LOAD_FAIL';

export function speakersFetchData() {
    return {
        type: SPEAKERS_LOAD,
        payload: {
            request: {
                url: 'speakers'
            }
        }
    }
}