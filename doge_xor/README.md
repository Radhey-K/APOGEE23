## doge_xor
Given enc and knowing that the flag starts with ```grepCTF{```, we can get the flag by xorring the first 8 characters of enc with this partial flag to get a partial key ```DOGEDOGE```. Seeing the length the enc is 32, we can guess the key is just ```DOGE``` repeated 8 times and then we can xor enc with the key to get the flag

flag: grepCTF{pl4y1ng_w1th_x0r_is_fun}