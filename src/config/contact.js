export function validateWhatsAppUrl(value) {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password || url.port)
      return null;
    const phone =
      url.hostname === "wa.me"
        ? url.pathname.slice(1)
        : url.hostname === "api.whatsapp.com" && url.pathname === "/send"
          ? url.searchParams.get("phone")
          : null;
    if (
      !phone ||
      !/^[1-9]\d{9,14}$/.test(phone) ||
      /0{7}|(\d)\1{7}/.test(phone)
    )
      return null;
    return url.href;
  } catch {
    return null;
  }
}

const whatsappUrl = validateWhatsAppUrl(import.meta.env?.VITE_WHATSAPP_URL);

export const contact = Object.freeze({
  href: whatsappUrl,
  label: "Conversar com a ARCCO",
  external: Boolean(whatsappUrl),
});
