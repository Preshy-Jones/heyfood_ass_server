export const successResponse = (message: string, data: any) => {
  return {
    status: "success",
    message,
    data,
  };
};

export function capitalizeString(s: string) {
  if (typeof s !== "string") return "";
  s = s.toLowerCase();
  return s
    .split(" ")
    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
