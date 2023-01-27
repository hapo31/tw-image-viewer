import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import { open } from "@tauri-apps/api/shell";
type Props = PropsWithChildren<{
  href: string;
}>;

export default function ExternalLink({ href, children }: Props) {
  return (
    <Link
      onClick={async () => {
        console.log("click");
        await open(href);
      }}>
      {children ?? href}
    </Link>
  );
}

const Link = styled.a`
  vertical-align: center;
  font-weight: bold;
  color: #e4e4ff;
  text-decoration: underline;
  line-height: 20px;
`;
