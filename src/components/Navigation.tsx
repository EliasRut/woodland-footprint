import React, { Component } from "react";
import { getBasePath } from "../locationHelper";
import { AspectAwareImage } from "./AspectAwareImage";
import { DesktopNavigation } from "./DesktopNavigation";
import logoOein from "../resources/logo_oein.png";
import "./Navigation.css";

export interface NavigationProps {
  items?: JSX.Element[];
  children?: React.ReactNode;
}

export class Navigation extends Component<NavigationProps> {
  state = {
    sidebarOpened: false,
  };

  handleSidebarHide = () => {
    this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleItemClick = () => true;

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <div className="navigation">
        <div className="mobile-navigation">
          <ul
            className={`sidebar ${sidebarOpened ? "pushed" : "closed"}`}
            onClick={() => this.handleSidebarHide()}
          >
            <a
              href={`${getBasePath()}/#Intro`}
              onClick={() => this.handleSidebarHide()}
            >
              <AspectAwareImage
                imageSrcName={logoOein}
                imageAlt="Logo ÖIN"
                imageTitle="Österreichisches Institut für Nachhaltige Entwicklung"
                width={225}
                height={54}
                lazy={true}
              />
            </a>
            <a href="/#UeberUns" onClick={() => this.handleSidebarHide()}>
              Über Uns
            </a>
            <a href="/#Kontakt" onClick={() => this.handleSidebarHide()}>
              Kontakt
            </a>
          </ul>
          <div className={`navbar${sidebarOpened ? " pushed" : ""}`}>
            <div className="navbar__wrapper">
              <div className="navbar__container">
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
                <div onClick={this.handleToggle}>
                  <AspectAwareImage
                    imageSrcName="nav-burger.svg"
                    imageAlt="Navigation Burger"
                    imageTitle="Burger"
                    width={35}
                    height={35}
                    lazy={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-navigation">
          <DesktopNavigation />
          {children}
        </div>
      </div>
    );
  }
}
