import ExternalWebSite from "./ExternalWebSite";

export default interface TwitterProfile {
  imageUrl: string;
  screenName: string;
  userId: string;
  externalWebsites: ExternalWebSite[];
}
