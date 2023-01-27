export type ExternalWebSiteType =
  | "pixiv"
  | "skeb"
  | "fanbox"
  | "fantia"
  | "other";

export default interface ExternalWebSite {
  type: ExternalWebSiteType;
  url: string;
}
