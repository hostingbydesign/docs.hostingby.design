module.exports = {
  docs: [
        {
          type: 'doc',
          id: 'home',
	},
        {
          type: 'category',
          label: 'App Range',
          items: [
        {
          "Getting Started": [
            'getting-started/how-do-i-connect',
            'getting-started/dashboard',
            'getting-started/box-basics',
          ],
          Applications: [
            "applications/application-basics",
            "applications/rtorrent",
            "applications/deluge",
            "applications/autodl",
            "applications/medusa",
            "applications/sonarr",
            "applications/radarr",
            "applications/lidarr",
            "applications/bazarr",
            "applications/jackett",
            "applications/ombi",
            "applications/plex",
            "applications/tautulli",
            "applications/emby",
            "applications/btsync",
            "applications/nzbget",
            "applications/sabnzbd",
            "applications/wireguard",
            "applications/plex-tunnel"
          ],
          Guides: [
            "guides/d2r",
            "guides/flexget",
            "guides/jdownloader",
            "guides/systemd"
          ],
        },
      ],
    },
  ],
};
