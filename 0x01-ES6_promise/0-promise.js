function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
export default getResponseFromAPI;
