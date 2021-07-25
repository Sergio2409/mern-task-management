import { 
    TASKS_PROJECTS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATE_TASK,
    CURRENT_TASK,
    EDIT_TASK
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case TASKS_PROJECTS:
            return {
                ...state,
                tasksprojects: state.tasks.filter(task => task.projectId === 
                    action.payload)
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                errortask: false
            };
        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== 
                    action.payload)
            };
        case EDIT_TASK:
        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === 
                    action.payload.id ? action.payload : task),
                taskselected: null
            };
        case CURRENT_TASK:
            return {
                ...state,
                taskselected: action.payload
            };
        default:
            return state;
    }
}