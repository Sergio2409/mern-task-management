import { 
    FORM_PROJECT, 
    LOAD_PROJECTS, 
    ADD_PROJECT, 
    VALIDATE_PROJECT_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case FORM_PROJECT:
            return {
                ...state,
                displayFormProject: true
            };
        case LOAD_PROJECTS:
            return {
                ...state,
                projectList: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projectList: [...state.projectList, action.payload],
                displayFormProject: false,
                errorform: false
            }
        case VALIDATE_PROJECT_FORM:
            return {
                ...state,
                errorform: true
            };
        case CURRENT_PROJECT:
            return {
                ...state,
                currentproject: state.projectList.filter(project => project.id === action.payload)
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projectList: state.projectList.filter(project => project.id !== action.payload),
                currentproject: null
            };
        default:
            return state;
    }
}