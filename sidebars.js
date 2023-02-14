module.exports = {
  docs: [
        {
          type: 'doc',
          id: 'home',
	      },
        {
          type: 'category',
          label: 'Pre-Sales',
          items: [
            'pre-sales/payment-methods',
            'pre-sales/notes-cc',
            'pre-sales/refund',
            'pre-sales/switching',
            'pre-sales/dedicated-ip',
            'pre-sales/data-retention-policy',
            'pre-sales/support-scope'
          ],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'getting-started/introduction-c',
            'getting-started/login-details',
          ],
        },
        {
          type: 'category',
          label: 'App Slots',
          items: [
            {
              "Getting Started": [
                'appslots/getting-started/how-do-i-connect',
                'appslots/getting-started/dashboard',
                'appslots/getting-started/box-basics',
                'appslots/getting-started/abuse',
                'appslots/getting-started/bandwith',
                'appslots/getting-started/ftp-bouncer'
              ],
              Applications: [
                "appslots/applications/application-basics",
                "appslots/applications/rtorrent",
                "appslots/applications/deluge",
                "appslots/applications/qbittorrent",
                "appslots/applications/autodl",
                "appslots/applications/medusa",
                "appslots/applications/sonarr",
                "appslots/applications/radarr",
                "appslots/applications/lidarr",
                "appslots/applications/bazarr",
                "appslots/applications/jackett",
                "appslots/applications/ombi",
                "appslots/applications/plex",
                "appslots/applications/tautulli",
                "appslots/applications/emby",
                "appslots/applications/jellyfin",
                "appslots/applications/btsync",
                "appslots/applications/nzbget",
                "appslots/applications/sabnzbd",
                "appslots/applications/wireguard",
                "appslots/applications/plex-tunnel"
                ],
              "Community Applications": [
                "appslots/community-applications/filebrowser",
                "appslots/community-applications/lounge",
                "appslots/community-applications/overseerr",
              ],
              Guides: [
                "appslots/guides/d2r",
                "appslots/guides/flexget",
                "appslots/guides/kodi",
                "appslots/guides/mktorrent",
                "appslots/guides/systemd"
              ],
            },
          ],
        },
      ],
    };
