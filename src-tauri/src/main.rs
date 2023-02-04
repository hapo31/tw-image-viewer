#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod config;
mod tauri_commands;
mod twitter_proxy;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![tauri_commands::fetch_api_keys])
        .invoke_handler(tauri::generate_handler![tauri_commands::get_oauth2_url])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
