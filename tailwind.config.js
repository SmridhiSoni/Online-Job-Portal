module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        talentRecruiter: {
          primary: "black",
          secondary: "#e3f6f5",
          accent: "#1A1A1A",
          neutral: "#bae8e8",
          "base-100": "#ffffff",
          info: "#e3f6f5",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
