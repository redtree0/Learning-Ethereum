
# Solc - Compile from source

[Reference]

https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial

https://github.com/ethereum/solc-bin

https://developer.mozilla.org/ko/docs/Mozilla/Projects/Emscripten

quick guide
```
git clone https://github.com/ethereum/cpp-ethereum.git
mkdir cpp-ethereum/build
cd cpp-ethereum/build
cmake -DJSONRPC=OFF -DMINER=OFF -DETHKEY=OFF -DSERPENT=OFF -DGUI=OFF -DTESTS=OFF -DJSCONSOLE=OFF ..
make -j4 
make install
which solc
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum$ ls
CMakeLists.txt    appveyor.yml          libdevcrypto    rlp
CODING_STYLE.md   circle.yml            libethashseal   sanitizer-blacklist.txt
CONTRIBUTING.md   cmake                 libethcore      scripts
LICENSE           codecov.yml           libethereum     snapcraft.yaml
README.md         doc                   libevm          test
aleth             evmc                  libp2p          testeth.dockerfile
aleth-key         homebrew              libweb3jsonrpc  utils
aleth-vm          libaleth-interpreter  libwebthree
aleth.dockerfile  libdevcore            refilltests
vagrant@ubuntu-bionic:~/cpp-ethereum$ mkdir build
vagrant@ubuntu-bionic:~/cpp-ethereum$ cd build
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ cmake -DJSONRPC=OFF -DMINER=OFF -DETHKEY=OFF -DSERPENT=OFF -DGUI=OFF -DTESTS=OFF -DJSCONSOLE=OFF ..

Command 'cmake' not found, but can be installed with:

apt install cmake
Please ask your administrator.

vagrant@ubuntu-bionic:~/cpp-ethereum/build$ sudo apt-get install cmake -y
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  cmake-data libarchive13 libjsoncpp1 librhash0 libuv1
Suggested packages:
  cmake-doc ninja-build lrzip
The following NEW packages will be installed:
  cmake cmake-data libarchive13 libjsoncpp1 librhash0 libuv1
0 upgraded, 6 newly installed, 0 to remove and 121 not upgraded.
Need to get 4974 kB of archives.
After this operation, 25.4 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu bionic/main amd64 cmake-data all 3.10.2-1ubuntu2 [1331 kB]
Get:2 http://archive.ubuntu.com/ubuntu bionic-updates/main amd64 libarchive13 amd64 3.2.2-3.1ubuntu0.1 [289 kB]
Get:3 http://archive.ubuntu.com/ubuntu bionic/main amd64 libjsoncpp1 amd64 1.7.4-3 [73.6 kB]
Get:4 http://archive.ubuntu.com/ubuntu bionic/main amd64 librhash0 amd64 1.3.6-2 [78.1 kB]
Get:5 http://archive.ubuntu.com/ubuntu bionic/main amd64 libuv1 amd64 1.18.0-3 [64.4 kB]
Get:6 http://archive.ubuntu.com/ubuntu bionic/main amd64 cmake amd64 3.10.2-1ubuntu2 [3138 kB]
Fetched 4974 kB in 6s (867 kB/s)
Selecting previously unselected package cmake-data.
(Reading database ... 66197 files and directories currently installed.)
Preparing to unpack .../0-cmake-data_3.10.2-1ubuntu2_all.deb ...
Unpacking cmake-data (3.10.2-1ubuntu2) ...
Selecting previously unselected package libarchive13:amd64.
Preparing to unpack .../1-libarchive13_3.2.2-3.1ubuntu0.1_amd64.deb ...
Unpacking libarchive13:amd64 (3.2.2-3.1ubuntu0.1) ...
Selecting previously unselected package libjsoncpp1:amd64.
Preparing to unpack .../2-libjsoncpp1_1.7.4-3_amd64.deb ...
Unpacking libjsoncpp1:amd64 (1.7.4-3) ...
Selecting previously unselected package librhash0:amd64.
Preparing to unpack .../3-librhash0_1.3.6-2_amd64.deb ...
Unpacking librhash0:amd64 (1.3.6-2) ...
Selecting previously unselected package libuv1:amd64.
Preparing to unpack .../4-libuv1_1.18.0-3_amd64.deb ...
Unpacking libuv1:amd64 (1.18.0-3) ...
Selecting previously unselected package cmake.
Preparing to unpack .../5-cmake_3.10.2-1ubuntu2_amd64.deb ...
Unpacking cmake (3.10.2-1ubuntu2) ...
Setting up libarchive13:amd64 (3.2.2-3.1ubuntu0.1) ...
Setting up libuv1:amd64 (1.18.0-3) ...
Setting up cmake-data (3.10.2-1ubuntu2) ...
Setting up librhash0:amd64 (1.3.6-2) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for man-db (2.8.3-2) ...
Setting up libjsoncpp1:amd64 (1.7.4-3) ...
Setting up cmake (3.10.2-1ubuntu2) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
```


```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ git submodule update --init
Submodule 'cable' (https://github.com/ethereum/cable) registered for path '../cmake/cable'
Submodule 'evmc' (https://github.com/ethereum/evmc) registered for path '../evmc'
Submodule 'test/jsontests' (https://github.com/ethereum/tests.git) registered for path '../test/jsontests'
Cloning into '/home/vagrant/cpp-ethereum/cmake/cable'...
Cloning into '/home/vagrant/cpp-ethereum/evmc'...
Cloning into '/home/vagrant/cpp-ethereum/test/jsontests'...
Submodule path '../cmake/cable': checked out 'd4de52118b0947e22a2bc93ba9be148da82fc6c5'
Submodule path '../evmc': checked out '354ba6f540655649e081fb455e21998186bf5576'
Submodule path '../test/jsontests': checked out 'a69eb762fc5665814ac21cf091eff3bd0bf4ef27'
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ cmake -DJSONRPC=OFF -DMINER=OFF -DETHKEY=OFF -DSERPENT=OFF -DGUI=OFF -DTESTS=OFF -DJSCONSOLE=OFF ..
-- [cable ] Cable 0.2.12 initialized
-- [cable ] Build type: RelWithDebInfo
-- [hunter] Calculating Toolchain-SHA1
-- [hunter] Calculating Config-SHA1
-- [hunter] HUNTER_ROOT: /home/vagrant/.hunter
-- [hunter] [ Hunter-ID: c4cfcc0 | Toolchain-ID: af6c4e5 | Config-ID: daa4706 ]
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- [hunter] BOOST_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.65.1)
-- Boost version: 1.65.1
-- Found the following Boost libraries:
--   program_options
--   filesystem
--   system
--   thread
--   context
--   fiber
--   log
-- [hunter] JSONCPP_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.8.0)
-- [hunter] SNAPPY_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.1.6-p0)
-- [hunter] CRYPTOPP_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 5.6.5-p0)
-- [hunter] LIBJSON-RPC-CPP_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 0.7.0-p3)
-- [hunter] LIBSCRYPT_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.21-p1)
-- [hunter] ETHASH_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 0.3.0)

------------------------------------------------------------------------
-- Configuring aleth
------------------------------------------------------------------------
-- CMake 3.10.2 (/usr/bin/cmake)
-- CMAKE_BUILD_TYPE Build type                               RelWithDebInfo
-- TARGET_PLATFORM  Target platform                          Linux
-- BUILD_SHARED_LIBS                                         OFF
--------------------------------------------------------------- features
-- VMTRACE          VM execution tracing                     OFF
-- EVM_OPTIMIZE     Enable VM optimizations                  ON
-- FATDB            Full database exploring                  ON
-- DB               Database implementation                  LEVELDB
-- PARANOID         -                                        OFF
-- MINIUPNPC        -                                        OFF
------------------------------------------------------------- components
-- TESTS            Build tests                              OFF
-- TOOLS            Build tools                              ON
------------------------------------------------------------- tests
-- FASTCTEST        Run only test suites in ctest            OFF
-- TESTETH_ARGS     Testeth arguments in ctest:

------------------------------------------------------------------------

CMake Warning at evmc/cmake/cable/bootstrap.cmake:45 (message):
  [cable ] Cable 0.2.12 (version older than 0.2.14) initialized in the
  `aleth` parent project
Call Stack (most recent call first):
  evmc/CMakeLists.txt:16 (include)


-- [hunter] LEVELDB_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 1.20)
-- [hunter] ROCKSDB_ROOT: /home/vagrant/.hunter/_Base/c4cfcc0/af6c4e5/daa4706/Install (ver.: 5.14.2)
-- Configuring done
-- Generating done
-- Build files have been written to: /home/vagrant/cpp-ethereum/build
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ make -j4
Scanning dependencies of target mpir
Scanning dependencies of target secp256k1
Scanning dependencies of target instructions
Scanning dependencies of target aleth-buildinfo-git
[  0%] Creating directories for 'mpir'
[  1%] Creating directories for 'secp256k1'
[  1%] Building C object evmc/lib/instructions/CMakeFiles/instructions.dir/instruction_metrics.c.o
[  1%] Performing download step (download, verify and extract) for 'secp256k1'
[  2%] Performing download step (download, verify and extract) for 'mpir'
-- Downloading...
   dst='/home/vagrant/cpp-ethereum/build/deps/src/secp256k1-ac8ccf29.tar.gz'
   timeout='none'
-- Using src='https://github.com/chfast/secp256k1/archive/ac8ccf29b8c6b2b793bc734661ce43d1f952977a.tar.gz'
-- Downloading...
   dst='/home/vagrant/cpp-ethereum/build/deps/src/mpir-cmake.tar.gz'
   timeout='none'
-- Using src='https://github.com/chfast/mpir/archive/cmake.tar.gz'
[  3%] Building C object evmc/lib/instructions/CMakeFiles/instructions.dir/instruction_names.c.o
[  3%] Linking C static library libevmc-instructions.a
[  3%] Built target instructions
Scanning dependencies of target loader
[  4%] Building C object evmc/lib/loader/CMakeFiles/loader.dir/loader.c.o
[  4%] Linking C static library libevmc-loader.a
[  4%] Built target loader
[  4%] Built target aleth-buildinfo-git
[  5%] Updating aleth-buildinfo:
       Project Version:  1.5.0-alpha.6-63+commit.e9c2b9b9 (prerelease)
       System Name:      linux
       System Processor: x86_64
       Compiler ID:      gnu
       Compiler Version: 7.3.0
       Build Type:       relwithdebinfo
       Git Info:         1.5.0-alpha.6 63 e9c2b9b9055fbd1f878def6a8e123414235f95e9
       Timestamp:        2018-12-03T05:29:46
Scanning dependencies of target aleth-buildinfo
[  5%] Building C object CMakeFiles/aleth-buildinfo.dir/aleth/buildinfo.c.o
[  6%] Linking C static library aleth/libaleth-buildinfo.a
[  6%] Built target aleth-buildinfo
Scanning dependencies of target devcore
-- verifying file...
       file='/home/vagrant/cpp-ethereum/build/deps/src/secp256k1-ac8ccf29.tar.gz'
-- Downloading... done
-- extracting...
     src='/home/vagrant/cpp-ethereum/build/deps/src/secp256k1-ac8ccf29.tar.gz'
     dst='/home/vagrant/cpp-ethereum/build/deps/src/secp256k1'
-- extracting... [tar xfz]
-- extracting... [analysis]
-- extracting... [rename]
-- extracting... [clean up]
-- extracting... done
[  7%] No update step for 'secp256k1'
[  8%] Performing patch step for 'secp256k1'
[  8%] Performing configure step for 'secp256k1'
-- secp256k1 configure command succeeded.  See also /home/vagrant/cpp-ethereum/build/deps/src/secp256k1-stamp/secp256k1-configure-*.log
[  9%] No build step for 'secp256k1'
[ 10%] Performing install step for 'secp256k1'
[ 10%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Address.cpp.o
[ 11%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Base64.cpp.o
-- verifying file...
       file='/home/vagrant/cpp-ethereum/build/deps/src/mpir-cmake.tar.gz'
-- Downloading... done
-- extracting...
     src='/home/vagrant/cpp-ethereum/build/deps/src/mpir-cmake.tar.gz'
     dst='/home/vagrant/cpp-ethereum/build/deps/src/mpir'
-- extracting... [tar xfz]
-- extracting... [analysis]
-- extracting... [rename]
-- extracting... [clean up]
-- extracting... done
[ 11%] No patch step for 'mpir'
[ 12%] No update step for 'mpir'
[ 13%] Performing configure step for 'mpir'
-- The C compiler identification is GNU 7.3.0
-- The CXX compiler identification is GNU 7.3.0
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- secp256k1 install command succeeded.  See also /home/vagrant/cpp-ethereum/build/deps/src/secp256k1-stamp/secp256k1-install-*.log
[ 13%] Completed 'secp256k1'
[ 13%] Built target secp256k1
[ 13%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Common.cpp.o
-- Detecting CXX compile features - done
-- Looking for sys/types.h
-- Looking for sys/types.h - found
-- Looking for stdint.h
-- Looking for stdint.h - found
-- Looking for stddef.h
-- Looking for stddef.h - found
-- Check size of unsigned long
-- Check size of unsigned long - done
-- Check size of mp_limb_t
-- Check size of mp_limb_t - done
-- Check size of intmax_t
[ 14%] Building CXX object libdevcore/CMakeFiles/devcore.dir/CommonData.cpp.o
-- Check size of intmax_t - done
-- Looking for strnlen
[ 15%] Building CXX object libdevcore/CMakeFiles/devcore.dir/CommonIO.cpp.o
-- Looking for strnlen - found
-- Looking for strchr
-- Looking for strchr - found
-- Looking for inttypes.h
-- Looking for inttypes.h - found
-- Looking for unistd.h
-- Looking for unistd.h - found
-- Looking for stdarg.h
-- Looking for stdarg.h - found
VERSION: 3.0.0
-- Configuring done
-- Generating done
-- Build files have been written to: /home/vagrant/cpp-ethereum/build/deps/src/mpir-build
[ 15%] Performing build step for 'mpir'
Scanning dependencies of target mpir
[  0%] Building C object CMakeFiles/mpir.dir/assert.c.o
[  0%] Building C object CMakeFiles/mpir.dir/compat.c.o
[  0%] Building C object CMakeFiles/mpir.dir/errno.c.o
[  0%] Building C object CMakeFiles/mpir.dir/invalid.c.o
[  0%] Building C object CMakeFiles/mpir.dir/memory.c.o
[  1%] Building C object CMakeFiles/mpir.dir/mp_bpl.c.o
[  1%] Building C object CMakeFiles/mpir.dir/mp_clz_tab.c.o
[  1%] Building C object CMakeFiles/mpir.dir/mp_dv_tab.c.o
[  1%] Building C object CMakeFiles/mpir.dir/mp_get_fns.c.o
[  1%] Building C object CMakeFiles/mpir.dir/mp_minv_tab.c.o
[  2%] Building C object CMakeFiles/mpir.dir/mp_set_fns.c.o
[  2%] Building C object CMakeFiles/mpir.dir/nextprime.c.o
[  2%] Building C object CMakeFiles/mpir.dir/primesieve.c.o
[  2%] Building C object CMakeFiles/mpir.dir/randbui.c.o
[  2%] Building C object CMakeFiles/mpir.dir/randclr.c.o
[  3%] Building C object CMakeFiles/mpir.dir/randdef.c.o
[  3%] Building C object CMakeFiles/mpir.dir/randiset.c.o
[  3%] Building C object CMakeFiles/mpir.dir/randlc2s.c.o
[  3%] Building C object CMakeFiles/mpir.dir/randlc2x.c.o
[  3%] Building C object CMakeFiles/mpir.dir/randmt.c.o
[  4%] Building C object CMakeFiles/mpir.dir/randmts.c.o
[  4%] Building C object CMakeFiles/mpir.dir/randmui.c.o
[  4%] Building C object CMakeFiles/mpir.dir/rands.c.o
[  4%] Building C object CMakeFiles/mpir.dir/randsd.c.o
[  4%] Building C object CMakeFiles/mpir.dir/randsdui.c.o
[  5%] Building C object CMakeFiles/mpir.dir/tal-reent.c.o
[  5%] Building C object CMakeFiles/mpir.dir/version.c.o
[  5%] Building C object CMakeFiles/mpir.dir/fft/adjust.c.o
[  5%] Building C object CMakeFiles/mpir.dir/fft/adjust_sqrt2.c.o
[  5%] Building C object CMakeFiles/mpir.dir/fft/butterfly_lshB.c.o
[  5%] Building C object CMakeFiles/mpir.dir/fft/butterfly_rshB.c.o
[  6%] Building C object CMakeFiles/mpir.dir/fft/combine_bits.c.o
[  6%] Building C object CMakeFiles/mpir.dir/fft/div_2expmod_2expp1.c.o
[  6%] Building C object CMakeFiles/mpir.dir/fft/fermat_to_mpz.c.o
[  6%] Building C object CMakeFiles/mpir.dir/fft/fft_mfa_trunc_sqrt2.c.o
[  6%] Building C object CMakeFiles/mpir.dir/fft/fft_mfa_trunc_sqrt2_inner.c.o
[  7%] Building C object CMakeFiles/mpir.dir/fft/fft_negacyclic.c.o
[  7%] Building C object CMakeFiles/mpir.dir/fft/fft_radix2.c.o
[  7%] Building C object CMakeFiles/mpir.dir/fft/fft_trunc.c.o
[  7%] Building C object CMakeFiles/mpir.dir/fft/fft_trunc_sqrt2.c.o
[  7%] Building C object CMakeFiles/mpir.dir/fft/ifft_mfa_trunc_sqrt2.c.o
[  8%] Building C object CMakeFiles/mpir.dir/fft/ifft_negacyclic.c.o
[  8%] Building C object CMakeFiles/mpir.dir/fft/ifft_radix2.c.o
[ 15%] Building CXX object libdevcore/CMakeFiles/devcore.dir/CommonJS.cpp.o
[  8%] Building C object CMakeFiles/mpir.dir/fft/ifft_trunc.c.o
[  8%] Building C object CMakeFiles/mpir.dir/fft/ifft_trunc_sqrt2.c.o
[  8%] Building C object CMakeFiles/mpir.dir/fft/mul_2expmod_2expp1.c.o
[  9%] Building C object CMakeFiles/mpir.dir/fft/mul_fft_main.c.o
[  9%] Building C object CMakeFiles/mpir.dir/fft/mul_mfa_trunc_sqrt2.c.o
[  9%] Building C object CMakeFiles/mpir.dir/fft/mul_trunc_sqrt2.c.o
[  9%] Building C object CMakeFiles/mpir.dir/fft/mulmod_2expp1.c.o
[  9%] Building C object CMakeFiles/mpir.dir/fft/normmod_2expp1.c.o
[ 10%] Building C object CMakeFiles/mpir.dir/fft/revbin.c.o
[ 10%] Building C object CMakeFiles/mpir.dir/fft/split_bits.c.o
[ 10%] Building C object CMakeFiles/mpir.dir/mpf/abs.c.o
[ 10%] Building C object CMakeFiles/mpir.dir/mpf/add.c.o
[ 10%] Building C object CMakeFiles/mpir.dir/mpf/add_ui.c.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/ceilfloor.c.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/clear.c.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/clears.c.o
[ 16%] Building CXX object libdevcore/CMakeFiles/devcore.dir/DBFactory.cpp.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/cmp.c.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/cmp_d.c.o
[ 11%] Building C object CMakeFiles/mpir.dir/mpf/cmp_si.c.o
[ 12%] Building C object CMakeFiles/mpir.dir/mpf/cmp_ui.c.o
[ 12%] Building C object CMakeFiles/mpir.dir/mpf/div.c.o
[ 12%] Building C object CMakeFiles/mpir.dir/mpf/div_2exp.c.o
[ 12%] Building C object CMakeFiles/mpir.dir/mpf/div_ui.c.o
[ 12%] Building C object CMakeFiles/mpir.dir/mpf/dump.c.o
[ 13%] Building C object CMakeFiles/mpir.dir/mpf/eq.c.o
[ 13%] Building C object CMakeFiles/mpir.dir/mpf/fits_si.c.o
[ 13%] Building C object CMakeFiles/mpir.dir/mpf/fits_sint.c.o
[ 17%] Building CXX object libdevcore/CMakeFiles/devcore.dir/FileSystem.cpp.o
[ 13%] Building C object CMakeFiles/mpir.dir/mpf/fits_slong.c.o
[ 13%] Building C object CMakeFiles/mpir.dir/mpf/fits_sshort.c.o
[ 14%] Building C object CMakeFiles/mpir.dir/mpf/fits_ui.c.o
[ 14%] Building C object CMakeFiles/mpir.dir/mpf/fits_uint.c.o
[ 14%] Building C object CMakeFiles/mpir.dir/mpf/fits_ulong.c.o
[ 14%] Building C object CMakeFiles/mpir.dir/mpf/fits_ushort.c.o
[ 14%] Building C object CMakeFiles/mpir.dir/mpf/get_d.c.o
[ 15%] Building C object CMakeFiles/mpir.dir/mpf/get_d_2exp.c.o
[ 15%] Building C object CMakeFiles/mpir.dir/mpf/get_dfl_prec.c.o
[ 15%] Building C object CMakeFiles/mpir.dir/mpf/get_prc.c.o
[ 15%] Building C object CMakeFiles/mpir.dir/mpf/get_si.c.o
[ 15%] Building C object CMakeFiles/mpir.dir/mpf/get_str.c.o
[ 16%] Building C object CMakeFiles/mpir.dir/mpf/get_ui.c.o
[ 16%] Building C object CMakeFiles/mpir.dir/mpf/init.c.o
[ 16%] Building C object CMakeFiles/mpir.dir/mpf/init2.c.o
[ 16%] Building C object CMakeFiles/mpir.dir/mpf/inits.c.o
[ 16%] Building C object CMakeFiles/mpir.dir/mpf/inp_str.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/int_p.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/iset.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/iset_d.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/iset_si.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/iset_str.c.o
[ 17%] Building C object CMakeFiles/mpir.dir/mpf/iset_ui.c.o
[ 18%] Building C object CMakeFiles/mpir.dir/mpf/mul.c.o
[ 17%] Building CXX object libdevcore/CMakeFiles/devcore.dir/FixedHash.cpp.o
[ 18%] Building C object CMakeFiles/mpir.dir/mpf/mul_2exp.c.o
[ 18%] Building C object CMakeFiles/mpir.dir/mpf/mul_ui.c.o
[ 18%] Building C object CMakeFiles/mpir.dir/mpf/neg.c.o
[ 18%] Building C object CMakeFiles/mpir.dir/mpf/out_str.c.o
[ 19%] Building C object CMakeFiles/mpir.dir/mpf/pow_ui.c.o
[ 19%] Building C object CMakeFiles/mpir.dir/mpf/random2.c.o
[ 19%] Building C object CMakeFiles/mpir.dir/mpf/reldiff.c.o
[ 19%] Building C object CMakeFiles/mpir.dir/mpf/rrandomb.c.o
[ 19%] Building C object CMakeFiles/mpir.dir/mpf/set.c.o
[ 20%] Building C object CMakeFiles/mpir.dir/mpf/set_d.c.o
[ 20%] Building C object CMakeFiles/mpir.dir/mpf/set_dfl_prec.c.o
[ 20%] Building C object CMakeFiles/mpir.dir/mpf/set_prc.c.o
[ 20%] Building C object CMakeFiles/mpir.dir/mpf/set_prc_raw.c.o
[ 20%] Building C object CMakeFiles/mpir.dir/mpf/set_q.c.o
[ 21%] Building C object CMakeFiles/mpir.dir/mpf/set_si.c.o
[ 21%] Building C object CMakeFiles/mpir.dir/mpf/set_str.c.o
[ 21%] Building C object CMakeFiles/mpir.dir/mpf/set_ui.c.o
[ 21%] Building C object CMakeFiles/mpir.dir/mpf/set_z.c.o
[ 21%] Building C object CMakeFiles/mpir.dir/mpf/size.c.o
[ 22%] Building C object CMakeFiles/mpir.dir/mpf/sqrt.c.o
[ 22%] Building C object CMakeFiles/mpir.dir/mpf/sqrt_ui.c.o
[ 22%] Building C object CMakeFiles/mpir.dir/mpf/sub.c.o
[ 22%] Building C object CMakeFiles/mpir.dir/mpf/sub_ui.c.o
[ 22%] Building C object CMakeFiles/mpir.dir/mpf/swap.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpf/trunc.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpf/ui_div.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpf/ui_sub.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpf/urandomb.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpn/generic/add.c.o
[ 23%] Building C object CMakeFiles/mpir.dir/mpn/generic/add_1.c.o
[ 24%] Building C object CMakeFiles/mpir.dir/mpn/generic/add_err1_n.c.o
[ 24%] Building C object CMakeFiles/mpir.dir/mpn/generic/add_err2_n.c.o
[ 24%] Building C object CMakeFiles/mpir.dir/mpn/generic/add_n.c.o
[ 18%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Guards.cpp.o
[ 24%] Building C object CMakeFiles/mpir.dir/mpn/generic/addadd_n.c.o
[ 24%] Building C object CMakeFiles/mpir.dir/mpn/generic/addmul_1.c.o
[ 25%] Building C object CMakeFiles/mpir.dir/mpn/generic/addsub_n.c.o
[ 25%] Building C object CMakeFiles/mpir.dir/mpn/generic/and_n.c.o
[ 25%] Building C object CMakeFiles/mpir.dir/mpn/generic/andn_n.c.o
[ 25%] Building C object CMakeFiles/mpir.dir/mpn/generic/bdivmod.c.o
[ 25%] Building C object CMakeFiles/mpir.dir/mpn/generic/binvert.c.o
[ 26%] Building C object CMakeFiles/mpir.dir/mpn/generic/cmp.c.o
[ 26%] Building C object CMakeFiles/mpir.dir/mpn/generic/com_n.c.o
[ 26%] Building C object CMakeFiles/mpir.dir/mpn/generic/comb_tables.c.o
[ 26%] Building C object CMakeFiles/mpir.dir/mpn/generic/copyd.c.o
[ 26%] Building C object CMakeFiles/mpir.dir/mpn/generic/copyi.c.o
[ 27%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_bdiv_q.c.o
[ 27%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_bdiv_q_n.c.o
[ 18%] Building CXX object libdevcore/CMakeFiles/devcore.dir/JsonUtils.cpp.o
[ 27%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_bdiv_qr.c.o
[ 27%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_bdiv_qr_n.c.o
[ 27%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_div_q.c.o
[ 28%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_div_qr.c.o
[ 28%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_div_qr_n.c.o
[ 28%] Building C object CMakeFiles/mpir.dir/mpn/generic/dc_divappr_q.c.o
[ 28%] Building C object CMakeFiles/mpir.dir/mpn/generic/divexact.c.o
[ 28%] Building C object CMakeFiles/mpir.dir/mpn/generic/divexact_1.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divexact_by3c.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divexact_byff.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divexact_byfobm1.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divisible_p.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem.c.o
[ 29%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_1.c.o
[ 30%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_2.c.o
[ 30%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_euclidean_qr_1.c.o
[ 30%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_euclidean_qr_2.c.o
[ 30%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_euclidean_r_1.c.o
[ 30%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_hensel_qr_1.c.o
[ 31%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_hensel_qr_1_1.c.o
[ 31%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_hensel_qr_1_2.c.o
[ 31%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_hensel_r_1.c.o
[ 31%] Building C object CMakeFiles/mpir.dir/mpn/generic/divrem_hensel_rsh_qr_1.c.o
[ 31%] Building C object CMakeFiles/mpir.dir/mpn/generic/dump.c.o
[ 32%] Building C object CMakeFiles/mpir.dir/mpn/generic/fib2_ui.c.o
[ 32%] Building C object CMakeFiles/mpir.dir/mpn/generic/fib_table.c.o
[ 32%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcd.c.o
[ 32%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcd_1.c.o
[ 32%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcd_subdiv_step.c.o
[ 33%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcdext.c.o
[ 33%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcdext_1.c.o
[ 33%] Building C object CMakeFiles/mpir.dir/mpn/generic/gcdext_lehmer.c.o
[ 33%] Building C object CMakeFiles/mpir.dir/mpn/generic/get_d.c.o
[ 33%] Building C object CMakeFiles/mpir.dir/mpn/generic/get_str.c.o
[ 34%] Building C object CMakeFiles/mpir.dir/mpn/generic/hamdist.c.o
[ 34%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd.c.o
[ 34%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd2.c.o
[ 19%] Building CXX object libdevcore/CMakeFiles/devcore.dir/LevelDB.cpp.o
[ 34%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd2_jacobi.c.o
[ 34%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd_appr.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd_jacobi.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd_matrix.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd_reduce.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/hgcd_step.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/inv_div_q.c.o
[ 35%] Building C object CMakeFiles/mpir.dir/mpn/generic/inv_div_qr.c.o
[ 20%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Log.cpp.o
[ 36%] Building C object CMakeFiles/mpir.dir/mpn/generic/inv_div_qr_n.c.o
[ 36%] Building C object CMakeFiles/mpir.dir/mpn/generic/inv_divappr_q.c.o
[ 36%] Building C object CMakeFiles/mpir.dir/mpn/generic/inv_divappr_q_n.c.o
[ 36%] Building C object CMakeFiles/mpir.dir/mpn/generic/invert.c.o
[ 36%] Building C object CMakeFiles/mpir.dir/mpn/generic/ior_n.c.o
[ 37%] Building C object CMakeFiles/mpir.dir/mpn/generic/iorn_n.c.o
[ 37%] Building C object CMakeFiles/mpir.dir/mpn/generic/jacobi.c.o
[ 37%] Building C object CMakeFiles/mpir.dir/mpn/generic/jacobi_2.c.o
[ 37%] Building C object CMakeFiles/mpir.dir/mpn/generic/jacobi_base.c.o
[ 37%] Building C object CMakeFiles/mpir.dir/mpn/generic/lshift.c.o
[ 38%] Building C object CMakeFiles/mpir.dir/mpn/generic/matrix22_mul.c.o
[ 38%] Building C object CMakeFiles/mpir.dir/mpn/generic/matrix22_mul1_inverse_vector.c.o
[ 38%] Building C object CMakeFiles/mpir.dir/mpn/generic/mod_1.c.o
[ 38%] Building C object CMakeFiles/mpir.dir/mpn/generic/mod_1_1.c.o
[ 38%] Building C object CMakeFiles/mpir.dir/mpn/generic/mod_1_2.c.o
[ 39%] Building C object CMakeFiles/mpir.dir/mpn/generic/mod_1_3.c.o
[ 39%] Building C object CMakeFiles/mpir.dir/mpn/generic/mod_34lsub1.c.o
[ 39%] Building C object CMakeFiles/mpir.dir/mpn/generic/modexact_1c_odd.c.o
[ 39%] Building C object CMakeFiles/mpir.dir/mpn/generic/mp_bases.c.o
[ 39%] Building C object CMakeFiles/mpir.dir/mpn/generic/mul.c.o
[ 40%] Building C object CMakeFiles/mpir.dir/mpn/generic/mul_1.c.o
[ 40%] Building C object CMakeFiles/mpir.dir/mpn/generic/mul_basecase.c.o
[ 40%] Building C object CMakeFiles/mpir.dir/mpn/generic/mul_fft.c.o
[ 40%] Building C object CMakeFiles/mpir.dir/mpn/generic/mul_n.c.o
[ 40%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulhigh_n.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mullow_basecase.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mullow_n.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mullow_n_basecase.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmid.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmid_basecase.c.o
[ 41%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmid_n.c.o
[ 42%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmod_2expm1.c.o
[ 42%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmod_2expp1_basecase.c.o
[ 42%] Building C object CMakeFiles/mpir.dir/mpn/generic/mulmod_bexpp1.c.o
[ 42%] Building C object CMakeFiles/mpir.dir/mpn/generic/nand_n.c.o
[ 20%] Building CXX object libdevcore/CMakeFiles/devcore.dir/LoggingProgramOptions.cpp.o
[ 42%] Building C object CMakeFiles/mpir.dir/mpn/generic/neg_n.c.o
[ 43%] Building C object CMakeFiles/mpir.dir/mpn/generic/nior_n.c.o
[ 43%] Building C object CMakeFiles/mpir.dir/mpn/generic/nsumdiff_n.c.o
[ 43%] Building C object CMakeFiles/mpir.dir/mpn/generic/perfect_square_p.c.o
[ 43%] Building C object CMakeFiles/mpir.dir/mpn/generic/popcount.c.o
[ 43%] Building C object CMakeFiles/mpir.dir/mpn/generic/pow_1.c.o
[ 44%] Building C object CMakeFiles/mpir.dir/mpn/generic/powlo.c.o
[ 44%] Building C object CMakeFiles/mpir.dir/mpn/generic/powm.c.o
[ 44%] Building C object CMakeFiles/mpir.dir/mpn/generic/preinv_divrem_1.c.o
[ 44%] Building C object CMakeFiles/mpir.dir/mpn/generic/preinv_mod_1.c.o
[ 44%] Building C object CMakeFiles/mpir.dir/mpn/generic/random.c.o
[ 45%] Building C object CMakeFiles/mpir.dir/mpn/generic/random2.c.o
[ 45%] Building C object CMakeFiles/mpir.dir/mpn/generic/randomb.c.o
[ 45%] Building C object CMakeFiles/mpir.dir/mpn/generic/redc_1.c.o
[ 45%] Building C object CMakeFiles/mpir.dir/mpn/generic/redc_2.c.o
[ 45%] Building C object CMakeFiles/mpir.dir/mpn/generic/redc_n.c.o
[ 46%] Building C object CMakeFiles/mpir.dir/mpn/generic/rootrem.c.o
[ 46%] Building C object CMakeFiles/mpir.dir/mpn/generic/rootrem_basecase.c.o
[ 46%] Building C object CMakeFiles/mpir.dir/mpn/generic/rrandom.c.o
[ 46%] Building C object CMakeFiles/mpir.dir/mpn/generic/rsh_divrem_hensel_qr_1.c.o
[ 21%] Building CXX object libdevcore/CMakeFiles/devcore.dir/MemoryDB.cpp.o
[ 46%] Building C object CMakeFiles/mpir.dir/mpn/generic/rsh_divrem_hensel_qr_1_1.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/rsh_divrem_hensel_qr_1_2.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/rshift.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/sb_bdiv_q.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/sb_bdiv_qr.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/sb_div_q.c.o
[ 47%] Building C object CMakeFiles/mpir.dir/mpn/generic/sb_div_qr.c.o
[ 48%] Building C object CMakeFiles/mpir.dir/mpn/generic/sb_divappr_q.c.o
[ 48%] Building C object CMakeFiles/mpir.dir/mpn/generic/scan0.c.o
[ 48%] Building C object CMakeFiles/mpir.dir/mpn/generic/scan1.c.o
[ 48%] Building C object CMakeFiles/mpir.dir/mpn/generic/set_str.c.o
[ 48%] Building C object CMakeFiles/mpir.dir/mpn/generic/sizeinbase.c.o
[ 49%] Building C object CMakeFiles/mpir.dir/mpn/generic/sqr_basecase.c.o
[ 49%] Building C object CMakeFiles/mpir.dir/mpn/generic/sqrtrem.c.o
[ 49%] Building C object CMakeFiles/mpir.dir/mpn/generic/sub.c.o
[ 49%] Building C object CMakeFiles/mpir.dir/mpn/generic/sub_1.c.o
[ 49%] Building C object CMakeFiles/mpir.dir/mpn/generic/sub_err1_n.c.o
[ 50%] Building C object CMakeFiles/mpir.dir/mpn/generic/sub_err2_n.c.o
[ 50%] Building C object CMakeFiles/mpir.dir/mpn/generic/sub_n.c.o
[ 50%] Building C object CMakeFiles/mpir.dir/mpn/generic/subadd_n.c.o
[ 50%] Building C object CMakeFiles/mpir.dir/mpn/generic/submul_1.c.o
[ 50%] Building C object CMakeFiles/mpir.dir/mpn/generic/sumdiff_n.c.o
[ 51%] Building C object CMakeFiles/mpir.dir/mpn/generic/tdiv_q.c.o
[ 51%] Building C object CMakeFiles/mpir.dir/mpn/generic/tdiv_qr.c.o
[ 51%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom3_mul.c.o
[ 51%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom3_mul_n.c.o
[ 51%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom42_mulmid.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom4_mul.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom4_mul_n.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom8_sqr_n.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom8h_mul.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_couple_handling.c.o
[ 52%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_dgr3_pm1.c.o
[ 53%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_dgr3_pm2.c.o
[ 21%] Building CXX object libdevcore/CMakeFiles/devcore.dir/OverlayDB.cpp.o
[ 53%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_pm1.c.o
[ 53%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_pm2.c.o
[ 53%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_pm2exp.c.o
[ 53%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_eval_pm2rexp.c.o
[ 54%] Building C object CMakeFiles/mpir.dir/mpn/generic/toom_interpolate_16pts.c.o
[ 54%] Building C object CMakeFiles/mpir.dir/mpn/generic/urandomb.c.o
[ 54%] Building C object CMakeFiles/mpir.dir/mpn/generic/urandomm.c.o
[ 54%] Building C object CMakeFiles/mpir.dir/mpn/generic/xnor_n.c.o
[ 54%] Building C object CMakeFiles/mpir.dir/mpn/generic/xor_n.c.o
[ 55%] Building C object CMakeFiles/mpir.dir/mpn/generic/zero.c.o
[ 22%] Building CXX object libdevcore/CMakeFiles/devcore.dir/RLP.cpp.o
[ 55%] Building C object CMakeFiles/mpir.dir/mpq/abs.c.o
[ 55%] Building C object CMakeFiles/mpir.dir/mpq/aors.c.o
[ 55%] Building C object CMakeFiles/mpir.dir/mpq/canonicalize.c.o
[ 55%] Building C object CMakeFiles/mpir.dir/mpq/clear.c.o
[ 56%] Building C object CMakeFiles/mpir.dir/mpq/clears.c.o
[ 56%] Building C object CMakeFiles/mpir.dir/mpq/cmp.c.o
[ 56%] Building C object CMakeFiles/mpir.dir/mpq/cmp_si.c.o
[ 56%] Building C object CMakeFiles/mpir.dir/mpq/cmp_ui.c.o
[ 56%] Building C object CMakeFiles/mpir.dir/mpq/div.c.o
[ 57%] Building C object CMakeFiles/mpir.dir/mpq/equal.c.o
[ 57%] Building C object CMakeFiles/mpir.dir/mpq/get_d.c.o
[ 57%] Building C object CMakeFiles/mpir.dir/mpq/get_den.c.o
[ 57%] Building C object CMakeFiles/mpir.dir/mpq/get_num.c.o
[ 57%] Building C object CMakeFiles/mpir.dir/mpq/get_str.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/init.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/inits.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/inp_str.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/inv.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/md_2exp.c.o
[ 58%] Building C object CMakeFiles/mpir.dir/mpq/mul.c.o
[ 59%] Building C object CMakeFiles/mpir.dir/mpq/neg.c.o
[ 59%] Building C object CMakeFiles/mpir.dir/mpq/out_str.c.o
[ 59%] Building C object CMakeFiles/mpir.dir/mpq/set.c.o
[ 59%] Building C object CMakeFiles/mpir.dir/mpq/set_d.c.o
[ 59%] Building C object CMakeFiles/mpir.dir/mpq/set_den.c.o
[ 60%] Building C object CMakeFiles/mpir.dir/mpq/set_f.c.o
[ 60%] Building C object CMakeFiles/mpir.dir/mpq/set_num.c.o
[ 60%] Building C object CMakeFiles/mpir.dir/mpq/set_si.c.o
[ 60%] Building C object CMakeFiles/mpir.dir/mpq/set_str.c.o
[ 60%] Building C object CMakeFiles/mpir.dir/mpq/set_ui.c.o
[ 61%] Building C object CMakeFiles/mpir.dir/mpq/set_z.c.o
[ 23%] Building CXX object libdevcore/CMakeFiles/devcore.dir/RocksDB.cpp.o
[ 61%] Building C object CMakeFiles/mpir.dir/mpq/swap.c.o
[ 61%] Building C object CMakeFiles/mpir.dir/mpz/2fac_ui.c.o
[ 61%] Building C object CMakeFiles/mpir.dir/mpz/abs.c.o
[ 61%] Building C object CMakeFiles/mpir.dir/mpz/add.c.o
[ 62%] Building C object CMakeFiles/mpir.dir/mpz/add_ui.c.o
[ 62%] Building C object CMakeFiles/mpir.dir/mpz/and.c.o
[ 62%] Building C object CMakeFiles/mpir.dir/mpz/aorsmul.c.o
[ 62%] Building C object CMakeFiles/mpir.dir/mpz/aorsmul_i.c.o
[ 62%] Building C object CMakeFiles/mpir.dir/mpz/array_init.c.o
[ 63%] Building C object CMakeFiles/mpir.dir/mpz/bin_ui.c.o
[ 63%] Building C object CMakeFiles/mpir.dir/mpz/bin_uiui.c.o
[ 63%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_q.c.o
[ 63%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_q_ui.c.o
[ 63%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_qr.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_qr_ui.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_r.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_r_ui.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cdiv_ui.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cfdiv_q_2exp.c.o
[ 64%] Building C object CMakeFiles/mpir.dir/mpz/cfdiv_r_2exp.c.o
[ 65%] Building C object CMakeFiles/mpir.dir/mpz/clear.c.o
[ 65%] Building C object CMakeFiles/mpir.dir/mpz/clears.c.o
[ 65%] Building C object CMakeFiles/mpir.dir/mpz/clrbit.c.o
[ 65%] Building C object CMakeFiles/mpir.dir/mpz/cmp.c.o
[ 65%] Building C object CMakeFiles/mpir.dir/mpz/cmp_d.c.o
[ 66%] Building C object CMakeFiles/mpir.dir/mpz/cmp_si.c.o
[ 66%] Building C object CMakeFiles/mpir.dir/mpz/cmp_ui.c.o
[ 66%] Building C object CMakeFiles/mpir.dir/mpz/cmpabs.c.o
[ 66%] Building C object CMakeFiles/mpir.dir/mpz/cmpabs_d.c.o
[ 66%] Building C object CMakeFiles/mpir.dir/mpz/cmpabs_ui.c.o
[ 67%] Building C object CMakeFiles/mpir.dir/mpz/com.c.o
[ 67%] Building C object CMakeFiles/mpir.dir/mpz/combit.c.o
[ 67%] Building C object CMakeFiles/mpir.dir/mpz/cong.c.o
[ 67%] Building C object CMakeFiles/mpir.dir/mpz/cong_2exp.c.o
[ 67%] Building C object CMakeFiles/mpir.dir/mpz/cong_ui.c.o
[ 68%] Building C object CMakeFiles/mpir.dir/mpz/dive_ui.c.o
[ 68%] Building C object CMakeFiles/mpir.dir/mpz/divegcd.c.o
[ 68%] Building C object CMakeFiles/mpir.dir/mpz/divexact.c.o
[ 68%] Building C object CMakeFiles/mpir.dir/mpz/divis.c.o
[ 68%] Building C object CMakeFiles/mpir.dir/mpz/divis_2exp.c.o
[ 69%] Building C object CMakeFiles/mpir.dir/mpz/divis_ui.c.o
[ 69%] Building C object CMakeFiles/mpir.dir/mpz/dump.c.o
[ 69%] Building C object CMakeFiles/mpir.dir/mpz/export.c.o
[ 69%] Building C object CMakeFiles/mpir.dir/mpz/fac_ui.c.o
[ 69%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_q.c.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_q_ui.c.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_qr.c.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_qr_ui.c.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_r.c.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_r_ui.c.o
[ 23%] Building CXX object libdevcore/CMakeFiles/devcore.dir/SHA3.cpp.o
[ 70%] Building C object CMakeFiles/mpir.dir/mpz/fdiv_ui.c.o
[ 71%] Building C object CMakeFiles/mpir.dir/mpz/fib2_ui.c.o
[ 71%] Building C object CMakeFiles/mpir.dir/mpz/fib_ui.c.o
[ 71%] Building C object CMakeFiles/mpir.dir/mpz/fits_si.c.o
[ 71%] Building C object CMakeFiles/mpir.dir/mpz/fits_sint.c.o
[ 71%] Building C object CMakeFiles/mpir.dir/mpz/fits_slong.c.o
[ 72%] Building C object CMakeFiles/mpir.dir/mpz/fits_sshort.c.o
[ 72%] Building C object CMakeFiles/mpir.dir/mpz/fits_ui.c.o
[ 72%] Building C object CMakeFiles/mpir.dir/mpz/fits_uint.c.o
[ 72%] Building C object CMakeFiles/mpir.dir/mpz/fits_ulong.c.o
[ 72%] Building C object CMakeFiles/mpir.dir/mpz/fits_ushort.c.o
[ 73%] Building C object CMakeFiles/mpir.dir/mpz/gcd.c.o
[ 73%] Building C object CMakeFiles/mpir.dir/mpz/gcd_ui.c.o
[ 73%] Building C object CMakeFiles/mpir.dir/mpz/gcdext.c.o
[ 73%] Building C object CMakeFiles/mpir.dir/mpz/get_d.c.o
[ 73%] Building C object CMakeFiles/mpir.dir/mpz/get_d_2exp.c.o
[ 74%] Building C object CMakeFiles/mpir.dir/mpz/get_si.c.o
[ 74%] Building C object CMakeFiles/mpir.dir/mpz/get_str.c.o
[ 24%] Building CXX object libdevcore/CMakeFiles/devcore.dir/StateCacheDB.cpp.o
[ 74%] Building C object CMakeFiles/mpir.dir/mpz/get_sx.c.o
[ 74%] Building C object CMakeFiles/mpir.dir/mpz/get_ui.c.o
[ 74%] Building C object CMakeFiles/mpir.dir/mpz/get_ux.c.o
[ 75%] Building C object CMakeFiles/mpir.dir/mpz/getlimbn.c.o
[ 75%] Building C object CMakeFiles/mpir.dir/mpz/hamdist.c.o
[ 75%] Building C object CMakeFiles/mpir.dir/mpz/import.c.o
[ 75%] Building C object CMakeFiles/mpir.dir/mpz/init.c.o
[ 75%] Building C object CMakeFiles/mpir.dir/mpz/init2.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/inits.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/inp_raw.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/inp_str.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/invert.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/ior.c.o
[ 76%] Building C object CMakeFiles/mpir.dir/mpz/iset.c.o
[ 77%] Building C object CMakeFiles/mpir.dir/mpz/iset_d.c.o
[ 77%] Building C object CMakeFiles/mpir.dir/mpz/iset_si.c.o
[ 77%] Building C object CMakeFiles/mpir.dir/mpz/iset_str.c.o
[ 77%] Building C object CMakeFiles/mpir.dir/mpz/iset_sx.c.o
[ 77%] Building C object CMakeFiles/mpir.dir/mpz/iset_ui.c.o
[ 78%] Building C object CMakeFiles/mpir.dir/mpz/iset_ux.c.o
[ 78%] Building C object CMakeFiles/mpir.dir/mpz/jacobi.c.o
[ 78%] Building C object CMakeFiles/mpir.dir/mpz/kronsz.c.o
[ 78%] Building C object CMakeFiles/mpir.dir/mpz/kronuz.c.o
[ 78%] Building C object CMakeFiles/mpir.dir/mpz/kronzs.c.o
[ 79%] Building C object CMakeFiles/mpir.dir/mpz/kronzu.c.o
[ 79%] Building C object CMakeFiles/mpir.dir/mpz/lcm.c.o
[ 79%] Building C object CMakeFiles/mpir.dir/mpz/lcm_ui.c.o
[ 79%] Building C object CMakeFiles/mpir.dir/mpz/likely_prime_p.c.o
[ 79%] Building C object CMakeFiles/mpir.dir/mpz/limbs_finish.c.o
[ 80%] Building C object CMakeFiles/mpir.dir/mpz/limbs_modify.c.o
[ 80%] Building C object CMakeFiles/mpir.dir/mpz/limbs_read.c.o
[ 80%] Building C object CMakeFiles/mpir.dir/mpz/limbs_write.c.o
[ 80%] Building C object CMakeFiles/mpir.dir/mpz/lucnum2_ui.c.o
[ 80%] Building C object CMakeFiles/mpir.dir/mpz/lucnum_ui.c.o
[ 24%] Building CXX object libdevcore/CMakeFiles/devcore.dir/TransientDirectory.cpp.o
[ 81%] Building C object CMakeFiles/mpir.dir/mpz/mfac_uiui.c.o
[ 81%] Building C object CMakeFiles/mpir.dir/mpz/miller_rabin.c.o
[ 81%] Building C object CMakeFiles/mpir.dir/mpz/millerrabin.c.o
[ 81%] Building C object CMakeFiles/mpir.dir/mpz/mod.c.o
[ 81%] Building C object CMakeFiles/mpir.dir/mpz/mul.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/mul_2exp.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/mul_si.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/mul_ui.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/n_pow_ui.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/neg.c.o
[ 82%] Building C object CMakeFiles/mpir.dir/mpz/next_prime_candidate.c.o
[ 83%] Building C object CMakeFiles/mpir.dir/mpz/nextprime.c.o
[ 83%] Building C object CMakeFiles/mpir.dir/mpz/nthroot.c.o
[ 83%] Building C object CMakeFiles/mpir.dir/mpz/oddfac_1.c.o
[ 25%] Building CXX object libdevcore/CMakeFiles/devcore.dir/TrieCommon.cpp.o
[ 83%] Building C object CMakeFiles/mpir.dir/mpz/out_raw.c.o
[ 83%] Building C object CMakeFiles/mpir.dir/mpz/out_str.c.o
[ 84%] Building C object CMakeFiles/mpir.dir/mpz/perfpow.c.o
[ 84%] Building C object CMakeFiles/mpir.dir/mpz/perfsqr.c.o
[ 84%] Building C object CMakeFiles/mpir.dir/mpz/popcount.c.o
[ 84%] Building C object CMakeFiles/mpir.dir/mpz/pow_ui.c.o
[ 84%] Building C object CMakeFiles/mpir.dir/mpz/powm.c.o
[ 85%] Building C object CMakeFiles/mpir.dir/mpz/powm_ui.c.o
[ 85%] Building C object CMakeFiles/mpir.dir/mpz/pprime_p.c.o
[ 85%] Building C object CMakeFiles/mpir.dir/mpz/primorial_ui.c.o
[ 85%] Building C object CMakeFiles/mpir.dir/mpz/probable_prime_p.c.o
[ 85%] Building C object CMakeFiles/mpir.dir/mpz/prodlimbs.c.o
[ 86%] Building C object CMakeFiles/mpir.dir/mpz/realloc.c.o
[ 86%] Building C object CMakeFiles/mpir.dir/mpz/realloc2.c.o
[ 86%] Building C object CMakeFiles/mpir.dir/mpz/remove.c.o
[ 86%] Building C object CMakeFiles/mpir.dir/mpz/roinit_n.c.o
[ 86%] Building C object CMakeFiles/mpir.dir/mpz/root.c.o
[ 87%] Building C object CMakeFiles/mpir.dir/mpz/rootrem.c.o
[ 87%] Building C object CMakeFiles/mpir.dir/mpz/rrandomb.c.o
[ 87%] Building C object CMakeFiles/mpir.dir/mpz/scan0.c.o
[ 87%] Building C object CMakeFiles/mpir.dir/mpz/scan1.c.o
[ 87%] Building C object CMakeFiles/mpir.dir/mpz/set.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_d.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_f.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_q.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_si.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_str.c.o
[ 88%] Building C object CMakeFiles/mpir.dir/mpz/set_sx.c.o
[ 89%] Building C object CMakeFiles/mpir.dir/mpz/set_ui.c.o
[ 89%] Building C object CMakeFiles/mpir.dir/mpz/set_ux.c.o
[ 89%] Building C object CMakeFiles/mpir.dir/mpz/setbit.c.o
[ 26%] Building CXX object libdevcore/CMakeFiles/devcore.dir/TrieHash.cpp.o
[ 89%] Building C object CMakeFiles/mpir.dir/mpz/size.c.o
[ 89%] Building C object CMakeFiles/mpir.dir/mpz/sizeinbase.c.o
[ 90%] Building C object CMakeFiles/mpir.dir/mpz/sqrt.c.o
[ 90%] Building C object CMakeFiles/mpir.dir/mpz/sqrtrem.c.o
[ 90%] Building C object CMakeFiles/mpir.dir/mpz/sub.c.o
[ 90%] Building C object CMakeFiles/mpir.dir/mpz/sub_ui.c.o
[ 90%] Building C object CMakeFiles/mpir.dir/mpz/swap.c.o
[ 91%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_q.c.o
[ 91%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_q_2exp.c.o
[ 91%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_q_ui.c.o
[ 91%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_qr.c.o
[ 91%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_qr_ui.c.o
[ 92%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_r.c.o
[ 92%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_r_2exp.c.o
[ 92%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_r_ui.c.o
[ 92%] Building C object CMakeFiles/mpir.dir/mpz/tdiv_ui.c.o
[ 92%] Building C object CMakeFiles/mpir.dir/mpz/trial_division.c.o
[ 93%] Building C object CMakeFiles/mpir.dir/mpz/tstbit.c.o
[ 93%] Building C object CMakeFiles/mpir.dir/mpz/ui_pow_ui.c.o
[ 93%] Building C object CMakeFiles/mpir.dir/mpz/ui_sub.c.o
[ 93%] Building C object CMakeFiles/mpir.dir/mpz/urandomb.c.o
[ 93%] Building C object CMakeFiles/mpir.dir/mpz/urandomm.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/mpz/xor.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/printf/asprintf.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/printf/asprntffuns.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/printf/doprnt.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/printf/doprntf.c.o
[ 94%] Building C object CMakeFiles/mpir.dir/printf/doprnti.c.o
[ 95%] Building C object CMakeFiles/mpir.dir/printf/fprintf.c.o
[ 95%] Building C object CMakeFiles/mpir.dir/printf/obprintf.c.o
[ 95%] Building C object CMakeFiles/mpir.dir/printf/obprntffuns.c.o
[ 95%] Building C object CMakeFiles/mpir.dir/printf/obvprintf.c.o
[ 95%] Building C object CMakeFiles/mpir.dir/printf/printf.c.o
[ 96%] Building C object CMakeFiles/mpir.dir/printf/printffuns.c.o
[ 26%] Building CXX object libdevcore/CMakeFiles/devcore.dir/Worker.cpp.o
[ 96%] Building C object CMakeFiles/mpir.dir/printf/repl-vsnprintf.c.o
[ 96%] Building C object CMakeFiles/mpir.dir/printf/snprintf.c.o
[ 96%] Building C object CMakeFiles/mpir.dir/printf/snprntffuns.c.o
[ 96%] Building C object CMakeFiles/mpir.dir/printf/sprintf.c.o
[ 97%] Building C object CMakeFiles/mpir.dir/printf/sprintffuns.c.o
[ 97%] Building C object CMakeFiles/mpir.dir/printf/vasprintf.c.o
[ 97%] Building C object CMakeFiles/mpir.dir/printf/vfprintf.c.o
[ 97%] Building C object CMakeFiles/mpir.dir/printf/vprintf.c.o
[ 97%] Building C object CMakeFiles/mpir.dir/printf/vsnprintf.c.o
[ 98%] Building C object CMakeFiles/mpir.dir/printf/vsprintf.c.o
[ 98%] Building C object CMakeFiles/mpir.dir/scanf/fscanf.c.o
[ 98%] Building C object CMakeFiles/mpir.dir/scanf/doscan.c.o
[ 98%] Building C object CMakeFiles/mpir.dir/scanf/fscanffuns.c.o
[ 98%] Building C object CMakeFiles/mpir.dir/scanf/scanf.c.o
[ 99%] Building C object CMakeFiles/mpir.dir/scanf/sscanf.c.o
[ 99%] Building C object CMakeFiles/mpir.dir/scanf/sscanffuns.c.o
[ 99%] Building C object CMakeFiles/mpir.dir/scanf/vfscanf.c.o
[ 99%] Building C object CMakeFiles/mpir.dir/scanf/vscanf.c.o
[ 99%] Building C object CMakeFiles/mpir.dir/scanf/vsscanf.c.o
[100%] Linking C static library libmpir.a
[100%] Built target mpir
[ 27%] Performing install step for 'mpir'
[100%] Built target mpir
Install the project...
-- Install configuration: "Release"
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/mpir.h
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/gmp.h
-- Installing: /home/vagrant/cpp-ethereum/build/deps/lib/libmpir.a
[ 28%] Completed 'mpir'
[ 28%] Built target mpir
Scanning dependencies of target libff
[ 28%] Creating directories for 'libff'
[ 29%] Performing download step (download, verify and extract) for 'libff'
-- Downloading...
   dst='/home/vagrant/cpp-ethereum/build/deps/src/libff-03b719a7.tar.gz'
   timeout='none'
-- Using src='https://github.com/scipr-lab/libff/archive/03b719a7c81757071f99fc60be1f7f7694e51390.tar.gz'
-- verifying file...
       file='/home/vagrant/cpp-ethereum/build/deps/src/libff-03b719a7.tar.gz'
-- Downloading... done
-- extracting...
     src='/home/vagrant/cpp-ethereum/build/deps/src/libff-03b719a7.tar.gz'
     dst='/home/vagrant/cpp-ethereum/build/deps/src/libff'
-- extracting... [tar xfz]
-- extracting... [analysis]
-- extracting... [rename]
-- extracting... [clean up]
-- extracting... done
[ 30%] No patch step for 'libff'
[ 30%] No update step for 'libff'
[ 31%] Performing configure step for 'libff'
-- The C compiler identification is GNU 7.3.0
-- The CXX compiler identification is GNU 7.3.0
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- GMP: /home/vagrant/cpp-ethereum/build/deps/lib/libmpir.a, /home/vagrant/cpp-ethereum/build/deps/include
-- Configuring done
-- Generating done
-- Build files have been written to: /home/vagrant/cpp-ethereum/build/deps/src/libff-build
[ 31%] Performing build step for 'libff'
[ 32%] Linking CXX static library libdevcore.a
[ 32%] Built target devcore
Scanning dependencies of target aleth-interpreter
[ 32%] Building CXX object libaleth-interpreter/CMakeFiles/aleth-interpreter.dir/VM.cpp.o
[ 33%] Building CXX object libaleth-interpreter/CMakeFiles/aleth-interpreter.dir/VMCalls.cpp.o
[ 34%] Building CXX object libaleth-interpreter/CMakeFiles/aleth-interpreter.dir/VMOpt.cpp.o
[ 34%] Linking CXX static library libaleth-interpreter.a
[ 34%] Built target aleth-interpreter
-- libff build command succeeded.  See also /home/vagrant/cpp-ethereum/build/deps/src/libff-stamp/libff-build-*.log
[ 35%] Performing install step for 'libff'
make[3]: warning: jobserver unavailable: using -j1.  Add '+' to parent make rule.
[100%] Built target ff
Install the project...
-- Install configuration: "Release"
-- Up-to-date: /home/vagrant/cpp-ethereum/build/deps/include/libff
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/double.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/default_types
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/default_types/ec_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/profiling.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/serialization.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/rng.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/template_utils.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/rng.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/utils.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/utils.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/common/serialization.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/exponentiation
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/exponentiation/exponentiation.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/exponentiation/exponentiation.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/scalar_multiplication
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/scalar_multiplication/multiexp.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/scalar_multiplication/wnaf.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/scalar_multiplication/wnaf.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/scalar_multiplication/multiexp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/public_params.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4/mnt4_g2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4/mnt4_g1.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4/mnt4_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4/mnt4_pairing.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt4/mnt4_init.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6/mnt6_init.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6/mnt6_g1.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6/mnt6_g2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6/mnt6_pairing.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt6/mnt6_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/mnt/mnt46_common.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/curve_utils.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/curve_utils.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards/edwards_g1.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards/edwards_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards/edwards_pairing.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards/edwards_g2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/edwards/edwards_init.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn_utils.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_init.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn_utils.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_g2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_g1.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_pairing.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/bn128/bn128_gt.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128/alt_bn128_pairing.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128/alt_bn128_g1.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128/alt_bn128_init.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128/alt_bn128_pp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/curves/alt_bn128/alt_bn128_g2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp3.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp3.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp4.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp12_2over3over2.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/field_utils.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp6_2over3.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp6_2over3.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/bigint.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp6_3over2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp2.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp4.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/field_utils.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/bigint.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp_aux.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp6_3over2.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp12_2over3over2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp.tcc
-- Installing: /home/vagrant/cpp-ethereum/build/deps/include/libff/algebra/fields/fp2.hpp
-- Installing: /home/vagrant/cpp-ethereum/build/deps/lib/libff.a
[ 36%] Completed 'libff'
[ 36%] Built target libff
Scanning dependencies of target devcrypto
[ 37%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/AES.cpp.o
[ 37%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/Common.cpp.o
[ 38%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/CryptoPP.cpp.o
[ 38%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/Hash.cpp.o
[ 39%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/LibSnark.cpp.o
[ 40%] Building CXX object libdevcrypto/CMakeFiles/devcrypto.dir/SecretStore.cpp.o
[ 40%] Linking CXX static library libdevcrypto.a
[ 40%] Built target devcrypto
Scanning dependencies of target rlp
Scanning dependencies of target ethcore
Scanning dependencies of target p2p
[ 40%] Building CXX object rlp/CMakeFiles/rlp.dir/main.cpp.o
[ 40%] Building CXX object libethcore/CMakeFiles/ethcore.dir/BasicAuthority.cpp.o
[ 41%] Building CXX object libethcore/CMakeFiles/ethcore.dir/BlockHeader.cpp.o
[ 42%] Building CXX object libp2p/CMakeFiles/p2p.dir/CapabilityHost.cpp.o
[ 43%] Building CXX object libp2p/CMakeFiles/p2p.dir/Common.cpp.o
[ 43%] Building CXX object libp2p/CMakeFiles/p2p.dir/Host.cpp.o
[ 44%] Building CXX object libethcore/CMakeFiles/ethcore.dir/ChainOperationParams.cpp.o
[ 45%] Linking CXX executable rlp
[ 45%] Built target rlp
[ 46%] Building CXX object libp2p/CMakeFiles/p2p.dir/Network.cpp.o
[ 46%] Building CXX object libethcore/CMakeFiles/ethcore.dir/Common.cpp.o
[ 46%] Building CXX object libp2p/CMakeFiles/p2p.dir/NodeTable.cpp.o
[ 47%] Building CXX object libp2p/CMakeFiles/p2p.dir/Peer.cpp.o
[ 48%] Building CXX object libethcore/CMakeFiles/ethcore.dir/CommonJS.cpp.o
[ 49%] Building CXX object libp2p/CMakeFiles/p2p.dir/RLPXFrameCoder.cpp.o
[ 49%] Building CXX object libethcore/CMakeFiles/ethcore.dir/KeyManager.cpp.o
[ 49%] Building CXX object libp2p/CMakeFiles/p2p.dir/RLPxHandshake.cpp.o
[ 50%] Building CXX object libp2p/CMakeFiles/p2p.dir/Session.cpp.o
[ 50%] Building CXX object libp2p/CMakeFiles/p2p.dir/UDP.cpp.o
[ 51%] Building CXX object libp2p/CMakeFiles/p2p.dir/UPnP.cpp.o
[ 52%] Building CXX object libethcore/CMakeFiles/ethcore.dir/LogEntry.cpp.o
[ 53%] Building CXX object libethcore/CMakeFiles/ethcore.dir/Precompiled.cpp.o
[ 53%] Building CXX object libethcore/CMakeFiles/ethcore.dir/SealEngine.cpp.o
[ 54%] Linking CXX static library libp2p.a
[ 54%] Built target p2p
[ 55%] Building CXX object libethcore/CMakeFiles/ethcore.dir/TransactionBase.cpp.o
[ 56%] Linking CXX static library libethcore.a
[ 56%] Built target ethcore
Scanning dependencies of target evm
Scanning dependencies of target aleth-key
[ 57%] Building CXX object aleth-key/CMakeFiles/aleth-key.dir/main.cpp.o
[ 57%] Building CXX object libevm/CMakeFiles/evm.dir/EVMC.cpp.o
[ 57%] Building CXX object libevm/CMakeFiles/evm.dir/Instruction.cpp.o
[ 58%] Building CXX object libevm/CMakeFiles/evm.dir/ExtVMFace.cpp.o
[ 59%] Building CXX object libevm/CMakeFiles/evm.dir/LegacyVM.cpp.o
[ 60%] Building CXX object libevm/CMakeFiles/evm.dir/LegacyVMCalls.cpp.o
[ 60%] Building CXX object libevm/CMakeFiles/evm.dir/LegacyVMOpt.cpp.o
[ 60%] Linking CXX executable aleth-key
[ 60%] Built target aleth-key
[ 61%] Building CXX object libevm/CMakeFiles/evm.dir/VMFactory.cpp.o
[ 62%] Linking CXX static library libevm.a
[ 62%] Built target evm
Scanning dependencies of target ethereum
[ 62%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Account.cpp.o
[ 63%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BasicGasPricer.cpp.o
[ 63%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Block.cpp.o
[ 64%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BlockChain.cpp.o
c++: internal compiler error: Killed (program cc1plus)
Please submit a full bug report,
with preprocessed source if appropriate.
See <file:///usr/share/doc/gcc-7/README.Bugs> for instructions.
libethereum/CMakeFiles/ethereum.dir/build.make:110: recipe for target 'libethereum/CMakeFiles/ethereum.dir/Block.cpp.o' failed
make[2]: *** [libethereum/CMakeFiles/ethereum.dir/Block.cpp.o] Error 4
make[2]: *** Waiting for unfinished jobs....
CMakeFiles/Makefile2:780: recipe for target 'libethereum/CMakeFiles/ethereum.dir/all' failed
make[1]: *** [libethereum/CMakeFiles/ethereum.dir/all] Error 2
Makefile:151: recipe for target 'all' failed
make: *** [all] Error 2
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ make -j2
[  5%] Built target mpir
[ 10%] Built target secp256k1
[ 11%] Built target instructions
[ 12%] Built target loader
[ 17%] Built target libff
[ 17%] Built target aleth-buildinfo-git
[ 19%] Built target aleth-buildinfo
[ 34%] Built target devcore
[ 36%] Built target aleth-interpreter
[ 40%] Built target devcrypto
[ 47%] Built target ethcore
[ 48%] Built target rlp
[ 56%] Built target p2p
[ 57%] Built target aleth-key
[ 62%] Built target evm
[ 62%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Block.cpp.o
[ 63%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BlockChainImporter.cpp.o
[ 63%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BlockChainSync.cpp.o
[ 64%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BlockDetails.cpp.o
[ 64%] Building CXX object libethereum/CMakeFiles/ethereum.dir/BlockQueue.cpp.o
[ 65%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ChainParams.cpp.o
[ 66%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Client.cpp.o
[ 66%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ClientBase.cpp.o
[ 67%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ClientTest.cpp.o
[ 67%] Building CXX object libethereum/CMakeFiles/ethereum.dir/CommonNet.cpp.o
[ 68%] Building CXX object libethereum/CMakeFiles/ethereum.dir/EthereumCapability.cpp.o
[ 69%] Building CXX object libethereum/CMakeFiles/ethereum.dir/EthereumPeer.cpp.o
[ 69%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Executive.cpp.o
[ 70%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ExtVM.cpp.o
[ 71%] Building CXX object libethereum/CMakeFiles/ethereum.dir/GasPricer.cpp.o
[ 71%] Building CXX object libethereum/CMakeFiles/ethereum.dir/GenericMiner.cpp.o
[ 72%] Building CXX object libethereum/CMakeFiles/ethereum.dir/GenesisInfo.cpp.o
[ 72%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ImportPerformanceLogger.cpp.o
[ 73%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Interface.cpp.o
[ 74%] Building CXX object libethereum/CMakeFiles/ethereum.dir/LogFilter.cpp.o
[ 74%] Building CXX object libethereum/CMakeFiles/ethereum.dir/SnapshotImporter.cpp.o
[ 75%] Building CXX object libethereum/CMakeFiles/ethereum.dir/SnapshotStorage.cpp.o
[ 75%] Building CXX object libethereum/CMakeFiles/ethereum.dir/State.cpp.o
[ 76%] Building CXX object libethereum/CMakeFiles/ethereum.dir/StateImporter.cpp.o
[ 77%] Building CXX object libethereum/CMakeFiles/ethereum.dir/Transaction.cpp.o
[ 77%] Building CXX object libethereum/CMakeFiles/ethereum.dir/TransactionQueue.cpp.o
[ 78%] Building CXX object libethereum/CMakeFiles/ethereum.dir/TransactionReceipt.cpp.o
[ 78%] Building CXX object libethereum/CMakeFiles/ethereum.dir/ValidationSchemes.cpp.o
[ 79%] Building CXX object libethereum/CMakeFiles/ethereum.dir/WarpCapability.cpp.o
[ 80%] Linking CXX static library libethereum.a
[ 82%] Built target ethereum
Scanning dependencies of target webthree
Scanning dependencies of target ethashseal
[ 83%] Building CXX object libwebthree/CMakeFiles/webthree.dir/WebThree.cpp.o
[ 84%] Building CXX object libethashseal/CMakeFiles/ethashseal.dir/Ethash.cpp.o
[ 84%] Building CXX object libethashseal/CMakeFiles/ethashseal.dir/EthashClient.cpp.o
[ 85%] Linking CXX static library libwebthree.a
[ 85%] Built target webthree
[ 86%] Building CXX object libethashseal/CMakeFiles/ethashseal.dir/EthashCPUMiner.cpp.o
[ 87%] Building CXX object libethashseal/CMakeFiles/ethashseal.dir/EthashProofOfWork.cpp.o
[ 87%] Building CXX object libethashseal/CMakeFiles/ethashseal.dir/GenesisInfo.cpp.o
[ 88%] Linking CXX static library libethashseal.a
[ 88%] Built target ethashseal
Scanning dependencies of target web3jsonrpc
Scanning dependencies of target aleth-vm
[ 89%] Building CXX object aleth-vm/CMakeFiles/aleth-vm.dir/main.cpp.o
[ 89%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/AccountHolder.cpp.o
[ 90%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/AdminEth.cpp.o
[ 91%] Linking CXX executable aleth-vm
[ 91%] Built target aleth-vm
[ 92%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/AdminNet.cpp.o
[ 92%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Debug.cpp.o
[ 93%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Eth.cpp.o
[ 93%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/IpcServerBase.cpp.o
[ 94%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/JsonHelper.cpp.o
[ 95%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Net.cpp.o
[ 95%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Personal.cpp.o
[ 96%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/SessionManager.cpp.o
[ 96%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Test.cpp.o
[ 97%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/Web3.cpp.o
[ 98%] Building CXX object libweb3jsonrpc/CMakeFiles/web3jsonrpc.dir/UnixSocketServer.cpp.o
[ 98%] Linking CXX static library libweb3jsonrpc.a
[ 98%] Built target web3jsonrpc
Scanning dependencies of target aleth
[ 98%] Building CXX object aleth/CMakeFiles/aleth.dir/AccountManager.cpp.o
[ 99%] Building CXX object aleth/CMakeFiles/aleth.dir/main.cpp.o
[ 99%] Building CXX object aleth/CMakeFiles/aleth.dir/MinerAux.cpp.o
[100%] Linking CXX executable aleth
[100%] Built target aleth
```

```
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ sudo make install
Install the project...
-- Install configuration: "RelWithDebInfo"
-- Installing: /usr/local/share/aleth/buildinfo.json
-- Installing: /usr/local/include/evmc
-- Installing: /usr/local/include/evmc/loader.h
-- Installing: /usr/local/include/evmc/evmc.h
-- Installing: /usr/local/include/evmc/helpers.h
-- Installing: /usr/local/include/evmc/instructions.h
-- Installing: /usr/local/include/evmc/utils.h
-- Installing: /usr/local/include/evmc/helpers.hpp
-- Installing: /usr/local/lib/cmake/evmc/evmcTargets.cmake
-- Installing: /usr/local/lib/cmake/evmc/evmcTargets-relwithdebinfo.cmake
-- Installing: /usr/local/lib/cmake/evmc/evmcConfig.cmake
-- Installing: /usr/local/lib/cmake/evmc/evmcConfigVersion.cmake
-- Installing: /usr/local/lib/libevmc-instructions.a
-- Installing: /usr/local/lib/libevmc-loader.a
-- Installing: /usr/local/bin/aleth
-- Installing: /usr/local/bin/aleth-key
-- Installing: /usr/local/bin/aleth-vm
vagrant@ubuntu-bionic:~/cpp-ethereum/build$ which solc
/usr/bin/solc
```