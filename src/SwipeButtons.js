import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div class="swipeButtons">
            <IconButton className="SwipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
