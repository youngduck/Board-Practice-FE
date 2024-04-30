export function getCalculateTimeAgo(createTime: string): string {
  const currentTime = new Date();
  const postTime = new Date(createTime);
  const timeDifference =
    (currentTime.getTime() as number) - (postTime.getTime() as number);
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  let timeAgoString;
  if (minutesAgo < 1) {
    timeAgoString = "방금 전";
  } else if (minutesAgo === 1) {
    timeAgoString = "1분 전";
  } else if (minutesAgo < 60) {
    timeAgoString = `${minutesAgo}분 전`;
  } else if (minutesAgo < 60 * 24) {
    const hoursAgo = Math.floor(minutesAgo / 60);
    timeAgoString = `${hoursAgo}시간 전`;
  } else {
    const daysAgo = Math.floor(minutesAgo / (60 * 24));
    timeAgoString = `${daysAgo}일 전`;
  }

  return timeAgoString;
}
