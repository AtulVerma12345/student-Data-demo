import studentApi from '../api/studentApi';
import {push} from 'react-router-redux';

export function fetchedStudentData(data) {
    return {type: 'FETCHED_STUDENT_DATA', data};
}

export function onGoToDetail(data) {
    return {type: 'ON_GOTO_DETAIL', data};
}

/*export function goHome(data) {
    return function (dispatch) {
        dispatch(push('/'));
    };
}*/

export function onError(data) {
    return {type: 'ON_ERROR', data};
}


export function startLoader() {
    return {type: 'START_LOADER'};
}

export function EndLoader() {
    return {type: 'END_LOADER'};
}

export function getStudentData() {
    return function (dispatch) {
        //setTimeout(function () {
        studentApi
            .fetchStudentData()
            .then(data => {
                dispatch(fetchedStudentData(data));
                //dispatch (push('/about-us'));
                /*return dispatch ({
                            type:'FETCHED_STUDENT_DATA',push:push('/about-us')
                        });*/
            })
            .catch(error => {
                return dispatch(onError(error));
            });
        //});
    };
}
