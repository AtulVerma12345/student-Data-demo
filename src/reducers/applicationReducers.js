import initialState from './initialState';
//import $ from 'jquery';
//import toastr from 'toastr';

export default function applicationReducers(state = initialState, action) {
    switch (action.type) {
        case 'START_LOADER': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.preLoader = true;
            return newState;
        }
        case 'END_LOADER': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.preLoader = false;
            newState.welcome = true;
            return newState;
        }
        case 'ON_GOTO_DETAIL': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.selectedData = action.data;
            newState.preLoader = false;

            console.log('newState.selectedData', newState.selectedData);

            return newState;
        }


        case 'FETCHED_STUDENT_DATA': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.cc = [];
            newState.selectedData = {};
            for (let j = 0; j < action.data.length; j++) {
                if (action.data[j] !== undefined) {
                    action.data[j].totalMarks =
                        (action.data[j].marks.s1) +
                        (action.data[j].marks.s2) +
                        (action.data[j].marks.s3) +
                        (action.data[j].marks.s4 !== undefined ? action.data[j].marks.s4 : 0)


                    newState.cc.push(action.data[j]);

                }
            }
            newState.studentData = newState.cc;
            newState.preLoader = false;

            console.log('FETCHED_STUDENT_DATA', newState.studentData);
            return newState;
        }

        case 'ON_ERROR': {
            const newState = JSON.parse(JSON.stringify(state));

            newState.preLoader = false;
            return newState;
        }

        default:
            return state;
    }
}
