import type {
  ProcessIconName,
  ServiceIconName,
  SocialLink,
  StatIconName,
} from "@/components/home/types";

type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M4 10h12" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

export function SparkleIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
    >
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" />
    </svg>
  );
}

export function MailIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M5.8 4h3.4l1.2 4-2.2 1.8a14.1 14.1 0 0 0 6 6l1.8-2.2 4 1.2V18a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1.8-2Z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 6.8v10.4L17 12 8 6.8Z" />
    </svg>
  );
}

export function PlusIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ServiceIcon({ icon }: { icon: ServiceIconName }) {
  if (icon === "clapper") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
        <path d="m4 8 3.2-4h3.8L7.8 8" />
        <path d="m11 8 3.2-4H18l-3.2 4" />
      </svg>
    );
  }

  if (icon === "play") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    );
  }

  if (icon === "megaphone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M3 11h4l8-4v10l-8-4H3v-2Z" />
        <path d="M15 9.5V14" />
        <path d="M18 8a4 4 0 0 1 0 8" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 5v14M16 5v14M3 12h18" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bd9953]/55 bg-[#bd9953]/10 text-[#bd9953]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-3.5 w-3.5"
      >
        <path d="m4 10 3.2 3.2L16 4.7" />
      </svg>
    </span>
  );
}

export function StatIcon({ icon }: { icon: StatIconName }) {
  if (icon === "globe") {
    return <GlobeIcon className="h-4 w-4" />;
  }

  if (icon === "badge") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle cx="12" cy="10" r="6" />
        <path d="m9.5 16 2.5 5 2.5-5" />
      </svg>
    );
  }

  if (icon === "spark") {
    return <SparkleIcon className="h-4 w-4" />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <path d="m4 8 3.2-4h3.8L7.8 8" />
      <path d="m11 8 3.2-4H18l-3.2 4" />
    </svg>
  );
}

export function ProcessIcon({ icon }: { icon: ProcessIconName }) {
  if (icon === "idea") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M9 18h6M10 21h4M8 9a4 4 0 1 1 8 0c0 1.5-.8 2.5-1.7 3.4-.7.7-1.3 1.3-1.3 2.1h-2c0-.8-.6-1.4-1.3-2.1C8.8 11.5 8 10.5 8 9Z" />
      </svg>
    );
  }

  if (icon === "script") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    );
  }

  if (icon === "camera") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="7" width="12" height="10" rx="2" />
        <path d="m15 10 6-3v10l-6-3v-4Z" />
      </svg>
    );
  }

  if (icon === "edit") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M4 20h4l10-10-4-4L4 16v4Z" />
        <path d="m12 6 4 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: SocialLink["name"];
  className?: string;
}) {
  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
      >
        <path d="M14.1 8.2H16V5h-2.4c-3 0-4.5 1.8-4.5 4.4v2H6.8v3.4h2.3V22h3.7v-7.2h2.8l.5-3.4h-3.3V9.8c0-1 .4-1.6 1.3-1.6Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M7.2 10v7M7.2 7.2v.1M11 17v-7M11 13.1c0-1.9 1.2-3.2 3-3.2 1.9 0 3 1.2 3 3.6V17M14 13.5V17" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </svg>
  );
}
