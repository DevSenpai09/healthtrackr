import React from "react";

export default function MapView() {
  return (
    <div className="grid gap-3 content-start border border-[#DDDDDD] rounded-md p-3">
      <div className="grid gap-1">
        <h1 className="text-[#131313] font-semibold text-lg">Map View</h1>
        <p className="text-[#767676] text-sm">See all locations on the map.</p>
      </div>

      <span className="w-full h-96 grid relative bg-[url(/map-view.png)] bg-cover bg-center"></span>
    </div>
  );
}
