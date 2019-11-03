# tur 
## A simple programming language for operating a simulated Turing machine 

---

After getting the code go inside the root folder.
``` npm install ```

to install all the dependencies

Then run the command.
```npm link```

After this you should be able to run any program

```tur program.tur```

---

## About tur

tur is an interpreted programming language running on a simulated turing machine. (The program is not stored on the turing machine only data)

The following are the commands

1. right - To move a step right
2. left - To move a step left
3. show - To print the symbol at the current place
4. show_tape - To print the whole tape
5. write < symbol > - To write a symbol at te current place
6. loop < condition > - For looping
7. if < condition > - Simple if condition
8. else - Else for if
9. endblock - To end a loop or if block

## Conditions

Currently there are only two conditional operator `eq` for checking if the current symbol is equal to the given symbol and `neq` for checking if the current symbol is not equal to the current symbol.

##### Example

```
if eq 1
print got_1
endblock
```

In case of loop it runs until the condition is false.

For an example tur program check the program.tur file.

