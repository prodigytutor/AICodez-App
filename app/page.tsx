import { LearnMore } from "./components/learn-more";
import screenshotDevices from "./images/user-button@2xrl.webp";
import signIn from "./images/sign-in@2xrl.webp";
import verify from "./images/verify@2xrl.webp";
import userButton2 from "./images/user-button-2@2xrl.webp";
import signUp from "./images/sign-up@2xrl.webp";
import logo from "./images/logo.png";
import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/footer";

import { CARDS } from "./consts/cards";
import LandingHeader from "./components/LandingPage/LandingHeader";
import Hero from "./components/LandingPage/Hero";
import Features from "./components/LandingPage/Features";
import CallToAction from "./components/LandingPage/CallToAction";
import Contact from "./components/LandingPage/Contact";

export default function Home() {
  return (
<section>
    <LandingHeader />
    <Hero />
    <Features />
    <CallToAction />
    <Contact /> 
    
</section>
  );
}
