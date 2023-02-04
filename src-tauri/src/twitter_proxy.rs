use oauth2::{
    basic::BasicClient, AuthUrl, ClientId, ClientSecret, CsrfToken, PkceCodeChallenge, RedirectUrl,
    Scope,
};
use reqwest::Url;

use crate::config::TwitterAPIKeys;

pub struct Twitter {
    pub client_keys: TwitterAPIKeys,
    pub barer_token: Option<String>,
    pub redirect_uri: String,
}

pub trait TwitterClient {
    fn new(&self) -> Self;
    fn oauth2_url(&self) -> (Url, CsrfToken);
}

const oauth2_endpoint: String = "https://twitter.com/i/oauth2/authorize".to_string();

impl TwitterClient for Twitter {
    fn new(&self) -> Self {
        Twitter {
            barer_token: self.barer_token,
            client_keys: self.client_keys,
            redirect_uri: self.redirect_uri,
        }
    }

    fn oauth2_url(&self) -> (Url, CsrfToken) {
        let client = BasicClient::new(
            ClientId::new(self.client_keys.api_key_secret),
            Some(ClientSecret::new(self.client_keys.api_key_secret)),
            AuthUrl::new(oauth2_endpoint.to_string()).unwrap(),
            None,
        )
        .set_redirect_uri(RedirectUrl::new(self.redirect_uri.to_string()).unwrap());

        let (pkce_code_challenge, pkce_verifier) = PkceCodeChallenge::new_random_sha256();
        let (auth_url, csrf_token) = client
            .authorize_url(CsrfToken::new_random)
            .add_scope(Scope::new("read".to_string()))
            .add_scope(Scope::new("users.read".to_string()))
            .add_scope(Scope::new("like.read".to_string()))
            .add_scope(Scope::new("list.read".to_string()))
            .add_scope(Scope::new("bookmark.read".to_string()))
            .set_pkce_challenge(pkce_code_challenge)
            .url();

        (auth_url, csrf_token)
    }
}

pub struct OAuth2 {
    pub redirectUri: String,
    pub scopes: Vec<String>,
    pub clientId: String,
    state: String,
    codeChallenge: String,
}
