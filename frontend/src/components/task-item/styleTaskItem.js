import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
   btnDelete: {
        color: "red"
    },
    btnLowerPriority: {
        color: "blue"
    },
    btnPriorityHiden: {
        display: "none"
    },
    btnRisePriority: {
        color: "green"
    }
   
  })

export default useStyles;