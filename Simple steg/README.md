## Simple steg

### Sol
Use ```stegseek``` on the image using rockyou wordlist to get password ```cuteessort37``` and orig.zip, then use ```zip2john orig.zip > hash``` and ```john hash --wordlist=PATH_TO_ROCKYOU.TXT``` to get password ```jesuslove```

Extract ```flag.txt``` with this password.

### flag: grepCTF{tw0_l3v3ls_0f_st3g} 