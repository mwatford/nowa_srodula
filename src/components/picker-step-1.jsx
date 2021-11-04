import React, { useState, useLayoutEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { applyPointsOnImage } from '@/utility/picker';
import { cloneDeep } from 'lodash';

const buildings = [
    [
        375,
        {
            type: 'E',
            key: 1,
            x: '74%',
            y: '48%',
            width: '15%',
            height: '23%',
        },
        {
            type: 'F',
            key: 2,
            x: '74%',
            y: '72%',
            width: '15%',
            height: '25%',
        },
    ],
    [
        425,
        {
            type: 'E',
            key: 1,
            x: '74%',
            y: '46%',
            width: '15%',
            height: '23%',
        },
        {
            type: 'F',
            key: 2,
            x: '74%',
            y: '71%',
            width: '15%',
            height: '26%',
        },
    ],
    [
        450,
        {
            type: 'E',
            key: 1,
            x: '74%',
            y: '44%',
            width: '15%',
            height: '24%',
        },
        {
            type: 'F',
            key: 2,
            x: '74%',
            y: '70%',
            width: '15%',
            height: '27%',
        },
    ],
    [
        500,
        {
            type: 'E',
            key: 1,
            x: '74%',
            y: '41.5%',
            width: '15%',
            height: '26%',
        },
        {
            type: 'F',
            key: 2,
            x: '74%',
            y: '68.5%',
            width: '15%',
            height: '29%',
        },
    ],
    [
        550,
        {
            type: 'E',
            key: 1,
            x: '74%',
            y: '40%',
            width: '15%',
            height: '26%',
        },
        {
            type: 'F',
            key: 2,
            x: '74%',
            y: '68%',
            width: '15%',
            height: '29%',
        },
    ],
    [
        600,
        {
            type: 'E',
            key: 1,
            x: '75%',
            y: '38%',
            width: '13%',
            height: '26%',
        },
        {
            type: 'F',
            key: 2,
            x: '75%',
            y: '67%',
            width: '13%',
            height: '29%',
        },
    ],
    [
        700,
        // {
        //   type: "F",
        //   coords: "287,301,407,581",
        //   x: "21%",
        //   y: "27%",
        // },
        // {
        //   type: "F",
        //   coords: "586,305,706,585",
        //   x: "42%",
        //   y: "27%",
        // },
        // {
        //   type: "F",
        //   coords: "281,626,401,906",
        //   x: "21%",
        //   y: "56%",
        // },
        // {
        //   type: "F",
        //   coords: "591,628,696,906",
        //   x: "42%",
        //   y: "56%",
        // },
        {
            type: 'E',
            key: 1,
            x: '63%',
            y: '35%',
            width: '10%',
            height: '22%',
        },
        {
            type: 'F',
            key: 2,
            x: '63%',
            y: '59%',
            width: '10%',
            height: '23%',
        },
    ],
];

const breakpoints = [
    [
        400,
        '0 0, 0 100, 70 100, 70 45, 92 45, 92 98, 20 98, 20 100, 100 100, 100 0',
    ],
    [
        500,
        '0 0, 0 100, 70 100, 70 40, 92 40, 92 98, 20 98, 20 100, 100 100, 100 0',
    ],
    [
        600,
        '0 0, 0 100, 65 100, 65 35, 95 35, 95 98, 20 98, 20 100, 100 100, 100 0',
    ],
    [
        700,
        '0 0, 0 100, 60 100, 60 30, 75 30, 75 85, 20 85, 20 100, 100 100, 100 0',
    ],
];

const pickBreakpointSet = (breakpoints, imgEl) => {
    for (let [bp, points] of breakpoints) {
        if (imgEl.current.clientWidth <= bp)
            return applyPointsOnImage(imgEl.current, points);
    }

    return applyPointsOnImage(
        imgEl.current,
        '0 0, 0 100, 60 100, 60 25, 75 25, 75 85, 20 85, 20 100, 100 100, 100 0',
    );
};

const calcBuildings = (buildings, imgEl) => {
    for (let [bp, ...rest] of buildings) {
        if (imgEl.current.clientWidth <= bp) return cloneDeep(rest);
    }

    return [
        {
            type: 'E',
            key: 1,
            x: '63%',
            y: '29%',
            width: '10%',
            height: '23%',
        },
        {
            type: 'F',
            key: 2,
            x: '63%',
            y: '56%',
            width: '10%',
            height: '25%',
        },
    ];
};

const Step = ({ callback }) => {
    const data = useStaticQuery(graphql`
        query {
            img: file(relativePath: { eq: "picker-1.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sm: file(relativePath: { eq: "picker-1-sm.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const images = [
        data.sm.childImageSharp.fluid,
        {
            ...data.img.childImageSharp.fluid,
            media: `(min-width: 600px)`,
        },
    ];

    const imgEl = useRef(null);
    const [points, setPoints] = useState('');
    const [size, setSize] = useState({ width: '100%', height: '100%' });
    const [buildingPaths, setBuildingPaths] = useState('');

    useLayoutEffect(() => {
        const onResize = async () => {
            setSize({
                width: imgEl.current.clientWidth,
                height: imgEl.current.clientHeight,
            });

            setPoints(pickBreakpointSet(breakpoints, imgEl));

            setBuildingPaths(calcBuildings(buildings, imgEl));
        };

        window.addEventListener('resize', onResize);

        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="picker__image step-1" ref={imgEl}>
            <Img fluid={images} />
            <svg {...size} className="overlay">
                <g>
                    <polygon fill="#060F2DB7" points={points}></polygon>
                    {buildingPaths &&
                        buildingPaths.map((el) => (
                            <rect
                                key={el.key}
                                width={el.width}
                                height={el.height}
                                x={el.x}
                                y={el.y}
                                className="overlay__button overlay__button--green"
                                onClick={() => callback(1, el.type)}
                            ></rect>
                        ))}
                </g>
            </svg>
        </div>
    );
};

export default Step;
