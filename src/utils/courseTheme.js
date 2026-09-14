import { getCourseTheme } from "../data/platform.js";

/** CSS custom properties for a course colour theme. */
export function courseThemeStyle(color) {
  if (!color) return undefined;
  return { "--course-color": color };
}

export function courseThemeClass(color) {
  return color ? "course-themed" : "";
}

export function courseThemeProps(courseId) {
  const { color } = getCourseTheme(courseId);
  return {
    className: courseThemeClass(color),
    style: courseThemeStyle(color),
  };
}

export function resolveCourseIdFromPath(pathname) {
  const juzMatch = pathname.match(/^\/juz\/(\d+)/);
  if (juzMatch) return `juz-${juzMatch[1]}`;
  if (pathname.startsWith("/fiqh")) return "fiqh";
  if (pathname.startsWith("/ajrumiyyah")) return "ajrumiyyah";
  if (pathname.startsWith("/tarbiyah")) return "tarbiyah";
  return null;
}
