import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaDocker,
  FaAws,
  FaGitlab,
  FaGithub,
  FaLinkedin,
  FaGooglePlay,
  FaAppStore,
  FaChrome,
  FaLock,
  FaUniversalAccess,
  FaCheckCircle,
  FaVideo,
  FaMobileAlt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiFlutter,
  SiIonic,
  SiNextdotjs,
  SiExpress,
  SiRedis,
  SiInfluxdb,
  SiSocketdotio,
  SiPusher,
  SiStripe,
  SiRazorpay,
  SiJest,
  SiStorybook,
  SiMui,
  SiAntdesign,
  SiEslint,
  SiPrettier,
  SiPuppeteer,
  SiPostgresql,
  SiSqlite,
  SiMysql,
  SiShopify,
  SiClickup,
  SiI18Next,
  SiNpm,
  SiCakephp,
} from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { MdWeb, MdEmail, MdPayment, MdStorage, MdCloud } from "react-icons/md";

export const getTechIcon = (techName: string) => {
  const normalized = techName.toLowerCase();

  // Frontend
  if (normalized.includes("react native"))
    return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("react")) return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("angular"))
    return { icon: FaAngular, color: "#DD0031" };
  if (normalized.includes("html")) return { icon: FaHtml5, color: "#E34F26" };
  if (normalized.includes("css")) return { icon: FaCss3Alt, color: "#1572B6" };
  if (normalized.includes("javascript"))
    return { icon: FaJs, color: "#F7DF1E" };
  if (normalized.includes("typescript"))
    return { icon: SiTypescript, color: "#3178C6" };
  if (normalized.includes("flutter"))
    return { icon: SiFlutter, color: "#02569B" };
  if (normalized.includes("ionic")) return { icon: SiIonic, color: "#3880FF" };
  if (normalized === "wcag 2.1" || normalized.includes("accessib"))
    return { icon: FaUniversalAccess, color: "#005A9C" };
  if (normalized.includes("axe"))
    return { icon: FaUniversalAccess, color: "#E86C19" };

  // Backend
  if (normalized.includes("node")) return { icon: FaNodeJs, color: "#339933" };
  if (normalized.includes("next"))
    return { icon: SiNextdotjs, color: "#ffffff" };
  if (normalized.includes("express"))
    return { icon: SiExpress, color: "#ffffff" };
  if (normalized.includes("joi"))
    return { icon: FaCheckCircle, color: "#f3f4f6" };
  if (normalized.includes("puppeteer"))
    return { icon: SiPuppeteer, color: "#40B5A4" };

  // Database
  if (normalized.includes("mongo"))
    return { icon: SiMongodb, color: "#47A248" };
  if (normalized.includes("redis")) return { icon: SiRedis, color: "#DC382D" };
  if (normalized.includes("influx"))
    return { icon: SiInfluxdb, color: "#22ADF6" };
  if (normalized.includes("sqlite") || normalized.includes("sql lite"))
    return { icon: SiSqlite, color: "#003B57" };
  if (normalized.includes("postgres"))
    return { icon: SiPostgresql, color: "#336791" };
  if (normalized.includes("mysql")) return { icon: SiMysql, color: "#4479A1" };

  // Firebase / Cloud
  if (normalized.includes("firebase"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("firestore"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("auth")) return { icon: FaLock, color: "#FFCA28" };
  if (normalized.includes("crashlytics"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("storage"))
    return { icon: MdStorage, color: "#FFCA28" };
  if (normalized.includes("realtime"))
    return { icon: MdCloud, color: "#FFCA28" };
  if (normalized.includes("messaging") || normalized.includes("notification"))
    return { icon: SiFirebase, color: "#FFCA28" };

  if (
    normalized.includes("aws") ||
    normalized.includes("ec2") ||
    normalized.includes("s3") ||
    normalized.includes("cloudfront")
  )
    return { icon: FaAws, color: "#FF9900" };
  if (normalized.includes("gitlab"))
    return { icon: FaGitlab, color: "#FC6D26" };
  if (normalized.includes("docker"))
    return { icon: FaDocker, color: "#2496ED" };
  if (normalized.includes("github actions"))
    return { icon: FaGithub, color: "#ffffff" };
  if (normalized.includes("git")) return { icon: FaGitAlt, color: "#F05032" };

  // State Management
  if (normalized.includes("redux") || normalized.includes("rtk"))
    return { icon: SiRedux, color: "#764ABC" };
  if (normalized.includes("context api"))
    return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("dva")) return { icon: FaReact, color: "#61DAFB" };

  // Inegrations / Realtime
  if (normalized.includes("socket"))
    return { icon: SiSocketdotio, color: "#ffffff" };
  if (normalized.includes("pusher"))
    return { icon: SiPusher, color: "#300D4F" };
  if (normalized.includes("shopify"))
    return { icon: SiShopify, color: "#7AB55C" };
  if (normalized.includes("clickup"))
    return { icon: SiClickup, color: "#7B68EE" };
  if (normalized.includes("agora")) return { icon: FaVideo, color: "#099DFD" };
  if (normalized.includes("rest api")) return { icon: MdWeb, color: "#ffffff" };

  // Payments
  if (normalized.includes("stripe"))
    return { icon: SiStripe, color: "#635BFF" };
  if (normalized.includes("razorpay"))
    return { icon: SiRazorpay, color: "#0C2F54" };
  if (normalized.includes("google in-app"))
    return { icon: FaGooglePlay, color: "#3DDC84" };
  if (normalized.includes("apple in-app"))
    return { icon: FaAppStore, color: "#007AFF" };
  if (normalized.includes("payment"))
    return { icon: MdPayment, color: "#4caf50" };
  if (normalized.includes("accept payments"))
    return { icon: MdPayment, color: "#4caf50" };

  // Testing & UI
  if (normalized.includes("jest")) return { icon: SiJest, color: "#C21325" };
  if (normalized.includes("storybook"))
    return { icon: SiStorybook, color: "#FF4785" };
  if (normalized.includes("mui")) return { icon: SiMui, color: "#007FFF" };
  if (normalized.includes("ant"))
    return { icon: SiAntdesign, color: "#0170FE" };
  if (normalized.includes("paper")) return { icon: FaReact, color: "#61DAFB" };

  // Tools
  if (normalized.includes("eslint"))
    return { icon: SiEslint, color: "#4B32C3" };
  if (normalized.includes("prettier"))
    return { icon: SiPrettier, color: "#F7B93E" };
  if (normalized.includes("chrome"))
    return { icon: FaChrome, color: "#4285F4" };
  if (normalized.includes("npm")) return { icon: SiNpm, color: "#CB3837" };
  if (normalized.includes("cakephp"))
    return { icon: SiCakephp, color: "#D33C43" };
  if (normalized.includes("i18n")) return { icon: SiI18Next, color: "#26A69A" };
  if (normalized.includes("vs code")) return { icon: VscVscode, color: "#007ACC" };
  if (normalized.includes("bluetooth"))
    return { icon: FaMobileAlt, color: "#0082FC" };

  // Fallback
  return { icon: FaCheckCircle, color: "#6b7280" }; // Default icon instead of null
};

export const getSocialIcon = (linkType: string, url: string = "") => {
  const normalizedKey = linkType.toLowerCase();
  const normalizedUrl = url.toLowerCase();

  // NPM Package
  if (
    normalizedKey.includes("npm") ||
    normalizedKey.includes("package") ||
    normalizedUrl.includes("npmjs.com")
  ) {
    return { icon: SiNpm, color: "#CB3837", defaultLabel: "NPM Package" };
  }

  // VS Code Extension / Marketplace
  if (
    normalizedKey.includes("vscode") ||
    normalizedKey.includes("marketplace") ||
    normalizedUrl.includes("marketplace.visualstudio.com")
  ) {
    return { icon: VscVscode, color: "#007ACC", defaultLabel: "VS Code Extension" };
  }

  // Chrome Web Store / Chrome Extension
  if (
    normalizedKey.includes("chrome") ||
    normalizedUrl.includes("chromewebstore.google.com") ||
    normalizedUrl.includes("chrome.google.com")
  ) {
    return { icon: FaChrome, color: "#4285F4", defaultLabel: "Chrome Web Store" };
  }

  // Google Play Store / Android App
  if (
    normalizedKey.includes("playstore") ||
    normalizedKey.includes("play store") ||
    normalizedKey.includes("android") ||
    normalizedUrl.includes("play.google.com")
  ) {
    return { icon: FaGooglePlay, color: "#3DDC84", defaultLabel: "Play Store" };
  }

  // Apple App Store / iOS App
  if (
    normalizedKey.includes("appstore") ||
    normalizedKey.includes("app store") ||
    normalizedKey.includes("ios") ||
    normalizedKey.includes("apple") ||
    normalizedUrl.includes("apps.apple.com")
  ) {
    return { icon: FaAppStore, color: "#0D96F6", defaultLabel: "App Store" };
  }

  // GitHub Repository
  if (
    normalizedKey.includes("github") ||
    normalizedKey.includes("gitlink") ||
    normalizedUrl.includes("github.com")
  ) {
    return { icon: FaGithub, color: "#F0F6FC", defaultLabel: "GitHub" };
  }

  // LinkedIn
  if (normalizedKey.includes("linkedin") || normalizedUrl.includes("linkedin.com")) {
    return { icon: FaLinkedin, color: "#0077B5", defaultLabel: "LinkedIn" };
  }

  // Email
  if (normalizedKey.includes("email") || normalizedUrl.startsWith("mailto:")) {
    return { icon: MdEmail, color: "#EA4335", defaultLabel: "Email" };
  }

  // Live Website / Web App
  if (
    normalizedKey.includes("web") ||
    normalizedKey.includes("site") ||
    normalizedKey.includes("demo") ||
    normalizedKey.includes("url")
  ) {
    return { icon: FiGlobe, color: "#38BDF8", defaultLabel: "Live Web" };
  }

  return { icon: FiGlobe, color: "#38BDF8", defaultLabel: "Link" };
};
