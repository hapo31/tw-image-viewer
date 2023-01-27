import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import { ExternalWebSiteType } from "../../entity/ExternalWebSite";
import ExternalLink from "../Lib/ExternalLink";
import ExternalWebsiteIcon from "./ExternalWebsiteIcon";

type Props = {
  websiteType: ExternalWebSiteType;
  url: string;
};

export default function ExternalWebsite({ url, websiteType }: Props) {
  return (
    <Wrap>
      <ExternalWebsiteIcon type={websiteType} />
      <ExternalLink href={url} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  gap: 3px;
`;
