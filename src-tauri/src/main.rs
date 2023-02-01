#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod config;

use config::TwitterAPIKeys;
use dotenv::dotenv;
use std::env;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn fetch_api_keys() -> String {
    dotenv().ok();
    let api_key = env::var("TWITTER_API_KEY").expect("TWITTER_API_KEY must be set to .env");
    let api_key_secret =
        env::var("TWITTER_API_KEY_SECRET").expect("TWITTER_API_KEY_SECRET must be set to .env");

    let keys = TwitterAPIKeys {
        api_key: api_key,
        api_key_secret: api_key_secret,
    };

    let json = serde_json::to_string(&keys).unwrap();

    format!("{}", json)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_api_keys])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
