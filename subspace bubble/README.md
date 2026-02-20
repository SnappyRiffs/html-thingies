# Subspace Bubble Calculator

This mini web app is based on the **"Subspace Bubble"** Minecraft advancement.

In Minecraft, The **"Subspace Bubble"** advancement in Minecraft is earned by traveling 7,000 blocks in the Overworld by using the Nether (700*8*sqrt(2)) where 700 is an arbitrary number picked out by [The Minecraft Wiki](https://minecraft.wiki/w/Tutorial:Advancement_guide/Nether_tab#Subspace_Bubble), 8 is the conversion (see next sentence) and sqrt(2) is because it makes a square on the x and z axis (e.g. from 0,0 to 700,700 is 700*sqrt(2)-normal math). Since **1 block in the Nether equals 8 blocks in the Overworld**, this tool helps convert coordinates quickly.

## What this tool does

- Accepts input coordinates.
- Applies an offset calculation used by this project.
- Displays the resulting coordinate pair.

## Why it exists

When planning portal links for the **"Subspace Bubble"** advancement, players often need fast coordinate math. This page provides a quick in-browser helper so you can test values without opening a separate calculator.

## Files

- `coordinate.html` — UI and page layout.
- `coordinate.js` — coordinate conversion logic.
