import { useEffect, useState } from "react";
// import * as Datamap from "../../node_modules/datamaps/dist/datamaps.world.min.js";
// import Datamap from "datamaps";
// import * as Datamap from "datamaps";

export function WorldMap() {
  const [firstRun, setFirstRun] = useState(false);

  useEffect(() => {
    if (firstRun) return () => {};
    var myMap = new Datamap({
      element: document.getElementById("basic"),
      scope: "world",
      responsive: true,
      fills: {
        defaultFill: "#d1d5db",
        firstWorld: "#86efac",
        thirdWorld: "#86efac",
        interestingSpot: "#86efac",
        boringSpot: "#86efac",
      },
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: "white",
        popupTemplate: function (geography, data) {
          return (
            '<div class="hoverinfo">' +
            geography.properties.name +
            " - User Percentage :" +
            data.formationDate +
            " "
          );
        },
      },
      data: {
        // Country Codes list https://countrycode.org/
        USA: {
          fillKey: "firstWorld",
          formationDate: "54%",
        },
        CHN: {
          fillKey: "thirdWorld",
          formationDate: 1700,
        },
        JPN: {
          fillKey: "firstWorld",
          formationDate: 1930,
        },
        AUS: {
          fillKey: "firstWorld",
          formationDate: 1350,
        },
        IND: {
          fillKey: "thirdWorld",
          formationDate: 1500,
        },
        RUS: {
          fillKey: "fiveWorld",
          formationDate: 100,
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
