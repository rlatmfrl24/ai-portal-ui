export const playgroundTypes = [
  {
    id: "shipping-instruction",
    name: "Shipping Instructions",
    api: {
      endpoint: "/api/ai/ocr/custom/shipping-instruction",
      requestType: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{apiToken}}",
      },
    },
  },
  {
    id: "invoice",
    name: "Invoices",
    api: {
      endpoint: "/api/ai/ocr/custom/invoice",
      requestType: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{apiToken}}",
      },
    },
  },
  {
    id: "msds",
    name: "Material Safety Data Sheet",
    api: {
      endpoint: "/api/ai/ocr/custom/msds",
      requestType: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{apiToken}}",
      },
      body: {
        file: "{{file}}",
      },
    },
  },
  {
    id: "mnr",
    name: "M & R",
    api: {
      endpoint: "/api/ai/ocr/custom/mnr",
      requestType: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{apiToken}}",
      },
      body: {
        file: "{{file}}",
      },
    },
  },
];
