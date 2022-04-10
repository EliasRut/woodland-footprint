import * as React from "react";
import { getBasePath } from "../locationHelper";
import logoOein from "../resources/logo_oein.png";
import { AspectAwareImage } from "./AspectAwareImage";
import "./DesktopNavigation.css";

export class DesktopNavigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__bar">
          <a href={`${getBasePath()}/#Intro`}>
            <AspectAwareImage
              imageSrcName={logoOein}
              imageAlt="Logo ÖIN"
              imageTitle="Österreichisches Institut für Nachhaltige Entwicklung"
              width={225}
              height={54}
              lazy={false}
            />
          </a>
          <div className="nav__bar-elements">
            <a href="/#UeberUns">Über Uns</a>
            <a href="/#Leistungen">Kontakt</a>
          </div>
        </div>
      </div>
    );
  }
}
