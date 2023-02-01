import { invoke } from "@tauri-apps/api";
import * as t from "io-ts";

const keysValidator = t.type({
  api_key: t.string,
  api_key_secret: t.string,
});

async function fetchInvoke<T extends t.Props, Args = {}>(
  command: string,
  validator: t.TypeC<T>,
  args?: Args,
) {
  const res: string = await invoke(command, args as any);
  const response = JSON.parse(res);
  if (!validator.is(response)) {
    throw new Error(
      `Validation error in ${command}\n  Unexpected response:${res}\n  expected:${validator}`,
    );
  }

  return response;
}

export async function fetchApiKeys() {
  const res = await fetchInvoke("fetch_api_keys", keysValidator);

  return {
    apiKey: res.api_key,
    apiKeySecret: res.api_key_secret,
  };
}
