Minishell is a one of the largest projects in 42 educational program. It provide a great opportunity to create own mini version of bash shell from scratch using C programming language. Honestly most part of the students that didn't have experience in programming before 42 school scary this project, because it contain a lot of edge cases that you didn't find in subject but need to handle by your self. After all I can tell that everyone can finish this project.

It's not hard. It's just huge.  

### A bit context

Greatest part of the 42 Common Core course is a learning how modern technologies works under the hood. Some of projects provide you unique opportunity to explore how operation system works. There you being know about different types of parallel program work, file descriptors, temporary files, basics in system administrating and etc. So, at least the student that starting this project know how to use command terminal!

### Let's start!

Minishell is a partner project. Usually students split this project on 2 parts:

* parsing part - receive and storage information before and during the program work. 
* execution part - provide usability of built-in and external programs. 

Basically shell user experience start's from the command prompt. There user can type any command that he want to execute. Besides just commands user also can use input and output redirection. It provide an ability to storage and use results of command executions. There is a 4 basic types of redirection that we are needed to implement in this project:

- > - create or clean and write output data to the file
- >> - create if it's needed and write output data to the end of file
- < - read input data from the file
- << - create a temporary file that you can fill until you type a limiter and use collected data as input

Command line may contain a lot of redirection calls, but only last one matters. For example:

```bash
< infile1 << "limiter" grep "test" >> outfile1 > outfile2
```

There we have all of redirection type. First of all bash will check exist of `infile1` and will create `outfile1` and `outfile2` if it's needed. Finally shell will open an input for the temporary file that user can fill until he write the "limiter" string. But what about data? From which one source the grep will receive input and where it need to write an output? Exactly latest one matters! Command grep will take a data `from temporary file` and will `fill the outfile2` file as an output file. That how it works.