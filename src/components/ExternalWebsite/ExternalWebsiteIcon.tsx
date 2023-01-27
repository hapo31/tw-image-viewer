import { Avatar } from "@mui/material";
import { ExternalWebSiteType } from "../../entity/ExternalWebSite";
import pixivImage from "@/assets/pixiv.png";
import fanbox from "@/assets/fanbox.svg";
import ProfileIcon from "../Profile/ProfileIcon";

type Props = {
  type: ExternalWebSiteType;
};

export default function ExternalWebsiteIcon({ type }: Props) {
  switch (type) {
    case "fanbox":
      return <ProfileIcon size="small" src={pixivImage} variant="square" />;
    case "fantia":
      return <ProfileIcon size="small" src={pixivImage} variant="square" />;
    case "pixiv":
      return <ProfileIcon size="small" src={pixivImage} variant="square" />;
    case "skeb":
      return <ProfileIcon size="small" src={pixivImage} variant="square" />;
    default:
      // type === "other"
      return <ProfileIcon size="small" src={pixivImage} variant="square" />;
  }
}
