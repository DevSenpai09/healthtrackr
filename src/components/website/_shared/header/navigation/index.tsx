import React from "react";
import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <div className="hidden lg:flex gap-7">
      <NavigationItem title="Home" url="/" isActive />
      <NavigationItem title="Features" url="/" />
      <NavigationItem title="How it works" url="/" />
      <NavigationItem title="FAQ" url="/" />
    </div>
  );
}
