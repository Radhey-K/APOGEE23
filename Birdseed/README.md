## Birdseed

### Descr
Now my program is truly random, you'll never be able to guess the flag


### Sol
The seed is set only once in the start of the program and used to generate random numbers between 0 and 255 so the same set of numbers will be generated each time if the seed is constant. We can brute-force the seed as we know the partial flag ```grepCTF{``` and are given the entire flag xorred with the random numbers and stored as a 2 digit hexadecimal number. To brute-force the seed, set the seed to each number from 0 to 999 and check the the xor of the first 8 random numbers with the hexadecimal numbers in ```out.txt```
