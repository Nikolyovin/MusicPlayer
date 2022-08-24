import styles from "./Buttons.module.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { grey } from "@mui/material/colors"
import SkipNextIcon from '@mui/icons-material/SkipNext'

const Buttons = ({ togglePlayPause, isPlaying }) => {
   
    return (
        <div className={styles.buttonWrap}>
            <div className = { styles.button } onClick={togglePlayPause}>
                { 
                    isPlaying 
                    ? <PauseIcon  fontSize="large" sx={{ color: grey[ 500 ] }}/>      
                    : <PlayArrowIcon fontSize="large" sx={{ color: grey[ 500 ] }}/>  
                }
            </div>
            <div className = { styles.button } >
                <SkipNextIcon fontSize="large" sx={{ color: grey[ 500 ] }}/>
            </div>
        </div>
    )
}

export default Buttons