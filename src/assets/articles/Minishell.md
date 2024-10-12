Minishell is one of the largest projects in the 42 educational program. It provides a great opportunity to create your own mini version of the Bash shell from scratch using the C programming language. Honestly, most students who lacked programming experience before joining 42 find this project intimidating because it contains many edge cases that aren't covered in the subject but must be handled on your own. However, I can say that anyone can complete this project.

It's not hard. It's just huge.
## A bit context

A significant part of the 42 Common Core curriculum is learning how modern technologies work under the hood. Some projects offer a unique opportunity to explore how operating systems function. In these projects, you’ll learn about parallel programming, file descriptors, temporary files, and the basics of system administration. So, at the very least, students starting this project know how to use the command terminal!
## Let's start!

```mermaid
flowchart TD

A["Bash 🖼️"] --> B["Parsing 📁"]
A --> C["Execution 🔨"]
```

Minishell is a partner project. Students typically divide it into two main parts:
                 
* parsing  - receive and storage information before and during the program work. 
* execution  - provides usability of built-in and external programs. 

But it's <span style="color:rgb(90, 167, 235)">only one type</span> of dividing responsibility inside the team. I know cases where students make <span style="color:rgb(90, 167, 235)">both parts together</span>. In my opinion, it's more difficult, because making this project in a proper way the first time is almost impossible. The subject of the project gives you <span style="color:rgb(90, 167, 235)">only basic view of the shell functions</span> and some time after starting the implementation, you begin to encounter errors, leaks or another mistakes. And in case, when the code that related with error is not yours, it's very hard to understand the programming logic of your partner but you need to fix it. Not having clear logic generates misunderstandings and more errors and bugs in the end.

When each student <span style="color:rgb(90, 167, 235)">takes responsibility from his part</span> is better. If a teammate finds any mistake that is not from his part he just make a bug report and send it to his teammates. He doesn't need to fix it by himself because it's not his responsibility.
## The shell user experience

#### Redirections

The shell experience starts at the command prompt, where users can type any command they want to execute. Besides commands, users can also <span style="color:rgb(90, 167, 235)">use input and output redirection</span>, which allows them to store and use the results of command execution. There are four basic types of redirection that we need to implement in this project:

- `>` - create or clean and write output data to the file
- `>>` - create if it's needed and write output data to the end of file
- `<` - read input data from the file
- `<<` - create a temporary file that you can fill until you type a limiter and use collected data as input

Command line may contain a lot of redirection calls, but only last one matters. For example:

```bash
< infile1 << "limiter" grep "test" >> outfile1 > outfile2
```

There we have all of redirection type. First, bash will check existence of <span style="color:rgb(90, 167, 235)">infile1</span> and create <span style="color:rgb(90, 167, 235)">outfile1</span> and <span style="color:rgb(90, 167, 235)">outfile2</span> if needed. Finally shell will open an input for the temporary file that the user can fill until he write the "limiter" string. But what about the data? From which source will grep receive input and where it will write an output? Exactly latest one matters! Command grep will take a data <span style="color:rgb(90, 167, 235)">from temporary file</span> and will <span style="color:rgb(90, 167, 235)">fill the outfile2</span> as an output file. That how it works.
#### Pipe

In addition, the user may use the pipe `|` tool. It allows the output of one command to be transferred as input to another command.. For example:

```bash
ls | grep 'test' | wc -l
```

This command will count folders and files that name contain "test" string. How it works:

1. `ls` - display a list of files and folders in current folder
2. `grep 'test'` - filter them by name
3. `wc -l` - count lines from input

Together with pipes the commands transfer data like this:

```mermaid
flowchart LR

A("ls") ---> B("grep 'test'") ---> C("wc -l")
```


> If before pipe user enter the output redirection, its file will be opened, but not used to write the data. Next command will receive data from the pipe (only last matters).

> If after pipe user enter the input redirection, the pipe data will be ignored. Next command will receive data from the input redirection (only last matters).
#### Commands

Terminal shell have 2 types of commands: 

1. <span style="color:rgb(90, 167, 235)">Built-in</span> - commands that are part of the shell
2. <span style="color:rgb(90, 167, 235)">External</span> - commands that are stored in the directories of the operating system

Basically, external commands are not located in the current folder. To use them, the shell needs to parse the `PATH` environment variable, which contains a list of directories with public programs, separated by the ':' character.

> If the PATH environment variable is not defined or does not include the path to the folder with the required command, the program will not be found.

Built-in commands <span style="color:rgb(90, 167, 235)">should always be available for use</span>. Below is a list of built-in commands that need to be implemented:

| Command | Argument    | Description                                                       |
| ------- | ----------- | ----------------------------------------------------------------- |
| echo    | string      | Print the string to the output (environment variables is allowed) |
| cd      | folder path | Change current directory to another one by folder path            |
| pwd     | -           | Display absolute path of the current folder                       |
| export  | name=value  | Create environment variable with name and value                   |
| unset   | name        | Remove environment variable by name                               |
| env     | -           | Display list of the environment variables                         |
| exit    | status code | Exit from the shell with status code                              |

#### Signals

Provide the ability to interrupt command execution or shell operation. In this project, we need to handle the following types of signals:

1. `CTRL + D` - interrupt the shell work
2. `CTRL + C` - interrupt the command execution (if command is not executed should display new prompt)
3. `CTRL + \` - doing nothing (really)
## How is works?

### Parsing of the user input

Imagine that the user has opened the minishell for the first time and wants to type a very complicated command prompt:

```bash
ls | < infile grep 'test' | wc -l > outfile1 > outfile2 
```

As you can see, it's just a string with many arguments and words separated by spaces. But how do we detect commands or instructions that the shell needs to execute?

First, we need to <span style="color:rgb(90, 167, 235)">split this string by the | character</span>, which represents a pipe. Why is this needed? Because each part separated by a pipe should be executed in parallel using child processes in the execution phase. After splitting, we need to create an Abstract Syntax Tree and populate it:

```mermaid
flowchart TD

A("|"):::focus -----> B(ls)
A ---> C("|"):::focus
C ---> D("< infile grep 'test'")
C ---> F("wc -l > out1 > out2")

```

This structure follows a very simple rule for filling: if a node has child nodes, it is a <span style="color:rgb(90, 167, 235)">pipe</span>; if it doesn't, it is a <span style="color:rgb(90, 167, 235)">command</span>. At this step, we can determine how many child processes our program will use to execute the user's prompt (3 processes). The next step is to extract the input and output redirections from the command nodes.

As I mentioned earlier, we have 4 types of redirections to implement: `>>`, `>`, `<`, `<<`. After each redirection symbol, there should be a corresponding argument that provides additional information about the destination or source file, or a limiter string for the temporary file. If this is not present, the prompt becomes invalid, and the shell should display an error.

Using this rule, we can easily <span style="color:rgb(90, 167, 235)">extract all kinds of redirections</span> from the command nodes. While extracting, don't forget to check access to the required files. After extraction, our tree will look like this:

```mermaid
flowchart TD

A("|"):::focus -----> B(ls)
A ---> C("|"):::focus
C ---> D("grep test")
D <-...-> DD("inputs : ['< infile']")
C ---> F("wc -l")
F <-...-> FF("outputs : ['> out1', '> out2']")
```

The final step is to <span style="color:rgb(90, 167, 235)">make a connection between commands</span> using the <span style="color:rgb(90, 167, 235)">pipe system call</span>. Why is it a system call? Because our program uses this function to request the OS to perform an action. In this case, the OS creates a temporary file and returns its file descriptors with read and write access. When the program uses the write file descriptor to record something into the temporary file, the program reading from the read file descriptor will automatically receive the newly written value.

```mermaid
graph LR
	
    subgraph Pipe
	
    end
    
	subgraph ProgramA
	    A["write()"] -.- W(Write fd)  
	end

	subgraph ProgramB
		direction TB
		B["read()"] -.- R(Read fd)  
	end

	ProgramA-->|data|Pipe -->|data| ProgramB
```

>The max size of temporary file is 64KB (for someone it's very important to know). 

Using this tool, we can create a chain of paired connections between nodes. Finally, the Abstract Syntax Tree is ready to be used in the execution phase:

```mermaid
flowchart TD

A("|"):::focus -----> B(ls)
B <-...-> BB("outputs : ['| output']")
A ---> C("|"):::focus
C ---> D("grep test")
D <-...-> DD("inputs : ['| input', '< infile']\noutputs : ['| output']")
C ---> F("wc -l")
F <-...-> FF("inputs : ['| input']\noutputs : ['> out1', '> out2']")
```

#### Execution

So, main preparation steps are finished, let's execute something!

First, we need to traverse the tree and <span style="color:rgb(90, 167, 235)">create a child process</span> for each command node. Why is this necessary? Let's talk about how to execute external commands and implement input and output redirections.
#### External command 

As I mentioned earlier, built-in commands are simply part of the shell code. This means they are very easy to execute. But what about external commands? For them, we need to use the `execve` function. This function receives the <span style="color:rgb(90, 167, 235)">path to the command and its arguments</span>, and if everything is correct, the executed program takes control of the current process. After execution, if the external command finishes with a success status code, the process will <span style="color:rgb(90, 167, 235)">terminate automatically</span>. Otherwise, we need to manually close the child process.
#### Redirections

To implement input or output redirection, we should use the `dup2` function. This function allows us to <span style="color:rgb(90, 167, 235)">change the source file for a file descriptor</span>. Essentially, every program starts with 3 file descriptors: 

```mermaid
flowchart LR

A("STDIN") --->|read| T[Terminal]
B("STDOUT") --->|write output| T
C("STDERR") --->|write error messages| T 
```

As you can see, all file descriptors have the terminal as their source file. Using dup2, we can change their source:

```mermaid
flowchart LR

A("STDIN") -..->|old read| T[Terminal]
A --->|new read| F1["File or Pipe"]
B("STDOUT") -..->|old write| T
B --->|new write| F2["File or Pipe"]
C("STDERR") --->|write error messages| T 
```
For example, if we change the source for `STDOUT`, any message from `printf` will be redirected to a file or pipe. It is very important to note that we <span style="color:rgb(90, 167, 235)">cannot undo this change</span>. This is another reason to use child processes during execution.
#### Execution workflow

1. Run the child process for each command:
	- Check if it is a built-in command or not.
	- Set up input and output redirections.
	- Clean up all unused data and close all file descriptors.
	- If the command is a built-in, execute its function; otherwise, call the external program using `execve`.
	- If the command is a built-in, exit with a status code; otherwise, handle the case where command execution fails.
2. Close all redirection file descriptors inside the parent process.
3. Wa
4. it for the completion of all commands and save their exit statuses. 

After these steps, the user prompt is executed. We should save the <span style="color:rgb(90, 167, 235)">exit status of the last command</span>. This value is required for using the echo built-in command with the `$?` variable.
### Conclusion

To wrap things up, building a mini shell is all about breaking down tasks like parsing user input, running commands, and handling file descriptors. By getting the hang of built-in vs. external commands and how input/output redirection works, you’ll be well on your way to creating a shell that works like the real deal.

Using child processes helps keep things organized and makes it easier to handle errors. Plus, understanding tools like the Abstract Syntax Tree, dup2 for redirection, and execve for executing commands is key to making everything tick.

In the end, making a mini shell not only sharpens your programming skills but also gives you a taste of system-level programming, setting you up for even bigger challenges down the road!