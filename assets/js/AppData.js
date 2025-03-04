const urlParams = new URLSearchParams(window.location.search);
const formIdWebParam = urlParams.get("formIdWeb");
const formIdAppParam = urlParams.get("formIdApp");

const AppData = {
  urls: {
    ios: "https://apps.apple.com/se/app/ett-b%C3%A4ttre-helsingborg/id1061079182",
    android: "https://play.google.com/store/apps/details?id=se.helsingborg.EttBattreHelsingborg&hl=sv",
    noLink: "#nolink",
  },
  formIds: {
    app: formIdAppParam || "vEKRiB3le1BSsgo18HW2",
    web: formIdWebParam || "U3X0lhXaQ4B2dBs2rk5K",
  },
};

export default AppData;