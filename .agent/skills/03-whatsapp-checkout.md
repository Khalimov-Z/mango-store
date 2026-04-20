# Skill: WhatsApp Checkout Integration

**Purpose**: Implements the final conversion step: redirecting buyers to WhatsApp with a prefilled order message.

## WhatsApp URL Construction
1. Use the official WhatsApp API format: `https://wa.me/{phone_number}?text={encoded_message}`
2. **Phone Number**: The store number is `+79990001234` (Mock placeholder until overwritten). Ensure the plus sign is stripped in the URL: `79990001234`.
3. **Message Template**: 
   The exact text passed to the `text` parameter should read like this before encoding:
   *"Здравствуйте! Хочу заказать мебель: [Название товара]. Цена: [Цена] руб. Характеристики: [Габариты]. Актуально ли в наличии?"*
4. **Encoding**: The message MUST be URL-encoded using Javascript's `encodeURIComponent()` to ensure spaces and special characters are handled by iOS/Android properly.
