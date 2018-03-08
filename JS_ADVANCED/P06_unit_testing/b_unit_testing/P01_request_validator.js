function validateRequest(obj) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!(obj.hasOwnProperty('method') && validMethods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(obj.hasOwnProperty('uri') && /^[a-zA-Z0-9.]+$|\*/g.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(obj.hasOwnProperty('version') && validVersions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(obj.hasOwnProperty('message') && /^[^<>&'"\\]*$/g.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;

}

let obj = {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
};

validateRequest(obj);

