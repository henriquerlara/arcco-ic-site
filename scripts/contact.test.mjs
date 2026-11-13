import test from "node:test";
import assert from "node:assert/strict";
import { validateWhatsAppUrl, contact } from "../src/config/contact.js";

test("unconfigured contact does not invent a channel or a navigation loop", () => {
  assert.equal(contact.href, null);
  assert.equal(contact.label, "Conversar com a ARCCO");
  assert.equal(contact.external, false);
});

test("only HTTPS links to supported WhatsApp endpoints are accepted", () => {
  for (const value of [
    undefined,
    "",
    "  ",
    "javascript:alert(1)",
    "http://wa.me/5511987654321",
    "https://wa.me.example.com/5511987654321",
    "https://example.com",
    "https://api.whatsapp.com/",
    "https://wa.me/550000000000",
    "https://wa.me/123",
    "https://user:secret@wa.me/5511987654321",
    "https://wa.me:8443/5511987654321",
  ]) {
    assert.equal(validateWhatsAppUrl(value), null, `Should reject ${value}`);
  }
  for (const value of [
    "https://wa.me/5511987654321",
    "https://api.whatsapp.com/send?phone=5511987654321&text=Ol%C3%A1",
  ]) {
    assert.equal(validateWhatsAppUrl(value), value);
  }
});
