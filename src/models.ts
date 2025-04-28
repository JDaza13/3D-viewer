import { SelectorOption } from "./components/Selector";

export const MODELS_AS_OPTIONS = [
  { label: "Car", value: "/car.glb" },
  { label: "Battery", value: "/car_battery.glb" },
  { label: "Spaceship", value: "/spaceship.glb" },
  { label: "Sword", value: "/diamond_sword.glb" },
  { label: "Plasma Rifle", value: "/plasma_rifle.glb" },
].toSorted((a, b) => a.label.localeCompare(b.label)) satisfies SelectorOption[];
