import React from "react";
import FindMedicalServices from "./find-medical-services";
import MapView from "./map-view";

export default function Services() {
  return (
    <div className="px-5 grid gap-5 py-5 content-start">
      <FindMedicalServices />
      <MapView />
    </div>
  );
}
