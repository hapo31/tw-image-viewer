use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct TwitterAPIKeys {
    pub api_key: String,
    pub api_key_secret: String,
}
