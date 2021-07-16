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
                'appslots/getting-started/bandwith'
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
                "appslots/community-applications/requestrr"
              ],
              Guides: [
                "appslots/guides/d2r",
                "appslots/guides/flexget",
                "appslots/guides/jdownloader",
                "appslots/guides/mktorrent",
                "appslots/guides/systemd"
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Shared/Storage slots',
          items: [
            {
              type: 'category',
              label: 'Administration',
                items: [
                'shared-storage/administration/backup',
                'shared-storage/administration/change-password',
                'shared-storage/administration/available-space',
                'shared-storage/administration/location',
                'shared-storage/administration/public-trackers',
                'shared-storage/administration/renewal',
                'shared-storage/administration/restart-seedbox',
                'shared-storage/administration/unmetered-bw',
                'shared-storage/administration/upgrade-seedbox'
              ],
            },
              {
              type: 'category',
              label: 'Applications',
                items: [
                'shared-storage/applications/using-webinterface',
                'shared-storage/applications/connect-openvpn',
                'shared-storage/applications/connect-sonarr',
                'shared-storage/applications/rutorrent-plugins',
                'shared-storage/applications/kodi',
                'shared-storage/applications/transdroid',
                'shared-storage/applications/remoteadder',
                'shared-storage/applications/torrentcontrol',
              ],
            },
            {
              type: 'category',
              label: 'File Access',
                items: [
                'shared-storage/file-access/connect-ftp',
                'shared-storage/file-access/mount-service',
                'shared-storage/file-access/bouncer',
                'shared-storage/file-access/fxp',
                'shared-storage/file-access/lftp',
                'shared-storage/file-access/resilio-sync'

              ],
            },
            {
              type: 'category',
              label: 'Troubleshooting',
                items: [
                'shared-storage/troubleshooting/multiple-torrents',
                'shared-storage/troubleshooting/ratio',
                'shared-storage/troubleshooting/reroute',
                'shared-storage/troubleshooting/slow-ftp',
                'shared-storage/troubleshooting/webinterface'
              ],
            }
          ],
        },
      ],
    };
