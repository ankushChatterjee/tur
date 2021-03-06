# tur 
## A simple programming language for operating a simulated Turing machine 

---

After getting the code go inside the root folder.

``` npm install ```

to install all the dependencies

Then run the command.

```npm link```

Tests can be run

```npm test```

After this you should be able to run any program

```tur program.tur```

---

## About tur

tur is an interpreted programming language running on a simulated turing machine. (The program is not stored on the turing machine only data)

The turing machine simulation here does not use "states" instead the operations (Left / Right) (done by the states) can be done with the commands and if statements and states can be repeated with the loop command. This is done to have a structure of a normal programming language. 
Though, adding a dedicated state mechanism is my intention. States would be like objects with 4-tuple representations. The normal programming structure along with states would give ease of learning along with a chance for the user to understand the concept of a turing machine.

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

