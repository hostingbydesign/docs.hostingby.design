module.exports = {
  docs: [
    {
      type: "doc",
      id: "home",
    },
    {
      type: "category",
      label: "Pre-Sales",
      items: [
        "pre-sales/payment-methods",
        "pre-sales/notes-cc",
        "pre-sales/refund",
        "pre-sales/switching",
        "pre-sales/dedicated-ip",
        "pre-sales/data-retention-policy",
        "pre-sales/support-scope",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/introduction-c",
        "getting-started/login-details",
      ],
    },
    {
      type: "category",
      label: "Application hosting",
      collapsed: false,
      items: [
        {
          "Getting Started": [
            "application-hosting/getting-started/how-do-i-connect",
            "application-hosting/getting-started/dashboard",
            "application-hosting/getting-started/box-basics",
            "application-hosting/getting-started/abuse",
            "application-hosting/getting-started/bandwith",
            "application-hosting/getting-started/ftp-bouncer",
          ],
          Applications: [
            "application-hosting/applications/application-basics",
            "application-hosting/applications/rtorrent",
            "application-hosting/applications/deluge",
            "application-hosting/applications/qbittorrent",
            "application-hosting/applications/autodl",
            "application-hosting/applications/medusa",
            "application-hosting/applications/sonarr",
            "application-hosting/applications/radarr",
            "application-hosting/applications/lidarr",
            "application-hosting/applications/bazarr",
            "application-hosting/applications/jackett",
            "application-hosting/applications/ombi",
            "application-hosting/applications/plex",
            "application-hosting/applications/tautulli",
            "application-hosting/applications/emby",
            "application-hosting/applications/jellyfin",
            "application-hosting/applications/btsync",
            "application-hosting/applications/nzbget",
            "application-hosting/applications/sabnzbd",
            "application-hosting/applications/wireguard",
            "application-hosting/applications/plex-tunnel",
          ],
          "Community Applications": [
            "application-hosting/community-applications/filebrowser",
            "application-hosting/community-applications/lounge",
            "application-hosting/community-applications/overseerr",
          ],
          Guides: [
            "application-hosting/guides/d2r",
            "application-hosting/guides/flexget",
            "application-hosting/guides/kodi",
            "application-hosting/guides/mktorrent",
            "application-hosting/guides/systemd",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Dedicated servers",
      collapsed: false,
      items: [
        {
          "Getting Started": [
            "dedicated-servers/getting-started/how-do-i-connect",
            "dedicated-servers/getting-started/abuse",
            "dedicated-servers/getting-started/bandwidth",
            "dedicated-servers/getting-started/ftp-bouncer",
          ],
        },
      ],
    },
  ],
};
