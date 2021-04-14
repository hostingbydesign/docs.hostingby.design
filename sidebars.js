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
            'pre-sales/premium-traffic',
            'pre-sales/dedicated-ip'
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
          label: 'Shared/Storage slots',
          items: [
            'shared-storage/connect-ftp',
            'shared-storage/disk-upgrade',
            'shared-storage/webinterface',
            'shared-storage/slow-ftp',
            'shared-storage/rutorrent-plugins',
            'shared-storage/renewal',
            'shared-storage/ratio',
            'shared-storage/public-trackers',
            'shared-storage/multiple-torrents',
            'shared-storage/location',
            'shared-storage/fxp',
            'shared-storage/backup'
          ],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'getting-started/introduction-c',
            'getting-started/login-details',
            'getting-started/using-webinterface',
          ],
        },
        {
          type: 'category',
          label: 'How to...',
          items: [
            'how-to/bouncer',
            'how-to/available-space',
            'how-to/change-password',
            'how-to/connect-openvpn',
            'how-to/connect-sonarr',
            'how-to/kodi',
            'how-to/lftp',
            'how-to/mount-service',
            'how-to/remoteadder',
            'how-to/resilio-sync',
            'how-to/restart-seedbox',
            'how-to/torrentcontrol',
            'how-to/transdroid',
            'how-to/upgrade-seedbox'
          ],
        }
      ],
    };
