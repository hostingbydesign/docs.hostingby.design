#!/bin/bash

# This script required the update-tracker.py from https://raw.githubusercontent.com/s0undt3ch/Deluge/master/deluge/ui/console/commands/update-tracker.py

# Change the below output location to any folder owned by your user for which you have write permissions
user=$(whoami)
mkdir -p /home/$user/announce/
OUTPUT="/home/$user/announce/"

torrentid=$1
torrentname=$2
torrentpath=$3

# Update the ip & port below according to your configuration
ip=127.0.0.1
port=$(grep '"daemon_port": [0-9]*' ~/.config/deluge/core.conf | awk -F ': ' '{print $2}' | awk -F ',' '{print $1}')

x=1
while [ $x -le 60 ]; do
    sleep 7
    echo "Running $x times" >> "${OUTPUT}/script.log"
    echo "TorrentID: $torrentid" >> "${OUTPUT}/script.log"
    info=$(deluge-console "connect '$ip':'$port'; info" $1)
    line=$(echo "$info" | grep "Tracker status")
    # echo $line >> "${OUTPUT}/script.log"
    case "$line" in
        *unregistered* | *Sent* | *End*of*file* | *Bad*Gateway* | *Error*)
            #      deluge-console "connect '$ip':'$port'; pause '$torrentid'; resume '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
            deluge-console "connect '$ip':'$port'; update-tracker '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
            #       deluge-console -p $port "reannounce '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
            ;;
        *)
            seeds=$(echo "$info" | grep "Seeds")
            total_seeds=$(echo $seeds | awk '{print $3}' | sed -r 's/\(|\)//g')
            connected_seeds=$(echo $seeds | awk '{print $2}')
            echo "Seeds: $connected_seeds ($total_seeds)" >> "${OUTPUT}/script.log" 2>&1
            if (($connected_seeds > 0)) || (($total_seeds > 0)); then
                y=1
                while [ $y -le 2 ]; do
                    sleep 30
                    echo "Extra updates running $y times" >> "${OUTPUT}/extra.log" 2>&1
                    deluge-console "connect '$ip':'$port'; update-tracker '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
                    y=$(($y + 1))
                done
                echo "Found working torrent: $torrentname $torrentpath $torrentid" >> "${OUTPUT}/script.log" 2>&1
                exit 1
            else
                #        deluge-console "connect '$ip':'$port'; pause '$torrentid'; resume '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
                deluge-console "connect '$ip':'$port'; update-tracker '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
                #       deluge-console -p $port "reannounce '$torrentid'" >> "${OUTPUT}/deluge.output" 2>&1
            fi
            ;;
    esac
    x=$(($x + 1))
done
