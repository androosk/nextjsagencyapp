import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "design-team": "url(/images/designprocess.jpg)",
        "design-two": "url(/images/design2.jpg)",
        "idea-img": "url(/images/lightbulb.jpg)",
        "frame-img": "url(/images/frame.jpg)",
        "notebook-img": "url(/images/notebook.jpg)",
        "develop-img": "url(/images/branddevelopment.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
