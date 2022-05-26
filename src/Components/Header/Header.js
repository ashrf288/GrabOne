import React from "react";
import { Icon } from "@iconify/react";
import "./header.css";
import DropDown from "./DropDown";
export default function Header({ width }) {
  return (
    <div className="header">
      <h1>GrabOne</h1>
      <nav className="nav">
        <DropDown 
          trigger={
            <>
              <div className="city-section" style={{ marginTop: "20%" }}>
                <Icon
                  icon="feather:map-pin"
                  color="white"
                  className="Icon"
                  width="30"
                />
                <span href="#" style={{color:"white"}}>Auckland</span>
                <Icon
                  icon="ri:arrow-drop-down-line"
                  color="white"
                  className="Icon"
                  width="30"
                />
              </div>
            </>
          }
          data={[
            "Auckland",
            "Waikato",
            "Wellington",
            "Northland",
            "Manawatu - Wanganui",
            "Tauranga",
            "Rotorua - Taupo",
            "Hawkes Bay",
            "Christchurch",
            "Taranaki",
            "Nelson - Marlborough",
            "Queenstown - Wanaka",
            "Dunedin - Invercargill",
          ]}
        />
        {width > 1090 && (
          <>
            <Icon icon="akar-icons:heart" className="Icon" height="30" />
            <Icon
              icon="eva:shopping-cart-outline"
              className="Icon"
              height="30"
            />
            <DropDown
              trigger={
                <div className="profile-section" style={{ marginTop: "20%" }}>
                  <Icon
                    icon="line-md:account"
                    className="Icon"
                    height="30"
                    color="white"
                  />
                  <Icon
                    icon="ri:arrow-drop-down-line"
                    color="white"
                    className="Icon"
                    height="30"
                  />
                </div>
              }
              data={[
                "My Account",
                "Gifts",
                "Profile",
                "My Subscriptions",
                "My Purchases",
                "Login",
              ]}
            />
            <div className="subscribe-section">
              <Icon icon="ci:mail" className="Icon" height="30" />
              <span href="#features">Subscribe</span>
            </div>
            
          </>
        )}
      </nav>
    </div>
  );
}
