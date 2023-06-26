import { useEffect, useState } from "react";
// import * as Datamap from "/datamaps/dist/datamaps.world.min.js";
// import Datamap from "datamaps";
// import * as Datamap from "datamaps";

// const Datamap: any = undefined;

export function WorldMap() {
  const [firstRun, setFirstRun] = useState(false);

  useEffect(() => {
    if (firstRun) return () => {};
    // @ts-ignore
    var myMap = new Datamap({
      element: document.getElementById("basic"),
      scope: "world",
      responsive: true,
      fills: {
        defaultFill: "#d1d5db",
        firstWorld: "#22c55e",
        thirdWorld: "#f97316",
        uk: "#3b82f6",
        interestingSpot: "#86efac",
        boringSpot: "#86efac",
      },
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: "white",
        popupTemplate: function (geography: any, data: any) {
          return (
            '<div class="hoverinfo">' +
            geography.properties.name +
            " - User Percentage :" +
            data.percentage +
            " "
          );
        },
      },
      data: {
        // Country Codes list https://countrycode.org/
        USA: {
          fillKey: "firstWorld",
          percentage: "54%",
        },
        IND: {
          fillKey: "thirdWorld",
          percentage: "20%",
        },

        GBR: {
          fillKey: "uk",
          percentage: "35%",
        },
      },
    });

    // Manage responsiveness
    window.addEventListener("resize", function () {
      myMap.resize();
    });

    setFirstRun(true);
  }, []);
  return <div id="basic" />;
}
