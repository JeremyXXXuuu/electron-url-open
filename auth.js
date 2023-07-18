const { Auth } = require('@orosound/auth_client_sdk_nodejs');


const oro_provider = {
	name: 'orosound',
	openIdConnectUrl: 'http://localhost:8001',
	clientId: 'foo',
	redirectUri: 'com.example.app://auth/callback',
	scope: 'openid name profile email offline_access',
	responseType: 'code',
	extras: { prompt: 'consent', access_type: 'offline' },
}

const auth = new Auth(oro_provider.openIdConnectUrl, oro_provider.clientId, oro_provider.redirectUri, oro_provider.scope, oro_provider.responseType, oro_provider.extras);

async function login() {
  await auth.fetchServiceConfiguration();
  auth.openAuthUrl();
}

module.exports = login;
