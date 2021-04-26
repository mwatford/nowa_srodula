export const transformPointsToPercents = (points, width, height) =>
  points
    .split(",")
    .map(tup => tup.trim().split(" "))
    .map(([x, y]) => [(x / width) * 100, (y / height) * 100].join(" "))
    .join(",")

export const kek = (points, width, height) =>
  points
    .split(",")
    .map(tup => tup.trim().split(" "))
    .map(([x, y]) => [(x / 100) * width, (y / 100) * height].join(" "))
    .join(",")

export const x = ({ clientWidth, clientHeight }, points) =>
  kek(points, clientWidth, clientHeight)
