module.exports = {
  docs: [
        {
          type: 'doc',
          id: 'home',
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
                'appslots/getting-started/bandwith'
              ],
              Applications: [
                "appslots/applications/application-basics",
                "appslots/applications/rtorrent",
                "appslots/applications/deluge",
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
                "appslots/applications/btsync",
                "appslots/applications/nzbget",
                "appslots/applications/sabnzbd",
                "appslots/applications/wireguard",
                "appslots/applications/plex-tunnel"
              ],
              Guides: [
                "appslots/guides/d2r",
                "appslots/guides/flexget",
                "appslots/guides/jdownloader",
                "appslots/guides/systemd"
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: [
            'faq/disk-upgrade',
            'faq/webinterface',
            'faq/slow-ftp',
            'faq/rutorrent-plugins',
            'faq/renewal',
            'faq/ratio',
            'faq/public-trackers',
            'faq/multiple-torrents',
            'faq/location',
            'faq/fxp',
            'faq/backup'
          ],
        },
        {
          type: 'category',
          label: 'Pre-Sales',
          items: [
            'pre-sales/payment-methods',
            'pre-sales/notes-cc',
            'pre-sales/refund',
            'pre-sales/switching',
            'pre-sales/premium-traffic',
            'pre-sales/dedicated-ip'
          ],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'getting-started/connect-ftp',
            'getting-started/introduction-c',
            'getting-started/login-details',
            'getting-started/using-webinterface',
          ],
        },
      ],
    };
