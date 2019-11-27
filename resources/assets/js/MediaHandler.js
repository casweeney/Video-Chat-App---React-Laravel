class MediaHandler {
    getPermissions() {
        return new Promise((res, rej) => {
            navigator.mediaDevices.getUserMedia({})
        });
    }
}