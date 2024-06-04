process.stdout.write('Welcome to Holberton School, what is your name?\n');

/**
 * @author Pablo West
 * Creating a program that reads from the
 * standard input and prints a message
 */
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
