![logo](https://camo.githubusercontent.com/291e31ecd9edade7b33be72a4a8b8384ce55c086ca16ea31b925cf16e276d1ea/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313132393736393830393033393630393936322f313231313637353936323930333632353738382f556e7469746c656432365f32303234303232363135303733322e706e673f65783d36356566313032642669733d363564633962326426686d3d6662346130313636356330363331633231336534396437353938333964316333643239353231353031663764303431386665663062333231313161663730656226)


# XManage
Multi-functional systemd wrapper written in pure bash.

## Features
- CPU limitations
- RAM limitations
- SWAP limitations
- Disk limitations
- Allowed network ports
- Allowed directories and files
- All features of systemd configuration
- Backups

## Requirements
- GNU/Linux
- jq
- awk
- grep
- tput
- systemd 
- coreutils
- mkdir 
- bash


## Installation

Firstly, clone GIT repository with the binary
```bash
git clone https://github.com/Tirito6626/xmanage.git
```
Make the binary executable
```bash
chmod +x xmanage/xmanage
```
Run the binary
```bash
./xmanage/xmanage
```
Done! The command will return all available commands
If you want to run xmanage with only one command, copy the binary into /usr/bin/ folder
```bash
cp xmanage/xmanage /usr/bin/
```
Check if it's working
```bash
xmanage
```

## Intialization

So, you installed xmanage and proved it's working. But what's next?

To create server, run this:
```bash
xmanage server create
```
It will ask you for server's information, RAM, CPU and etc. XManage will create all required directories on the first run

## So, you are ready!

Check `xmanage help` to get all commands and how to manage your server
