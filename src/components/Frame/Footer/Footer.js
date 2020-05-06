import React from "react";
import { Icon } from "semantic-ui-react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <h3>
        <span className="version">V 0.1.0 (build-1)</span>
        <span className="logo">
          Space
          {/* dev-apps */}
          {/* <Icon name="space shuttle" /> */}
          {/* dev-soft */}
          <Icon name="gitkraken" />
          {/* dev-games */}
          {/* <Icon name="rocket" /> */}
          Kraken
          {/* <sup>
            <Icon name="registered outline" />
          </sup> */}
        </span>
      </h3>
    </div>
  );
}
