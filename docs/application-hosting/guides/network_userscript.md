---
id: network_userscript
title: Network consumption helper script
sidebar_label: Network helper
---

## Introduction

There is a "Network Info" block in your dashboard. It shows how much bandwidth you consumed and how much do you have in total. But haven't you even wanted more? 
If you're like me, you like to know how you're currently doing in terms of even distribution of your resources (I doubt that you'd like to be caught off guard a week before your month ends with only a handful of Gbs of bandwidth left). 

For that purpose, you can use [this](https://github.com/toomanynights/seedbox_netused) user script.

## What it gives?

![enter image description here](https://i.imgur.com/sIkzSsr.png)
### Daily limit
This is how much data you can afford to transfer daily. If you stay within this limit, then by the end of your billing month you'll spend just as much traffic as you're given by your plan.

### Threshold
How much data you're "supposed" to have spent by this very moment. It should be around "Used" number if you're doing well.

### Recommended upload speed
If you set your summarized upload speed in all your torrent clients to this number, you will never go above the limit - even if you have enough torrents you're seeding that you will have a steady 24/7 upload flow. It has a 10% allowance (meaning that this number is 10% more than an absolute minimum would be).

For example: current billing period is 30 days, and total month limit is 10000 Gb or 10000000000 Kb, so (10000000000 / 30 / 24 / 60 / 60) = 3858 Kb/s - uploading with this speed 24/7, you'll reach 10Tb by the end of the period exactly. However, uploading this steadily is not typical - sometimes there will just be no one wanting to download torrents from you, so 10% allowance is added, making recommended speed in this case equal **4243Kb**.

### Summary
It tells you in just a couple of words how you are doing at the moment. To make this evaluation, the script compares your current "Used" value with "Threshold"; if you are a day behind or in front of a threshold, it will show "Fine". If more than a day behind, it will offer to increase upload speed; if more than a day in front, it will suggest to lower your upload speed.

For example: your recommended daily consumption is 300Gb. Today is the second day of a billing period; by the end of today your threshold is 600Gb. If you stay between 300Gb and 900Gb, the script will consider you doing fine.

## How to install?
1. Get [TamperMonkey](https://www.tampermonkey.net/).
2. On the script's [GitHub page](https://github.com/toomanynights/seedbox_netused/blob/master/Seedbox%20dashboard%20improvement.user.js) click "Raw".
3. Choose "Install".
4. On TamperMonkey Dashboard page, click on "Seedbox dashboard improvement" title.
5. On top of the script, you have 4 variables to set:
**cutoffDay** (mandatory) - provide your billing day (number of a day of month when you're billed for your seedbox). Make sure to change it to your own, or it will not work properly.
**speedAllowance** - affects "Recommended speed" (see the appropriate section above); this is how much extra speed allowed on top of a pure 100% load calculation. Default: 0.1 (10%)
**usedMinAllowance** - affects "Summary": how many days do you need to have in reserve so the script would recommend to increase upload speed. Here, bigger number means more strict recommendation. If your recommended daily consumption is 300Gb, and you put a number **3** here, the script will not recommend to increase your upload speed until you are 900Gb behind the threshold.
**usedMinAllowance** - affects "Summary": how many days do you need to lack so the script would recommend to decreaseupload speed. Here, bigger number means more relaxed recommendation. If your recommended daily consumption is 300Gb, and you put a number **3** here, the script will not recommend to decrease your upload speed until you are 900Gb in front of the threshold.
