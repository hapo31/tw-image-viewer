use crate::config::TwitterAPIKeys;
use crate::twitter_proxy::TwitterClient;
use dotenv::dotenv;
use std::env;

const api_key: String = env::var("TWITTER_API_KEY").expect("TWITTER_API_KEY must be set to .env");
const api_key_secret: String =
    env::var("TWITTER_API_KEY_SECRET").expect("TWITTER_API_KEY_SECRET must be set to .env");

const keys: TwitterAPIKeys = TwitterAPIKeys {
    api_key: api_key,
    api_key_secret: api_key_secret,
};

static mut hoge: String = "adada".to_string();

static twitter_client = TwitterClient::new( {  } );

#[tauri::command]
pub fn fetch_api_keys() -> String {
    dotenv().ok();
    let json = serde_json::to_string(&keys).unwrap();

    format!("{}", json)
}

#[tauri::command]
pub fn get_oauth2_url() -> String {
  let 
}
