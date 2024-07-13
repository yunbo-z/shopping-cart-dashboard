import { HomeLandingImg } from "./components/HomePage/HomeLandingImg";
import { Introduction } from "./components/HomePage/Introduction";

export default function Home() {
  return (
    <div className="w-full">
      <HomeLandingImg />
      <Introduction />
    </div>
  );
}
