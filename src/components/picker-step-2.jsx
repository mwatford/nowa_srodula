import React, { useLayoutEffect, useRef, useState } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import {
    transformPercentsToPoints,
    transformPointsToPercents,
    applyPointsOnImage,
} from '@/utility/picker';

const floorsBasePoints = [
    {
        floor: 5,
        points: '285 930,1860 255,2310 765,2310 905,1860 530,285 1070',
    },
    {
        floor: 4,
        points: '285 1070,1860 530,2310 905,2310 1050,1860 750,285 1185',
    },
    {
        floor: 3,
        points: '285 1185,1860 750,2310 1050,2310 1185,1860 960,285 1305',
    },
    {
        floor: 2,
        points: '285 1305,1860 960,2310 1185,2310 1320,1875 1185,285 1410',
    },
    {
        floor: 1,
        points: '285 1410,1875 1185,2310 1320,2310 1455,1845 1380,285 1485',
    },
    {
        floor: 0,
        points: '285 1485,1845 1380,2310 1455,2310 1575,1845 1605,285 1575',
    },
];

const Step = ({ callback }) => {
    const data = useStaticQuery(graphql`
        query {
            img: file(relativePath: { eq: "picker-2.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const image = data.img.childImageSharp.fluid;
    const [points, setPoints] = useState('');
    const [floors, setFloors] = useState(floorsBasePoints);
    const imgEl = useRef(null);

    useLayoutEffect(() => {
        const onResize = () => {
            setFloors(
                floors.map((el) => ({
                    ...el,
                    points: transformPercentsToPoints(
                        transformPointsToPercents(el.points, 2574, 1998),
                        imgEl.current.clientWidth,
                        imgEl.current.clientHeight,
                    ),
                })),
            );
            setPoints(
                applyPointsOnImage(
                    imgEl.current,
                    '0 0, 0 100, 10 100, 10 45, 73 10, 91 35, 91 81, 10 81, 10 100, 100 100, 100 0',
                ),
            );
        };
        onResize();

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="picker__image" ref={imgEl}>
            <Img fluid={image} />
            <svg width="100%" height="100%" className="overlay">
                <g>
                    <polygon fill="#060F2DB7" points={points}></polygon>
                    {floors.map((el) => (
                        <polygon
                            key={el.points}
                            className="overlay__button overlay__button--green"
                            points={el.points}
                            onClick={() => callback(1, el.floor)}
                        ></polygon>
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default Step;
