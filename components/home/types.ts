export type ServiceIconName = "clapper" | "play" | "megaphone" | "film";

export type StatIconName = "clapper" | "globe" | "badge" | "spark";

export type ProcessIconName =
  | "idea"
  | "script"
  | "camera"
  | "edit"
  | "publish";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export type Stat = {
  value: string;
  label: string;
  icon: StatIconName;
};

export type Film = {
  title: string;
  meta: string;
  gradient: string;
};

export type ProcessStep = {
  label: string;
  icon: ProcessIconName;
};

export type SocialLink = {
  name: "Instagram" | "Facebook" | "LinkedIn";
  href: string;
};
