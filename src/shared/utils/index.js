export const convertTimeStampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toDateString();
}
