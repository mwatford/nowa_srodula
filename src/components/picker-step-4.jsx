import React, { useState, useRef } from 'react';
import Popup from '@/components/picker-popup';
import Button from '@/components/button';
import DownloadIcon from '@/components/download';

const Step = ({ type, floor, flat }) => {
    const imgURL = `../../picker/${type}_karty_lokali_pietro_${floor}/${type}_karty_lokali_pietro_${floor}-${flat}.jpg`;
    const fileURL = `../../cards/${type}_karty_lokali_pietro_${floor}.pdf`;

    const [displayPopup, setDisplayPopup] = useState(false);
    const imgEl = useRef(null);

    return (
        <div className="picker__image step-4" ref={imgEl}>
            {displayPopup && (
                <Popup callback={() => setDisplayPopup(false)}></Popup>
            )}
            <a
                href={fileURL}
                download
                onClick={() => setDisplayPopup(true)}
                className="picker__download"
            >
                <Button color="green" small={true} onClick={() => {}}>
                    Pobierz
                    <div className="icon">
                        <DownloadIcon></DownloadIcon>
                    </div>
                </Button>
            </a>
            <img src={imgURL} alt="karta lokalu" style={{ width: '100%' }} />
        </div>
    );
};

export default Step;
