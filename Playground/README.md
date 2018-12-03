# Playground

"Learning-Ethereum"에서의 테스트 환경이다.
Vagrantfile로 VM을 관리한다.

Host OS : MacOS
Virtual Machine OS : Ubuntu 18.04

[Download Virtualbox](https://www.virtualbox.org/wiki/Downloads)

[Download Vagrant](https://www.vagrantup.com/downloads.html)

<!-- [Download Python 2.7.x](https://www.python.org/downloads/mac-osx/) -->

## Vagrant CLI

```
$ vagrant up
Bringing machine 'playground' up with 'virtualbox' provider...
==> playground: Clearing any previously set forwarded ports...
==> playground: Clearing any previously set network interfaces...
==> playground: Preparing network interfaces based on configuration...
    playground: Adapter 1: nat
    playground: Adapter 2: hostonly
==> playground: Forwarding ports...
    playground: 22 (guest) => 2222 (host) (adapter 1)
==> playground: Running 'pre-boot' VM customizations...
==> playground: Booting VM...
==> playground: Waiting for machine to boot. This may take a few minutes...
    playground: SSH address: 127.0.0.1:2222
    playground: SSH username: vagrant
    playground: SSH auth method: private key
    playground: Warning: Connection reset. Retrying...
    playground: Warning: Remote connection disconnect. Retrying...
    playground: Warning: Connection reset. Retrying...
    playground: Warning: Remote connection disconnect. Retrying...
    playground: Warning: Connection reset. Retrying...
    playground: Warning: Remote connection disconnect. Retrying...
==> playground: Machine booted and ready!
==> playground: Checking for guest additions in VM...
==> playground: Configuring and enabling network interfaces...
==> playground: Mounting shared folders...
    playground: /vagrant => /Users/computer/dev/Learning-Ethereum/Playground
==> playground: Machine already provisioned. Run `vagrant provision` or use the `--provision`
==> playground: flag to force provisioning. Provisioners marked to run always will still run.
```


```
$ vagrant halt
==> playground: This machine used to live in /Users/computer/dev/Learning-Ethereum/Setup but it's now at /Users/computer/dev/Learning-Ethereum/Playground.
==> playground: Depending on your current provider you may need to change the name of
==> playground: the machine to run it as a different machine.
==> playground: Attempting graceful shutdown of VM...
```


```
$ vagrant status
Current machine states:

playground                running (virtualbox)

The VM is running. To stop this VM, you can run `vagrant halt` to
shut it down forcefully, or you can run `vagrant suspend` to simply
suspend the virtual machine. In either case, to restart it again,
simply run `vagrant up`.
```


## Install Ethereum

[Reference]
https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu

```
vagrant@ubuntu-bionic:~$ sudo apt-get install software-properties-common
vagrant@ubuntu-bionic:~$ sudo add-apt-repository -y ppa:ethereum/ethereum
vagrant@ubuntu-bionic:~$ sudo apt-get update
vagrant@ubuntu-bionic:~$ sudo apt-get install ethereum -y
```

