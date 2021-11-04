import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Popup from '@/components/picker-popup';
import { applyPointsOnImage } from '@/utility/picker';
import Button from '@/components/button';
import DownloadIcon from '@/components/download';

const Step = ({ type, floor, flat }) => {
    const imgURL = `../../picker/${type}_karty_lokali_pietro_${floor}/${type}_karty_lokali_pietro_${floor}-${flat}.jpg`;
    const fileURL = `../../karty/${type}_karty_lokali_pietro_${floor}.pdf`;

    const [displayPopup, setDisplayPopup] = useState(false);
    const [points, setPoints] = useState('');
    const imgEl = useRef(null);

    useLayoutEffect(() => {
        const onResize = () =>
            setPoints(
                applyPointsOnImage(
                    imgEl.current,
                    '0 0, 0 100, 5 100, 5 15, 95 15, 95 93, 5 93, 5 100, 100 100, 100 0',
                ),
            );

        onResize();

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

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
