export const transformPointsToPercents = (points, width, height) =>
    points
        .split(',')
        .map((tup) => tup.trim().split(' '))
        .map(([x, y]) => [(x / width) * 100, (y / height) * 100].join(' '))
        .join(',');

export const transformPercentsToPoints = (points, width, height) => {
    return points
        .split(',')
        .map((tup) => tup.trim().split(' '))
        .map(([x, y]) => [(x / 100) * width, (y / 100) * height].join(' '))
        .join(',');
};

export const applyPointsOnImage = ({ offsetWidth, offsetHeight }, points) =>
    transformPercentsToPoints(points, offsetWidth, offsetHeight);
