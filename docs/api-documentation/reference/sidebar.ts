import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-documentation/reference/chimoney-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api-documentation/reference/create-multicurrency-wallet",
          label: "Create a multicurrency wallet account for a user or a subaccount.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-documentation/reference/transfer-funds-from-multicurrency-wallets-to-other-wallets-an-email-or-phone-number",
          label: "Transfer funds from multicurrency wallets to other wallets,an email or phone number.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
