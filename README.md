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