 Let's say, you created your first server, but what's next?

 ## Managing your server 
After creating your server you should move/copy your project's files to it. 
```bash 
:~# xmanage server copy-files myServer myIndex.js myFolder ... 
```
To make sure your files are in your server, look into server's directory

```bash 
:~# xmanage server files myServer

myIndex.js myFolder
```
Perfect! We can start our server!
```bash
:~# xmanage server start myServer
```

## Checking server's status

Did it start? It didn't fail? How do we know? Let's check our server

```bash
:~# xmanage server status myServer
```

## Making backups

So, the server is working and everything is alright, what can we do? Let's make our backup

```bash
:~# xmanage server create-backup myServer
```

## Downloading backups
Our backup is stored in `/etc/xmanage/backups/[Server ID]`, so you need to go into this directory and download `.tar.gz` archive