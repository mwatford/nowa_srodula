import React, { useRef, useState, useLayoutEffect } from 'react';
import { applyPointsOnImage } from '@/utility/picker';

const E_sold = [
    1,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    13,
    14,
    15,
    16,
    18,
    19,
    22,
    23,
    24,
    25,
    27,
    28,
    31,
    32,
    33,
    35,
    36,
    37,
    38,
    40,
    41,
    42,
    44,
    45,
    46,
    48,
    49,
    50,
    51,
    52,
    54,
];
const F_sold = [
    1,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    11,
    12,
    14,
    15,
    16,
    17,
    18,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    64,
    65,
    66,
];

const points = {
    E: {
        viewBox: '0 0 1199 557',
        p: [
            [
                '310 80, 517 80, 517 290, 310 290',
                '10 80, 310 80, 310 290, 255 290, 230 313, 10 313',
                '10 546, 310 546, 310 338, 255 338, 230 313, 10 313',
                '310 546, 517 546, 517 338, 310 338',
                '517 546, 517 338, 685 338, 685 546',
                '685 338, 937 338, 937 546, 685 546',
                '937 338, 1050 338, 1050 313, 1190 313, 1190 546, 937 546',
                '937 80, 1190 80, 1190 313, 1050 313, 1050 290, 937 290',
                '685 80, 937 80, 937 290, 685 290',
                // "410 162,410 370,360 370,330 395,110 395,110 162",
                // "110 395,330 395,355 420,410 420,410 630,110 630",
                // "420 420,620 420,620 630,420 630",
                // "620 420,790 420,790 630,620 630",
                // "790 420,1040 420,1040 630,790 630",
                // "1040 420,1040 630,1300 630,1300 395,1150 395,1150 420",
                // "1150 390,1300 390,1300 162,1040 162,1040 370,1100 370,1150 370",
                // "1040 162,1040 370,790 370,790 162",
            ],
            [
                '340 55, 540 55, 540 255, 340 255',
                '50 55, 340 55, 340 255, 285 255, 260 280, 50 280',
                '50 505, 340 505, 340 305, 285 305, 260 280, 50 280',
                '340 505, 540 505, 540 305, 340 305',
                '540 505, 540 305, 702 305, 702 505',
                '702 305, 945 305, 945 505, 702 505',
                '945 305, 1050 305, 1050 280, 1190 280, 1190 505, 945 505',
                '945 55, 1190 55, 1190 280, 1050 280, 1050 255, 945 255',
                '702 55, 945 55, 945 255, 702 255',
                //   "620 170,620 375,420 375,420 170",
                //   "415 170,415 375,365 375,340 400,120 400,120 170",
                //   "120 400,340 400,365 425,415 425,415 630,120 630",
                //   "420 425,420 630,620 630,620 425",
                //   "620 425,620 630,785 630,785 425",
                //   "790 425,790 630,1035 630,1035 425",
                //   "1035 425,1035 630,1285 630,1285 400,1145 400,1145 425",
                //   "1145 400,1285 400,1285 170,1035 170,1035 375,1145 375",
                //   "1035 170,1035 375,790 375,790 170",
            ],
            // [
            //   "620 140,620 350,415 350,415 140",
            //   "415 140,115 140,115 375,335 375,360 350,415 350",
            //   "115 375,115 605,415 605,415 400,365 400,335 375",
            //   "415 605,620 605,620 400,415 400",
            //   "620 605,790 605,790 400,620 400",
            //   "790 605,1040 605,1040 400,790 400",
            //   "1040 605,1295 605,1295 375,1150 375,1150 400,1040 400",
            //   "1150 375,1295 375,1295 140,1040 140,1040 350,1150 350",
            //   "1040 140,1040 350,790 350,790 140",
            // ],
        ],
    },
    F: {
        viewBox: '0 0 1212 490',
        p: [
            [
                '755 70, 935 70, 935 256, 755 256',
                '935 70, 1205 70, 1205 278, 1008 278, 986 256, 935 256',
                '1008 278, 1205 278, 1205 485, 935 485, 935 300, 986 300',
                '935 300, 935 485, 755 485, 755 300',
                '755 300, 755 485, 605 485, 605 300',
                '605 300, 605 485, 458 485, 458 300',
                '458 300, 458 485, 232 485, 232 300',
                '232 300, 232 485, 5 485, 5 278, 135 278, 135 300',
                '5 70, 232 70, 232 256, 135 256, 135 280, 5 280',
                '458 70, 458 256, 232 256, 232 70',
                '605 70, 605 256, 458 256, 458 70',
                //   "835 170,1015 170,1015 355,900 355,835 355",
                //   "1015 170,1280 170,1280 375,1085 375,1065 355,1015 355",
                //   "1280 380,1085 380,1065 400,1015 400,1015 585,1280 585",
                //   "1015 585,1015 400,835 400,835 585",
                //   "835 585,835 400,685 400,685 585",
                //   "685 585,685 400,535 400,535 585",
                //   "535 585,535 400,315 400,315 585",
                //   "315 585,85 585,85 380,210 380,210 400,315 400",
                //   "85 375,85 170,310 170,310 355,265 355,210 355,210 375",
                //   "310 170,535 170,535 355,310 355",
                //   "535 170,685 170,685 355,600 355,535 355",
            ],
            [
                '732 45, 910 45, 910 225, 732 225',
                '910 45, 1170 45, 1170 245, 978 245, 959 225, 910 225',
                '978 245, 1170 245, 1170 448, 910 448, 910 265, 959 265',
                '910 265, 910 448, 732 448, 732 265',
                '732 265, 732, 448, 588 448, 588 265',
                '588 265, 588 448, 445 448, 445 265',
                '445 265, 445 448, 228 448, 228 265',
                '228 265, 228 448, 5 448, 5 245, 135 245, 135 265',
                '5 45, 228 45, 228 225, 135 225, 135 245, 5 245',
                '445 45, 445 225, 228 225, 228 45',
                '588 45, 588 225, 445 225, 445 45',
                //   "835 150,1015 150,1015 335,895 335,835 335",
                //   "1015 150,1280 150,1280 355,1090 355,1065 335,1015 335",
                //   "1280 360,1085 360,1065 380,1015 380,1015 565,1280 565",
                //   "1015 565,835 565,835 380,1015 380",
                //   "835 565,835 380,685 380,685 565",
                //   "685 565,535 565,535 380,685 380",
                //   "535 565,535 380,315 380,315 565",
                //   "310 565,85 565,85 360,215 360,215 380,310 380",
                //   "85 355,215 355,215 335,310 335,310 150,85 150",
                //   "310 150,535 150,535 335,310 335",
                //   "535 150,535 335,600 335,685 335,685 150",
            ],
        ],
    },
};

const overlay =
    '0 0, 0 100, 8 100, 8 24, 95 24, 95 81, 2 81, 2 101, 100 101, 100 0';

const Stage = ({ type, floor, callback }) => {
    const url = `../../pietra/${type}_${floor}c.svg`;

    const imgEl = useRef(null);
    const [overlayPoints, setOverlay] = useState(overlay);

    useLayoutEffect(() => {
        const onResize = () =>
            setOverlay(applyPointsOnImage(imgEl.current, overlay));

        onResize();

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="picker__image step-3" ref={imgEl}>
            <div className="relative">
                <img src={url} alt="x" width="100%" />
                <svg
                    width="100%"
                    height="100%"
                    viewBox={points[type].viewBox}
                    className="overlay"
                >
                    <g>
                        {type === 'E'
                            ? points['E'].p[
                                  floor > 0 ? 1 : 0
                              ].map((el, index) => (
                                  <polygon
                                      className={`overlay__button ${
                                          E_sold.includes(floor * 9 + index + 1)
                                              ? 'overlay__button--red'
                                              : 'overlay__button--green'
                                      } `}
                                      points={el}
                                      key={el}
                                      title={index + 1}
                                      onClick={() => callback(1, index + 1)}
                                  ></polygon>
                              ))
                            : points['F'].p[
                                  floor > 0 ? 1 : 0
                              ].map((el, index) => (
                                  <polygon
                                      className={`overlay__button ${
                                          F_sold.includes(
                                              floor * 11 + index + 1,
                                          )
                                              ? 'overlay__button--red'
                                              : 'overlay__button--green'
                                      } `}
                                      points={el}
                                      key={el}
                                      title={index + 1}
                                      onClick={() => callback(1, index + 1)}
                                  ></polygon>
                              ))}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Stage;
