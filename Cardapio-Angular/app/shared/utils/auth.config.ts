interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'PWL2CQT1ydvZ0wvvdHUTIRtXE8qm7YGh',
    domain: 'cardapio-online.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/inicio'
};
